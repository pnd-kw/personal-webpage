import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ preload: false });

export const metadata: Metadata = {
  title: "Personal Webpage | pnd-kw",
  description: "My personal webpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
