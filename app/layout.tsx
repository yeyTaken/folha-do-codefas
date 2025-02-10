import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import "./globals.css";



import { ThemeProvider } from "@/components/Theme/ThemeProvider";

const work_Sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Folha do CODEFAS",
  description: "agencia de noticias do CODEFAS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work_Sans.className} antialiased bg-white dark:bg-[#030304] text-black dark:text-white max-w-7xl mx-auto`}
      >
        {/* <Header /> */}

        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
