import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-pribadi.vercel.app"),
  
  title: {
    default: "Ahmad Syukri Gozali — Portfolio",
    template: "%s | Ahmad Syukri Gozali",
  },

  description:
    "Portfolio pribadi Ahmad Syukri Gozali, mahasiswa Teknik Informatika yang berfokus pada software development, web development, dan teknologi modern.",

  keywords: [
    "Ahmad Syukri Gozali",
    "Ahmad Syukri",
    "Portfolio",
    "Teknik Informatika",
    "Software Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
  ],

  authors: [
    {
      name: "Ahmad Syukri Gozali",
    },
  ],

  creator: "Ahmad Syukri Gozali",

  openGraph: {
    title: "Ahmad Syukri Gozali — Portfolio",
    description:
      "Portfolio pribadi Ahmad Syukri Gozali — Informatics Student & Software Developer.",
    type: "website",
    locale: "id_ID",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmad Syukri Gozali — Portfolio",
    description:
      "Portfolio pribadi Ahmad Syukri Gozali — Informatics Student & Software Developer.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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