
import React from 'react'
import About from '../AllPageComponents/About'
export const metadata = {
  title: "Rafi Khan | FullStack Developer Portfolio | AI, Web & Mobile Engineer",
  description:
    "Official portfolio of Rafi Khan — FullStack Developer, AI Engineer and creator of scalable web, mobile and cloud platforms. متخصص in Next.js, React, Node.js, MongoDB, AI Systems and Enterprise Applications.",
  
  keywords: [
    "Rafi Khan",
    "Rafikhan developer",
    "Rafi Khan portfolio",
    "FullStack developer",
    "Next.js developer",
    "React developer",
    "AI engineer",
    "Bangladesh developer",
    "Web developer portfolio",
    "Mobile app developer",
    "Enterprise software engineer"
  ],

  authors: [{ name: "Rafi Khan", url: "https://yourdomain.com" }],
  creator: "Rafi Khan",
  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: " Rafi Khan — Senior FullStack Mern Developer",
    description:
      "Explore the official portfolio of Rafi Khan — building scalable AI, Web and Mobile platforms used by thousands.",
    url: "https://md-rafi-khan.vercel.app/about",
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
    description:
      "Official portfolio of Rafi Khan — Next.js, React, AI & Cloud Engineer.",
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
  },

  alternates: {
    canonical: "https://md-rafi-khan.vercel.app/about"
  }
}

const Page = () => {
  return (
    <div>
        <About/>
    </div>
  )
}

export default Page