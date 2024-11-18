import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { HeaderComponent } from "@/components/HeaderComponents/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponents/FooterComponent";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Template } from "@/components/motion/template";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Edward | Portfolio",
  description: "Introduction of Edward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
        >
          <HeaderComponent />
          {children}
          <FooterComponent />
        </ThemeProvider>
      </body>
    </html>
  );
}
