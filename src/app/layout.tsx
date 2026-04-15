import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "エアコンのニオイ・カビを徹底洗浄！プロの分解クリーニングで空気をキレイに｜【関東圏】対応｜即日OK｜年間5000台実績",
  description:
    "エアコンのニオイ・カビを徹底洗浄！プロの分解クリーニングで空気をキレイに。【関東圏】対応｜即日OK｜年間5000台実績。エアコンクリーンナビ。",
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
