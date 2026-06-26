import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeerthiShree TS | AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of KeerthiShree TS — Computer Science undergraduate specializing in AI/ML systems, full-stack development, and intelligent automation. Building with Python, FastAPI, Next.js, and modern AI frameworks.",
  keywords: [
    "KeerthiShree TS",
    "AI Engineer",
    "ML Engineer",
    "Full-Stack Developer",
    "Python",
    "FastAPI",
    "Next.js",
    "Machine Learning",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "KeerthiShree TS" }],
  openGraph: {
    title: "KeerthiShree TS | AI/ML Engineer & Full-Stack Developer",
    description:
      "Computer Science undergraduate building production-grade AI systems and full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
