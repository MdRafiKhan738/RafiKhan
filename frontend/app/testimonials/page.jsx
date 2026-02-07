import React from 'react'
import Testimonials from '../AllPageComponents/Testimonials'
export const metadata = {
  title: "Client Testimonials | Rafi Khan — FullStack Developer",
  description:
    "Read real client testimonials about Rafi Khan — A professional FullStack Developer delivering high-performance web, mobile and AI platforms with enterprise-level security and scalability.",

  keywords: [
    "Rafi Khan Testimonials",
    "Developer Reviews",
    "Client Reviews FullStack Developer",
    "Portfolio Testimonials",
    "Hire Rafi Khan Developer",
    "Software Engineer Reviews",
    "Top Developer Feedback"
  ],

  openGraph: {
    title: "Client Testimonials — Rafi Khan",
    description:
      "Real feedback from clients about working with Rafi Khan — FullStack Developer & AI Engineer.",
    url: "https://https://md.com/testimonials",
    images: [
      {
        url: "/RafiKhanLogo.png",
        width: 1200,
        height: 630,
        alt: "Rafi Khan Testimonials"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Rafi Khan Client Testimonials",
    description:
      "See what clients say about Rafi Khan — Professional FullStack Developer.",
    images: ["/RafiKhanLogo.png"]
  },

  robots: {
    index: true,
    follow: true
  }
}

const page = () => {
  return (
    <div>
     <Testimonials />
        
    </div>
  )
}

export default page