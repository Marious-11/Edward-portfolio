import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { HeaderComponent } from "@/components/HeaderComponents/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponents/FooterComponent";
import Head from "next/head";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Edward | Portfolio",
  description: "Introduction of Edward",

  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Edward | Portfolio",
    // startUpImage: [],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Edward | Portfolio",
    description: "Introduction of Edward",
    images: "/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edward | Portfolio",
    description: "Introduction of Edward",
    images: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>My awesome PWA app</title>
        <meta name="description" content="Best PWA app in the world!" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="mask-icon" href="/logo.png" color="#FFFFFF" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="My awesome PWA app" />
        <meta name="twitter:description" content="Best PWA app in the world!" />
        <meta name="twitter:image" content="/icons/twitter.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My awesome PWA app" />
        <meta property="og:description" content="Best PWA app in the world!" />
        <meta property="og:site_name" content="My awesome PWA app" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="/icons/og.png" />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        <link
          rel="apple-touch-startup-image"
          href="/logo.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo.png"
          sizes="640x1136"
        />
      </Head>
      <body className={`${outfit.className} antialiased`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
        > */}
        <HeaderComponent />
        {children}
        <FooterComponent />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
