import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  phone: string;
  area: string;
  message: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function getLogoPath(): Promise<string | null> {
  const fs = await import("fs");
  const path = await import("path");
  const logoPath = path.join(
    /* turbopackIgnore: true */ process.cwd(),
    "public",
    "images",
    "Link - ホーム.png"
  );
  try {
    if (fs.existsSync(logoPath)) {
      return logoPath;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function buildHtmlBody(
  data: ContactPayload,
  logoCid: string | null
): string {
  const rows = [
    { label: "お名前", value: data.name },
    { label: "電話番号", value: data.phone },
    { label: "お住まいのエリア", value: data.area },
    { label: "ご相談内容", value: data.message || "（未入力）" },
  ];

  const rowHtml = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:14px 18px;border-bottom:1px solid #e8ecea;background:#f8faf9;font-weight:700;color:#1a5c54;font-size:13px;width:32%;vertical-align:top;">${escapeHtml(r.label)}</td>
        <td style="padding:14px 18px;border-bottom:1px solid #e8ecea;color:#333;font-size:15px;line-height:1.6;vertical-align:top;white-space:pre-wrap;">${escapeHtml(r.value)}</td>
      </tr>`
    )
    .join("");

  const logoBlock = logoCid
    ? `<img src="cid:${logoCid}" alt="エアコンクリーンナビ" width="200" style="max-width:200px;height:auto;display:block;margin:0 auto 8px;" />`
    : `<p style="margin:0 0 8px;font-size:20px;font-weight:700;color:#1a5c54;letter-spacing:0.05em;">エアコンクリーンナビ</p>`;

  return `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#eef5f4;font-family:'Helvetica Neue',Arial,'Hiragino Kaku Gothic ProN','Hiragino Sans',Meiryo,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#eef5f4;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(26,92,84,0.12);">
          <tr>
            <td style="background:linear-gradient(135deg,#4db6ac 0%,#3d9a91 100%);padding:28px 24px;text-align:center;">
              ${logoBlock}
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.95);letter-spacing:0.08em;">無料お見積り・ご相談フォーム</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0 0;">
              <p style="margin:20px 24px 8px;font-size:15px;color:#333;line-height:1.7;">
                ウェブサイトから新しいお問い合わせが届きました。
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 24px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e0ebe8;border-radius:12px;overflow:hidden;">
                ${rowHtml}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px;">
              <p style="margin:0;font-size:12px;color:#888;line-height:1.6;text-align:center;">
                このメールはお客様の送信操作により自動送信されています。
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendContactEmail(data: ContactPayload): Promise<void> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!host || !user || !pass || !to) {
    throw new Error("SMTP configuration is incomplete.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const logoPath = await getLogoPath();
  const logoCid = logoPath ? "aircone-logo-inline" : null;

  const attachments = logoPath
    ? [
        {
          filename: "logo.png",
          path: logoPath,
          cid: logoCid as string,
        },
      ]
    : [];

  const subject = `【無料見積り】${data.name} 様よりお問い合わせ`;

  await transporter.sendMail({
    from: `"エアコンクリーンナビ" <${user}>`,
    to,
    subject,
    html: buildHtmlBody(data, logoCid),
    text: [
      "ウェブサイトからお問い合わせがありました。",
      "",
      `お名前: ${data.name}`,
      `電話番号: ${data.phone}`,
      `お住まいのエリア: ${data.area}`,
      `ご相談内容: ${data.message || "（未入力）"}`,
    ].join("\n"),
    attachments,
  });
}
