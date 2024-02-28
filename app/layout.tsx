import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import StarsCanvas from "../components/main/StarsBackground";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.praveenpn.in"
  ),
  title: "Praveen PN",
  description: "Full Stack Developer passionate about creating innovative web applications.",
  keywords: ["Developer", "Web Development","MERN Stack Developer", "JavaScript", "React", "Next.js" , "Node.js", "MongoDB"],
  openGraph: {
    title: "Praveen PN - Full Stack Developer",
    description: "Explore the portfolio and projects of Praveen PN, a Full Stack Developer.",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode;}) {
  return (
    <html lang="en">
    <body
      className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
    >
      <StarsCanvas/>
      <Navbar />
      {children}
    </body>
  </html>
  );
}
