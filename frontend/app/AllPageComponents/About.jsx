'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

// ICONS (COLORFUL / GLASSY)
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiAmazonaws,
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiIos,
  SiAndroid,
  SiSwift,
  SiFirebase
} from 'react-icons/si'

import { Download, ArrowRight } from 'lucide-react'

import Silk from '@/components/Silk'
import RafiStars from '@/components/RafiStars'

import rafipic from '../../public/RafiKhanLogo.png'

const About = () => {
  const router = useRouter()

  return (
    <main className="relative min-h-screen w-full bg-[#020617] overflow-x-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk speed={3} scale={1.1} color="#0a3cff" noiseIntensity={1.1} />
        <RafiStars />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#020617]" />
      </div>

      {/* CONTENT */}
      <section className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 xl:px-28 pt-32 pb-40 space-y-40">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Hi, I’m <span className="text-blue-500">Rafi Khan</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
              Fullstack Architect • Entrepreneur • System Designer
              <br />
              I build <span className="text-blue-400 font-semibold">Amazon‑level platforms</span>,
              AI products, education ecosystems & mobile apps.
            </p>

            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => router.push('/contact')}
                className="group px-8 py-4 rounded-full bg-blue-500 text-black font-bold flex items-center gap-3 hover:scale-105 transition"
              >
                Get In Touch
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>

              <a
                href="/Rafi_Khan_CV.pdf"
                download
                className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition"
              >
                <Download className="inline mr-2" /> CV
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 rounded-full blur-3xl bg-blue-500/30" />
            <Image
              src={rafipic}
              alt="Rafi Khan"
              className="relative rounded-full border border-white/20 backdrop-blur-xl"
              width={420}
              height={420}
              priority
            />
          </motion.div>
        </div>

        {/* TECH STACK – SCROLLING */}
        <div className="space-y-14">
          <h2 className="text-4xl font-bold text-white">Tech Arsenal</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-10">
            <Tech icon={<SiReact />} label="React" color="#61dafb" />
            <Tech icon={<SiNextdotjs />} label="Next.js" color="#ffffff" />
            <Tech icon={<SiRedux />} label="Redux" color="#764abc" />
            <Tech icon={<SiTailwindcss />} label="Tailwind" color="#38bdf8" />
            <Tech icon={<SiFramer />} label="Framer Motion" color="#e100ff" />
            <Tech icon={<SiJavascript />} label="JavaScript" color="#f7df1e" />
            <Tech icon={<SiTypescript />} label="TypeScript" color="#3178c6" />
            <Tech icon={<SiNodedotjs />} label="Node.js" color="#3c873a" />
            <Tech icon={<SiMongodb />} label="MongoDB" color="#47a248" />
            <Tech icon={<SiPostgresql />} label="PostgreSQL" color="#336791" />
            <Tech icon={<SiAmazonaws />} label="AWS" color="#ff9900" />
            <Tech icon={<SiPython />} label="Python" color="#ffd43b" />
            <Tech icon={<SiCplusplus />} label="C++" color="#00599c" />
            <Tech icon={<SiFirebase />} label="Firebase" color="#ffca28" />
            <Tech icon={<SiIos />} label="iOS Dev" color="#ffffff" />
            <Tech icon={<SiSwift />} label="Swift" color="#f05138" />
            <Tech icon={<SiAndroid />} label="Android" color="#3ddc84" />
            <Tech icon={<SiReact />} label="React Native" color="#61dafb" />
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-10">
          <Stat title="Projects Delivered" value="60+" />
          <Stat title="Happy Customers" value="100+" />
          <Stat title="Years Experience" value="7+" />
        </div>

        {/* EXTRA INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <h2 className="text-4xl font-bold text-white">More About Me</h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            I’m also a <span className="text-blue-400 font-semibold">Mobile App Developer</span> —
            building high‑performance <b>iOS apps</b>, cross‑platform systems with
            <b> React Native</b>, and scalable backend‑driven mobile architectures.
            <br /><br />
            I don’t freelance. I architect systems meant to scale to
            <span className="text-blue-400"> millions of users</span>.
          </p>
        </motion.div>

      </section>
    </main>
  )
}

export default About

/* COMPONENTS */

const Tech = ({ icon, label, color }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.05 }}
    className="group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 flex flex-col items-center gap-4"
  >
    <div
      className="text-5xl"
      style={{ color }}
    >
      {icon}
    </div>
    <span className="text-white font-semibold group-hover:text-blue-400 transition">
      {label}
    </span>
  </motion.div>
)

const Stat = ({ title, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 text-center"
  >
    <h3 className="text-5xl font-extrabold text-blue-500">{value}</h3>
    <p className="mt-2 text-neutral-300 text-lg">{title}</p>
  </motion.div>
)
