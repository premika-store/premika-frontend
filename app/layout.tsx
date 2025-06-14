import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import {Footer} from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProdivder from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Priyankit Prints",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProdivder/>
        <ToastProvider />
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}