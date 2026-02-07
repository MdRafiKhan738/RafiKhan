
import React from 'react'
import Services from '../AllPageComponents/Services'
export const metadata = {
  title: "Services | Hire Rafi Khan — FullStack Developer, AI & Web Solutions",
  description:
    "Professional services by Rafi Khan — FullStack Development, Next.js, React, MERN, AI Automation, Mobile Apps, Cloud Systems and Enterprise Software. Build scalable, secure and high-performance digital platforms with expert architecture.",

  keywords: [
    "Rafi Khan Services",
    "Hire FullStack Developer",
    "FullStack Development Services",
    "Next.js Developer Service",
    "React Developer Service",
    "MERN Stack Developer",
    "AI Automation Services",
    "Web Development Services",
    "Mobile App Development",
    "Software Development Services",
    "Enterprise Application Developer",
    "Top Developer Bangladesh",
    "Hire Web Developer",
    "Portfolio Developer Services"
  ],

  openGraph: {
    title: "Premium Development Services — Rafi Khan",
    description:
      "Explore elite services by Rafi Khan — FullStack, AI, Web, Mobile and scalable enterprise solutions for businesses and startups.",
    url: "https://md-rafi-khan.vercel.app/services",
    siteName: "Rafi Khan Portfolio",
    images: [
      {
        url: "/RafiKhanLogo.png",
        width: 1200,
        height: 630,
        alt: "Rafi Khan Services"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Hire Rafi Khan — FullStack & AI Services",
    description:
      "Professional development services including FullStack, AI automation, web apps and mobile platforms.",
    images: ["/RafiKhanLogo.png"]
  },

  robots: {
    index: true,
    follow: true
  },

  alternates: {
    canonical: "https://md-rafi-khan.vercel.app/services"
  }
};

const Page = () => {
  return (
    <div>
      <Services />
    </div>
  )
}

export default Page