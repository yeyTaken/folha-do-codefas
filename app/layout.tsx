import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";


import { ThemeProvider } from "@/components/Theme";

const work_Sans = Work_Sans({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Folha do CODEFAS",
  description: "Jornal CODEFAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work_Sans.className} antialiased bg-white dark:bg-[#131111] text-black dark:text-white max-w-7x1 mx-auto`}
      >

        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange>{children}</ThemeProvider>
      </body>
    </html>
  );
}
