import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { headers } from "next/headers";
import ReduxProvider from "./ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silver Gardens - Home",
  description: "It is a website which allows patients to book appointments and also allows administrator to manage appointments and other data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ReduxProvider>
          <Navbar />
          <div className="flex">
            <Sidebar />
            {children}
          </div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
