import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Breadcrumb from "./components/BreadCrumb";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "A great place to buy amazing products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Breadcrumb/>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
