"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const area = String(fd.get("area") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !phone || !area) {
      setErrorMessage("必須項目をすべて入力してください。");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, area, message }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setErrorMessage(data.error ?? "送信に失敗しました。");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(
        "通信エラーが発生しました。接続を確認のうえ、再度お試しください。"
      );
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-group-row">
        <div className="form-group">
          <label htmlFor="contact-name">
            お名前<span className="required">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-phone">
            電話番号<span className="required">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-area">
          お住まいのエリア<span className="required">*</span>
        </label>
        <input
          id="contact-area"
          name="area"
          type="text"
          autoComplete="address-level1"
          required
          disabled={status === "loading"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">ご相談内容</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          disabled={status === "loading"}
        />
      </div>

      {status === "success" && (
        <p
          className="contact-form-feedback contact-form-feedback--success"
          role="status"
        >
          お問い合わせを送信しました。担当よりご連絡いたします。
        </p>
      )}
      {status === "error" && errorMessage && (
        <p
          className="contact-form-feedback contact-form-feedback--error"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="submit-btn"
        disabled={status === "loading"}
      >
        {status === "loading" ? "送信中…" : "無料見積もりを送信する"}
      </button>
    </form>
  );
}
