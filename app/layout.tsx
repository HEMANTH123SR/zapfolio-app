import type { Metadata } from "next";
import { hackerNormal } from "@/fonts/font";
import "./globals.css";
import { Navbar } from "@/components/component/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={hackerNormal.style}>
      <body
        className={` flex flex-col   w-screen h-full`}
        style={{
          // backgroundColor: "#F6F7F9",
          backgroundColor: "#FFFFFF"
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
