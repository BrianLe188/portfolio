import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import LoadingContextProvider from "@/contexts/loading";
import { twMerge } from "tailwind-merge";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-modal/styles.css";
import MouseMoveContextProvider from "@/contexts/mouse-move";

const noto = Noto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(noto.className, "bg-primary-yellow")}>
        <LoadingContextProvider>
          <MouseMoveContextProvider>
            <Navbar />
            {children}
            <ToastContainer />
          </MouseMoveContextProvider>
        </LoadingContextProvider>
      </body>
    </html>
  );
}
