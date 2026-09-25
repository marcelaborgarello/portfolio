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
  title: "Marcela Borgarello | Desarrolladora full stack",
  description: "Portfolio de Marcela Borgarello, desarrolladora full stack de Río Cuarto, Córdoba. Construyo sistemas para comercios a partir de problemas que viví detrás del mostrador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${geistMono.variable} font-outfit antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
