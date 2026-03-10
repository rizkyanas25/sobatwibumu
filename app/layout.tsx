import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sobat Wibu Mu",
  description: "Kerja demi nafkah, wibu demi jiwa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#0A0A0A] text-[#F6F1E8] antialiased">
        {children}
      </body>
    </html>
  );
}

