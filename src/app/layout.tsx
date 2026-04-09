import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "クリーンエアー - エアコン洗浄サービス",
  description: "プロによる分解洗浄でカビ・臭いを徹底除去。お近くの提携業者から最適なプロをご案内します。",
  icons: {
    icon: "/images/Link - ホーム.png?v=1",
    shortcut: "/images/Link - ホーム.png?v=1",
    apple: "/images/Link - ホーム.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
