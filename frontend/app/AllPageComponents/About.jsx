'use client'
import rafipic from '../../public/RafiKhan.png'
import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Brain,
  Cpu,
  Cloud,
  GraduationCap,
  Download,
  Briefcase,
  Rocket
} from 'lucide-react'

import Silk from '@/components/Silk'
import RafiStars from '@/components/RafiStars'

const About = () => {
  return (
    <main className="relative min-h-screen w-full bg-[#020617] overflow-x-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk speed={3} scale={1.1} color="#0a3cff" noiseIntensity={1.1} />
        <RafiStars />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#020617]" />
      </div>

      {/* 🧠 CONTENT */}
      <section className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32 pt-32 pb-32 max-w-[1600px] mx-auto space-y-24">

        {/* HERO INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            About <span className="text-blue-500">Rafi Khan</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
            I am not just another developer or freelancer.
            <br />
            I am a <span className="text-blue-400 font-semibold">Fullstack Architect & Entrepreneur</span> building
            <span className="text-blue-400"> ultra-large-scale platforms</span> — Amazon-level systems,
            education ecosystems, and AI-powered products.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          <SkillCard
            icon={<Code2 />}
            title="Frontend Engineering"
            items={[
              'HTML, CSS, JavaScript',
              'React.js, Next.js',
              'Redux Toolkit',
              'Advanced Animations (Framer Motion)',
              'Ultra-Premium UI/UX'
            ]}
          />

          <SkillCard
            icon={<Database />}
            title="Backend & Databases"
            items={[
              'Node.js Architecture',
              'MongoDB, PostgreSQL',
              'NeonDB, Supabase',
              'Headless CMS (Strapi)',
              'Enterprise API Design'
            ]}
          />

          <SkillCard
            icon={<Cloud />}
            title="Cloud & Scalability"
            items={[
              'AWS Infrastructure',
              'High-Traffic Systems',
              'Secure Auth Systems',
              'Large-Scale Ecommerce'
            ]}
          />

          <SkillCard
            icon={<Brain />}
            title="AI & Advanced Tech"
            items={[
              'Python (Advanced)',
              'AI Text-to-Video',
              'AI SaaS Products',
              'Automation Systems'
            ]}
          />

          <SkillCard
            icon={<Cpu />}
            title="Programming Languages"
            items={[
              'JavaScript / TypeScript',
              'Python (Advanced)',
              'C++ (Advanced)',
              'SQL / NoSQL'
            ]}
          />

          <SkillCard
            icon={<GraduationCap />}
            title="Education Platforms"
            items={[
              'Skill-based Learning Systems',
              'Massive Education Portals',
              'Mentoring Builders & Founders'
            ]}
          />
        </div>

        {/* 🚀 TIMELINE */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-white flex items-center gap-3">
            <Rocket className="text-blue-500" />
            Journey & Achievements
          </h2>

          <div className="space-y-8 border-l border-blue-500/30 pl-8">
            <Timeline year="2018" text="Started professional journey as a Fullstack Developer, mastering frontend & backend fundamentals." />
            <Timeline year="2020" text="Built scalable ecommerce & education platforms with real-world traffic." />
            <Timeline year="2022" text="Entered AI, cloud architecture, and enterprise-grade system design." />
            <Timeline year="2024" text="Architecting Amazon-level ecommerce ecosystems and AI products." />
            <Timeline year="Present" text="Entrepreneur building massive digital platforms, not freelancing." />
          </div>
        </div>

        {/* 📄 DOWNLOAD CV */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <a
            href="/Rafi_Khan_CV.pdf"
            download
            className="flex items-center gap-3 rounded-full px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold hover:bg-blue-500 hover:text-black transition-all shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            <Download />
            Download CV
          </a>
        </motion.div>

      </section>
    </main>
  )
}

export default About

/* ---------------- COMPONENTS ---------------- */

const SkillCard = ({ icon, title, items }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 space-y-4"
  >
    <div className="flex items-center gap-3 text-blue-400">
      {icon}
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <ul className="space-y-2 text-neutral-300">
      {items.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  </motion.div>
)

const Timeline = ({ year, text }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative"
  >
    <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-blue-500" />
    <h4 className="text-lg font-bold text-blue-400">{year}</h4>
    <p className="text-neutral-300">{text}</p>
  </motion.div>
)
