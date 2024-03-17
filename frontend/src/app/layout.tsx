import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "../components/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PopNet",
  description: "Online pop up store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Nav />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
