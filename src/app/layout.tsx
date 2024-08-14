import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import LoadingContextProvider from "@/contexts/loading";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-primary-yellow")}>
        <LoadingContextProvider>
          <Navbar />
          {children}
        </LoadingContextProvider>
      </body>
    </html>
  );
}
