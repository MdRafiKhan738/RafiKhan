import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./pagescomponents/Nav";
import Footer from "./pagescomponents/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://md-rafi-khan.vercel.app"),

  title: {
    default: "Rafi Khan | FullStack Developer Portfolio | AI, Web & Mobile Engineer",
    template: "%s | Rafi Khan"
  },

  description:
    "Official portfolio of Rafi Khan — Elite FullStack Developer, AI Engineer & Architect of scalable web, mobile and enterprise platforms. Specialized in Next.js, React, Node.js, MongoDB, Cloud & AI Systems.",

  keywords: [
    "Rafi Khan",
    "Rafikhan developer",
    "FullStack Developer",
    "FullStack Developer Portfolio",
    "Next.js Developer",
    "React Developer",
    "AI Engineer",
    "Top Developer Portfolio",
    "Bangladesh Developer",
    "Web Developer Portfolio",
    "Software Engineer Portfolio",
    "Hire FullStack Developer"
  ],

  authors: [{ name: "Rafi Khan", url: "https://md-rafi-khan.vercel.app" }],
  creator: "Rafi Khan",
  publisher: "Rafi Khan",

  openGraph: {
    title: "Rafi Khan — #1 FullStack Developer",
    description:
      "Explore the official portfolio of Rafi Khan — Building scalable AI, Web & Mobile platforms.",
    url: "https://md-rafi-khan.vercel.app",
    siteName: "Rafi Khan Portfolio",
    images: [
      {
        url: "/RafiKhanLogo.png",
        width: 1200,
        height: 630,
        alt: "Rafi Khan Developer"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Rafi Khan — FullStack Developer",
    description: "Official portfolio of Rafi Khan — AI, Web & Mobile Engineer.",
    images: ["/RafiKhanLogo.png"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
