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

/**
 * ⚡ RAFI'S ULTIMATE EMERALD PORTFOLIO - v5.0 (Mobile Touch Fix)
 * - Fixed "Sticky Hover" bug on mobile devices.
 * - Added `whileTap` animation for better mobile feedback.
 * - Optimized Navbar for all screen sizes.
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

      {/* 🛠️ UNIVERSAL FLOATING DOCK (ALWAYS TOP) */}
      <div className="fixed z-[100] left-0 right-0 top-4 md:top-6 flex justify-center px-4 pointer-events-none">
        {/* Pointer events auto enables clicks on the dock itself */}
        <MerkovaNavbar />
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
            Designing the <br />
            <span className="text-emerald-500 inline-block hover:scale-[1.02] transition-transform duration-500 cursor-default text-shadow-glow">Future</span> 
            <span className="text-white/90"> of Web.</span>
          </motion.h1>

          {/* Flip Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center overflow-hidden gap-2 sm:gap-3"
          >
            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/60">
              Hi, I am Rafi. Worked as a
            </span>
            <div className="h-8 sm:h-12 md:h-16 overflow-hidden flex items-center">
               <LayoutTextFlip
                text="" 
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white whitespace-nowrap"
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
                "Amazing Animated Websites Developer",
                "React Guru",
                "JavaScript Ninja",
                "React Native Developer",
                "Mobile App Developer",
                "Python Expert",
                "Database Expert",
                "Data Scientist",
                "Ios Developer",
                "Android Developer",
                "Bug Fixing Expert",
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
            I craft <span className="text-emerald-400 font-medium border-b border-emerald-500/30">Ultra-premium digital platforms</span> where high-performance ,secure large-scale applications meet stunning design. Bridging the gap where software
            engineering meets cinematic visual storytelling.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6"
          >
            <button className="group relative overflow-hidden rounded-full bg-emerald-500 px-8 py-3 md:px-12 md:py-4 font-black text-black transition-all hover:scale-105 hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]">
              <span className="relative z-10">Explore Projects</span>
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-3 md:px-12 md:py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-emerald-500/50">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  )
}

// --- NAVBAR COMPONENTS ---

const MerkovaNavbar = () => {
  const links = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "/" },
    { title: "Projects", icon: <IconTerminal2 className="h-full w-full" />, href: "/projects" },
    { title: "Services", icon: <IconBriefcase className="h-full w-full" />, href: "/services" },
    { title: "About", icon: <IconUser className="h-full w-full" />, href: "/about" },
    { title: "Price", icon: <IconCurrencyDollar className="h-full w-full" />, href: "/pricing" },
    { title: "Contact", icon: <IconMail className="h-full w-full" />, href: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-center w-full max-w-fit pointer-events-auto">
      <FloatingDock items={links} />
    </nav>
  );
};

const FloatingDock = ({ items }) => {
  let mouseX = useMotionValue(Infinity);
  
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-14 md:h-16 items-center gap-3 md:gap-4 rounded-2xl bg-black/40 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl px-4 md:px-6"
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);
  
  // State to check if device supports hover (Mouse vs Touch)
  const [isHoverable, setIsHoverable] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Only enable hover logic if the device actually supports it (Desktops)
    setIsHoverable(window.matchMedia('(hover: hover)').matches);
  }, []);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Smooth responsive scaling
  let width = useSpring(useTransform(distance, [-150, 0, 150], [40, 70, 40]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  
  let height = useSpring(useTransform(distance, [-150, 0, 150], [40, 70, 40]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <a 
      href={href} 
      className="relative block"
      onClick={() => setHovered(false)} // Fix: Force clear hover state on click
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => isHoverable && setHovered(true)} // Fix: Only hover if mouse exists
        onMouseLeave={() => setHovered(false)}
        whileTap={{ scale: 0.9, backgroundColor: "#10b981", color: "black" }} // Mobile: Tap Effect
        className={cn(
          "aspect-square flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer",
          hovered 
            ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]" 
            : "bg-neutral-900/80 text-neutral-400 border border-white/5"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              // Tooltip appearing BELOW the icon
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 50, x: "-50%" }} 
              exit={{ opacity: 0, y: 10, x: "-50%" }}
              className="absolute left-1/2 top-0 w-fit -translate-x-1/2 whitespace-nowrap rounded-md border border-emerald-500/20 bg-black/90 px-2 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-emerald-400 shadow-xl backdrop-blur-sm pointer-events-none z-50"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex h-5 w-5 md:h-6 md:w-6 items-center justify-center">
          {icon}
        </div>
      </motion.div>
    </a>
  );
}

export default Home;