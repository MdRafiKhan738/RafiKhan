
import React from 'react'
import Projects from '../AllPageComponents/Projects'
export const metadata = {
  title: "Projects | Rafi Khan — FullStack Developer Portfolio",
  description:
    "Explore real-world projects built by Rafi Khan — Advanced FullStack applications, AI-powered platforms, scalable web systems, mobile apps and enterprise solutions using Next.js, React, Node.js, MongoDB, Cloud and AI.",

  keywords: [
    "Rafi Khan Projects",
    "FullStack Developer Projects",
    "Developer Portfolio Projects",
    "Next.js Projects",
    "React Projects",
    "Node.js Projects",
    "AI Projects",
    "FullStack Applications",
    "Software Engineer Portfolio",
    "Top Developer Projects"
  ],

  openGraph: {
    title: "Projects — Rafi Khan FullStack Developer",
    description:
      "See enterprise-grade projects built by Rafi Khan including AI platforms, scalable web apps and advanced fullstack systems.",
    url: "https://md-rafi-khan.vercel.app/projects",
    images: [
      {
        url: "/RafiKhanLogo.png",
        width: 1200,
        height: 630,
        alt: "Rafi Khan Projects"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Rafi Khan Projects",
    description:
      "Explore advanced fullstack and AI-powered projects built by Rafi Khan.",
    images: ["/RafiKhanLogo.png"]
  },

  robots: {
    index: true,
    follow: true
  }
}
const Page = () => {
  return (
    <div>
        <Projects />
    </div>
  )
}

export default Page