import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jose Cortina | Full Stack Developer",
  description:
    "Professional portfolio of Jose Tomas Cortina Espitia, Full Stack Developer focused on React, Next.js, Node.js, Python, AI automation and computer vision systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
