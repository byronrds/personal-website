import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byron Richards",
  description: "",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/red.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/red.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
