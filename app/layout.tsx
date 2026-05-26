import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abiyu Ambaye | Solution Architect & QA Officer",
  description:
    "Portfolio of Abiyu Ambaye — Solution Architect and Quality Assurance Officer with expertise in banking systems, API integration, and software development.",
  keywords: ["Solution Architect", "QA", "Banking", "Ethiopia", "Abiyu Ambaye"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text font-body antialiased">{children}</body>
    </html>
  );
}
