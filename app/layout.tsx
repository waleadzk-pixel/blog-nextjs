import { Roboto } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A simple Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
