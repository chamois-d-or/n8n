import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Øresund",
  description: "Let's get it on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
