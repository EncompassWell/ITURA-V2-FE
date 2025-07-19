import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Itura",
  description: "Your Web3 Art Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='font-inter max-w-[1560px] mx-auto'
      >
        {children}
      </body>
    </html>
  );
}
