import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/footer";
import ModalProdivder from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { Header } from "@/components/header";
import NavbarDemo from "@/components/resize-navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premika",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} relative`}>
        
        <div className="bg-background">
          <ModalProdivder />
          <ToastProvider />
          {/* <Header /> */}
          {/* <NavbarDemo /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
