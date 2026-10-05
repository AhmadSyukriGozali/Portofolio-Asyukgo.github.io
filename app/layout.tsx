import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Syukri Gozali | Teknik Informatika",
  description:
    "Portfolio pribadi Ahmad Syukri Gozali, mahasiswa Teknik Informatika Universitas Bina Sarana Informatika.",
  authors: [
    {
      name: "Ahmad Syukri Gozali",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}