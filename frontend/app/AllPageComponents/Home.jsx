'use client'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { 
  IconHome, 
  IconTerminal2, 
  IconBriefcase, 
  IconUser, 
  IconCurrencyDollar, 
  IconMail, 
  IconLayoutNavbarCollapse 
} from "@tabler/icons-react";
import Silk from '@/components/Silk'
import RafiStars from '@/components/RafiStars'
import { LayoutTextFlip } from '@/components/ui/LayoutTextFlip.jsx'
import { cn } from "@/lib/utils"

/**
 * ⚡ RAFI'S ULTIMATE EMERALD PORTFOLIO - v2.0 (Merkova Standard)
 * Fixes: Overlap, Contrast, Responsiveness.
 */

const Home = () => {
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

      {/* 🛠️ TOP NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6">
        <MerkovaNavbar />
      </header>

      {/* 🧠 HERO CONTENT - Added pt-32 to prevent overlap */}
      <section className="relative z-10 flex min-h-screen flex-col justify-center items-start px-6 pt-32 pb-20 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto">
        <div className="w-full space-y-6 md:space-y-10">
          
          {/* Headline - Responsive Font Sizes (Fluid Typography) */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.95] tracking-tighter text-white"
          >
            Designing the <br />
            <span className="text-emerald-500 inline-block hover:scale-[1.02] transition-transform duration-500">Future</span> <span className="text-white/90">of Web & Mobile Application.</span>
          </motion.h1>

          {/* Flip Text Animation - FIXED COLOR TO WHITE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex h-16 md:h-20 items-center overflow-hidden"
          >
            <LayoutTextFlip
              text="Hi, I am Rafi. Worked as a "
              className="text-2xl ml-3 font-bold text-white md:text-4xl lg:text-5xl" // Changed to text-white
              words={[
                'Fullstack Developer',
                'Frontend Engineer',
                'Backend Engineer',
                'UI/UX Visionary',
                'Next.js Specialist',
                'Ecommerce Specialist',
                'Ai Developer',
                "Open Source Contributor",
                "Tech Enthusiast",
                "Amazing Animated Websites",
                "React Guru",
                "JavaScript Ninja",
                "React Native Developer",
                "Mobile App Developer",
                "Python Expert",
                "Database Expert"
              ]}
              duration={2500}
            />
          </motion.div>

          {/* Bio - Improved Readability */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-base leading-relaxed text-neutral-300 md:text-xl lg:text-2xl"
          >
            I craft <span className="text-emerald-400 font-medium">Ultra-premium digital platforms</span> where high-performance 
            engineering meets cinematic visual storytelling. Every pixel is optimized,
            every interaction is intentional.
          </motion.p>

          {/* Actions - Responsive Layout */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4"
          >
            <button className="group relative overflow-hidden rounded-full bg-emerald-500 px-8 md:px-12 py-4 font-black text-black transition-all hover:scale-105 hover:bg-emerald-400 hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]">
              Explore Projects
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-8 md:px-12 py-4 font-bold text-white backdrop-blur-2xl transition-all hover:bg-white/10 hover:border-emerald-500/50">
              Get in Touch
            </button>
          </motion.div>
        </div>

        {/* Merkova Signature Footer Hint */}
      
      </section>
    </main>
  )
}

// --- NAVBAR REFACTORED FOR RESPONSIVENESS ---

const MerkovaNavbar = () => {
  const links = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "/" },
    { title: "Projects", icon: <IconTerminal2 className="h-full w-full" />, href: "/projects" },
    { title: "Works", icon: <IconBriefcase className="h-full w-full" />, href: "/works" },
    { title: "About", icon: <IconUser className="h-full w-full" />, href: "/about" },
    { title: "Pricing", icon: <IconCurrencyDollar className="h-full w-full" />, href: "/pricing" },
    { title: "Contact", icon: <IconMail className="h-full w-full" />, href: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-center">
      <FloatingDock items={links} />
    </nav>
  );
};

const FloatingDock = ({ items }) => {
  return (
    <>
      <FloatingDockDesktop items={items} />
      <FloatingDockMobile items={items} />
    </>
  );
};

const FloatingDockMobile = ({ items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative block md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute right-0 top-full mt-4 flex flex-col items-center gap-3 p-2 bg-black/80 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-2xl"
          >
            {items.map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.05 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white border border-white/10"
              >
                <div className="h-6 w-6">{item.icon}</div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-black shadow-xl scale-90"
      >
        <IconLayoutNavbarCollapse className={cn("h-7 w-7 transition-transform", open && "rotate-180")} />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="hidden h-16 items-center gap-4 rounded-2xl bg-black/60 backdrop-blur-3xl px-6 md:flex border border-white/10 shadow-2xl"
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let width = useSpring(useTransform(distance, [-150, 0, 150], [45, 80, 45]), { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(useTransform(distance, [-150, 0, 150], [45, 80, 45]), { mass: 0.1, stiffness: 150, damping: 12 });
  
  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} className="relative">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "flex items-center justify-center rounded-full transition-colors duration-300",
          hovered ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/40" : "bg-neutral-800 text-white"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: "-50%" }}
              animate={{ opacity: 1, y: 55, x: "-50%" }}
              exit={{ opacity: 0, y: 0, x: "-50%" }}
              className="absolute left-1/2 w-fit rounded-md border border-emerald-900 bg-emerald-950 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-emerald-400 whitespace-nowrap"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex h-6 w-6 items-center justify-center">
          {icon}
        </div>
      </motion.div>
    </a>
  );
}

export default Home;