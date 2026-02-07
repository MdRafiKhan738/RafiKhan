
import React from 'react'
import Contact from '../AllPageComponents/Contact'
export const metadata = {
  title: "Contact Rafi Khan | Hire FullStack Developer & AI Engineer",
  description:
    "Contact Rafi Khan — Professional FullStack Developer & AI Engineer. Hire for Web Apps, Mobile Apps, Enterprise Software, AI Systems, Ecommerce Platforms and Cloud Solutions.",

  keywords: [
    "Contact Rafi Khan",
    "Hire FullStack Developer",
    "Hire Next.js developer",
    "Hire React developer",
    "AI developer for hire",
    "Freelance developer Bangladesh",
    "Software engineer contact",
    "Web developer contact",
    "Mobile app developer hire"
  ],

  openGraph: {
    title: "Hire Rafi Khan — FullStack & AI Engineer",
    description:
      "Looking for scalable web, mobile or AI system? Contact Rafi Khan now.",
    url: "https://md-rafi-khan.vercel.app/contact",
    siteName: "Rafi Khan Portfolio",
    images: [
      {
        url: "/RafiKhanLogo.png",
        width: 1200,
        height: 630,
        alt: "Contact Rafi Khan"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Rafi Khan",
    description: "Hire Rafi Khan for Web, Mobile & AI projects",
    images: ["/RafiKhanLogo.png"]
  },

  robots: {
    index: true,
    follow: true
  },

  alternates: {
    canonical: "https://md-rafi-khan.vercel.app/contact"
  }
}

const Page = () => {







  return (
    <div>
        <Contact />
    </div>
  )
}

export default Page