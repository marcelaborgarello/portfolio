import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcela Borgarello | SaaS Architect & Senior Developer",
  description: "Portfolio profesional de Marcela Borgarello, Senior Full-Stack Developer & SaaS Architect. Especialista en Next.js, React e IA-Driven Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} font-outfit antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
