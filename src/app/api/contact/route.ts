import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/contact-email";

const MAX_LEN = 2000;

function trimField(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const { name, phone, area, message } = body as Record<string, unknown>;

  const nameT = trimField(name, 200);
  const phoneT = trimField(phone, 50);
  const areaT = trimField(area, 200);
  const messageT = trimField(message, MAX_LEN);

  if (!nameT || !phoneT || !areaT) {
    return NextResponse.json(
      {
        ok: false,
        error: "お名前・電話番号・お住まいのエリアは必須です。",
      },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail({
      name: nameT,
      phone: phoneT,
      area: areaT,
      message: messageT,
    });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json(
      {
        ok: false,
        error:
          "送信に失敗しました。時間をおいて再度お試しいただくか、お電話でお問い合わせください。",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
