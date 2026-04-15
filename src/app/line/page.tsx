import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LINE_ADD_FRIEND_URL } from "@/lib/line";

export const metadata: Metadata = {
  title: "LINEでお問い合わせ | クリーンエアー",
  description:
    "LINEのQRコードから友だち追加してお問い合わせいただけます。",
};

export default function LinePage() {
  return (
    <div className="line-page">
      <header className="line-page-header">
        <Link href="/" className="line-page-back">
          ← トップへ戻る
        </Link>
      </header>

      <main className="line-page-main">
        <p className="line-page-label">CONTACT</p>
        <h1 className="line-page-title">LINEでお問い合わせ</h1>
        <p className="line-page-lead">
          QRコードをカメラで読み取るか、下のボタンからLINEを開いて友だち追加してください。
        </p>

        <div className="line-page-qr-wrap">
          <Image
            src="/images/QR.PNG"
            alt="LINE友だち追加用QRコード"
            width={280}
            height={280}
            priority
            className="line-page-qr"
          />
        </div>

        <a
          href={LINE_ADD_FRIEND_URL}
          className="line-page-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINEで開く（友だち追加）
        </a>

        <p className="line-page-note">
          スマートフォンではLINEアプリが起動します。PCではブラウザでLINEが開きます。
        </p>
      </main>
    </div>
  );
}
