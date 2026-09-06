'use client'

import React, { useRef, useState, useEffect } from 'react'
import { 
  motion, 
  AnimatePresence, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from 'framer-motion'
import { 
  IconHome, 
  IconTerminal2, 
  IconBriefcase, 
  IconUser, 
  IconCurrencyDollar, 
  IconMail 
} from "@tabler/icons-react";
import Silk from '@/components/Silk'
import RafiStars from '@/components/RafiStars'
import { LayoutTextFlip } from '@/components/ui/LayoutTextFlip.jsx'
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation';


const Home = () => {
  const router=useRouter()
  return (
    <main className="relative min-h-screen w-full bg-[#020617] font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* 🌊 BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk
          speed={3}
          scale={1.2}
          color="#152C21" 
          noiseIntensity={1.2}
          rotation={0}
        />
        <RafiStars />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020617]" />
      </div>



      {/* 🧠 HERO CONTENT */}
      {/* Added pt-32 to push content down below the navbar */}
      <section className="relative z-10 flex min-h-screen flex-col justify-center items-start px-6 pt-32 pb-20 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto">
        <div className="w-full space-y-6 md:space-y-10">
          
          {/* Headline - Fluid Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.95] tracking-tighter text-white"
          >
            Developing the <br />
            <span className="text-emerald-500 inline-block hover:scale-[1.02] transition-transform duration-500 cursor-default text-shadow-glow">Scalable And Sass </span> 
            <span className="text-white/90"> Web & Mobile Application.</span>
          </motion.h1>

          {/* Flip Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center overflow-hidden gap-2 sm:gap-3"
          >
            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/60">
              Hi, I am Rafi. Working as a
            </span>
            <div className="h-8 sm:h-12 md:h-16 overflow-hidden flex items-center">
               <LayoutTextFlip
                text="" 
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white whitespace-nowrap"
                words={[
                  'Fullstack Developer',
                'Frontend Engineer',
                'Senior Backend Engineer',
                  "Microservice System Design Expert",
                'UI/UX Visionary',
                'Next.js Specialist',
                  "Reactjs Developer",
                  "Ethical Hacker",
                  "Bug Bounty Expert",
                  "Red teaming ,Blue Teaming ",
                  "Tech Leader ",
                'Giant Scalable Sass Ecommerce Specialist',
                'Ai Agent Developer',
                "Open Source Contributor",
                  "Laraval Developer",
                  "C,C++ Developer",
                "Tech Enthusiast",
                "Rag Developer",
                  "Linux ,Ubuntu ,ci/cd pipline expert",
                "Unique Problem Solver",
                "JavaScript Ninja",
                  "Raw Java Developer",
                "React Native Developer",
                "Mobile App Developer",
                "Python Expert",
                "Database Expert",
                "Rust Developer",
                "HRM,CRM,SASS Developer",
                "Giant School Managment Software Developer"
                ]}
                duration={2500}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed text-neutral-300"
          >
            I Am<span className="text-emerald-400 font-medium border-b border-emerald-500/30">Building scalable solutions for the web and mobile applications.Turning complex web & mobile app challenges into scalable, elegant solutions. 
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6"
          >
            <button className="group relative overflow-hidden rounded-full bg-emerald-500 px-8 py-3 md:px-12 md:py-4 font-black text-black transition-all hover:scale-105 hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]">
              <span className="relative z-10"  onClick={() => router.push("/projects")}>Explore Projects</span>
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-3 md:px-12 md:py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-emerald-500/50" onClick={() => router.push("/contact")}>
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  )
}



export default Home;
