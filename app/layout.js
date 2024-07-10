import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ContextProvider } from "@/components/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Institute of Bangladesh",
  description: "Generated by Institute of Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}