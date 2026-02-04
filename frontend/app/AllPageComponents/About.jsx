'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'

// ICONS
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql,
  SiRedux, SiTailwindcss, SiFramer, SiPython, SiCplusplus,
  SiTypescript, SiJavascript, SiIos, SiAndroid, SiSwift,
  SiOpenai, SiExpress, SiDocker, SiKubernetes, SiRedis,
  SiGit, SiAmazon, SiGraphql, SiStripe, SiFirebase, SiKotlin, SiFlutter
} from 'react-icons/si'
import { 
  Download, ArrowRight, Cpu, Brain, Layers, Server, Smartphone, 
  Code2, ShoppingBag, GraduationCap, CreditCard, Zap, 
  LayoutTemplate, CheckCircle2, Globe
} from 'lucide-react'

// COMPONENTS
import Silk from '@/components/Silk'
import RafiStars from '@/components/RafiStars'
import rafipic from '../../public/RafiKhanLogo.png'
import UltimateTimeline from './Myevolution'

/* ================= ANIMATION VARIANTS ================= */
const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
}

const About = () => {
  const router = useRouter()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <main className="relative min-h-screen w-full bg-[#020617] text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* 🚀 NEON PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left z-50 shadow-[0_0_15px_#22d3ee]" style={{ scaleX }} />

      {/* 🌌 BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk speed={2} scale={1.6} color="#22d3ee" noiseIntensity={0.4} />
        <RafiStars />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_95%)]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 pt-32 pb-32 space-y-48">

        {/* ================= 1. HERO SECTION ================= */}
        <section className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          <div className="space-y-8">
            <motion.div 
              initial="hidden" animate="visible" variants={revealVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/50 text-cyan-400 font-mono text-sm tracking-wide shadow-[0_0_10px_rgba(34,211,238,0.2)]"
            >
              <Zap size={14} className="fill-cyan-400" /> SENIOR FullStack Developer
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
              className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1]"
            >
              Building The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                Most Advanced & Secure Platforms
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 leading-relaxed max-w-xl font-light"
            >
              I engineer <span className="text-white font-semibold">High-Scale Web & Mobile Ecosystems</span>. 
              From <span className="text-cyan-400">AI-powered EdTech</span> to <span className="text-cyan-400">Multi-vendor eCommerce</span> apps 
              that handle millions of users.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-5 pt-4">
              <button onClick={() => router.push('/contact')} className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-bold text-lg transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                Work With Me <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>
              <a   href="/Rafi_Khan_Cv.pdf" download className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2 backdrop-blur-md">
                <Download size={20} /> Download CV
              </a>
            </motion.div>
          </div>

          {/* CIRCULAR PROFILE PIC WITH ROTATING RING */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="flex justify-center relative"
          >
             {/* Glow Behind */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full" />
            
            <div className="relative w-[450px] h-[450px] flex items-center justify-center">
              {/* Rotating Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] rounded-full border-2 border-dashed border-cyan-500/30"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-25px] rounded-full border border-white/10"
              />

              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10">
                <Image src={rafipic} alt="Rafi Khan" className="object-cover" fill priority />
              </div>
                <FloatingIcon icon={<SiNextdotjs />} color="#e2e7e9ff" top="40%" right="2%" delay={3} />
              {/* Floating Tech Badges */}
              <FloatingIcon icon={<SiReact />} color="#61dafb" top="-10%" right="50%" delay={0} />
              <FloatingIcon icon={<SiSwift />} color="#F05138" bottom="10%" left="5%" delay={1} />
              <FloatingIcon icon={<SiPython />} color="#ffd43b" top="40%" left="-10%" delay={2} />
               <FloatingIcon icon={<SiMongodb />} color="#12d382ff" top="80%" right="2%" delay={3} />
            </div>
          </motion.div>
        </section>

        {/* ================= 2. MOBILE & WEB MASTERY (NEW SECTION) ================= */}
        <section className="relative">
          <SectionHeader title="Web & Mobile Developer" subtitle="Full-Stack" />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Mobile Card */}
            <DomainCard 
              title="Advanced Mobile Apps" 
              icon={<Smartphone size={40} className="text-pink-500" />}
              gradient="from-pink-500/10 to-transparent"
              borderColor="border-pink-500/30"
              items={[
                "React Native & iOS (Swift)",
                "Social Platforms (Like Instagram/FB)",
                "Multi-vendor Marketplaces (Shopify clone)",
                "Real-time Chat & Notifications",
                "Secure Cookie-based app",
                "App Store & Play Store Deployment",
                "AI-Integrated Mobile Solutions",
                "Offline Mode & Data Sync",
                "Ultra High Quality UI/UX Designs",
                "High Performance & Scalability",
                "Native Device Features (Camera/GPS)"

    
              ]}
            />
            
            {/* Web Card */}
            <DomainCard 
              title="Large Scale Web Systems" 
              icon={<Globe size={40} className="text-cyan-500" />}
              gradient="from-cyan-500/10 to-transparent"
              borderColor="border-cyan-500/30"
              items={[
                "Next.js Enterprise Ecommerce Platforms",
                  "React.js Enterprise Architecture",
                "AI Integrated SaaS Platforms",
                "Complex Dashboard & Analytics",
                "Cookie-Based Secure Website",
                "SEO Optimized Websites",
                "Ultra High Quality UI/UX Designs",
                "Super Fast Performance (Lighthouse 90+)",
                "Secure Payment Gateways (Stripe/SSL)",
                "Scalable Cloud Deployments (AWS/Docker)",
                "Strapi for headless CMS",
                "Superadmin,admin,and stuff panel or multi vendor panel website"
              ]}
            />
          </div>
        </section>

        {/* ================= 3. TECH STACK (LIGHTNING BRIGHT ICONS) ================= */}
        <section className="space-y-20">
          <SectionHeader title="The Languages & Technologies I Dominate" subtitle="Full-Stack Expertise" />

          <StackSection title="Mobile Ecosystem" icon={<Smartphone />} items={mobileStack} />
          <StackSection title="Frontend & UI" icon={<Layers />} items={frontend} />
          <StackSection title="Backend & Cloud" icon={<Server />} items={backend} />
          <StackSection title="AI & Innovations" icon={<Brain />} items={ai} />
        </section>

        {/* ================= 4. ANIMATED TIMELINE (ZIG ZAG) ================= */}
        <section className="max-w-5xl mx-auto">
          <SectionHeader title="The Evolution" subtitle="My Journey Since 2018" />
          
          <div className="relative mt-20">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent md:-translate-x-1/2" />
            <UltimateTimeline />
            {/* <div className="space-y-24">
              <TimelineItem 
                year="2018" title="Hello World" 
                desc="Started coding journey. Built first static websites using HTML, CSS & Vanilla JS."
                side="left"
              />
              <TimelineItem 
                year="2020" title="Fullstack Developer" 
                desc="Mastered MERN Stack. Launched first dynamic web apps with Node.js & React."
                side="right"
              />
              <TimelineItem 
                year="2022" title="Mobile & Cloud" 
                desc="Expanded to React Native & iOS. Deployed scalable apps on AWS/Docker."
                side="left"
              />
              <TimelineItem 
                year="2024" title="AI & Architecture" 
                desc="Building AI-First platforms. Integrating LLMs into EdTech & eCommerce."
                side="right"
              />
              <TimelineItem 
                year="Present" title="Senior Architect" 
                desc="Helps To Developing the dream startup. Designing systems for millions of users."
                side="left" current
              />
            </div> */}

          </div>
        </section>

        {/* ================= 5. CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center py-24 rounded-[3rem] bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-cyan-500/5 blur-3xl" />
          <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10">
            Have a Billion Dollar Idea?
          </h2>
          <p className="text-xl text-cyan-200 mb-10 relative z-10">
            Let's build the Application & Websites that defines the next generation.
          </p>
          <button onClick={() => router.push('/contact')} className="px-12 py-5 bg-white text-black hover:bg-cyan-50 rounded-full font-bold text-xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] relative z-10">
            Start The Project
          </button>
        </motion.div>

      </div>
    </main>
  )
}

export default About

/* ================= SUB-COMPONENTS ================= */

const SectionHeader = ({ title, subtitle }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    className="text-center space-y-2"
  >
    <h3 className="text-cyan-400 font-bold tracking-widest uppercase text-sm">{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
    <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mt-4 shadow-[0_0_10px_#22d3ee]" />
  </motion.div>
)

const FloatingIcon = ({ icon, color, top, left, right, bottom, delay }) => (
  <motion.div 
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration: 4, delay: delay, ease: "easeInOut" }}
   style={{
  top,
  left,
  right,
  bottom,
  color,
  filter: `drop-shadow(0 0 10px ${color})`
}}

    className="absolute text-4xl bg-[#020617] p-3 rounded-xl border border-white/10 shadow-xl z-20"
  >
    {icon}
  </motion.div>
)

const DomainCard = ({ title, icon, items, gradient, borderColor }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-10 rounded-3xl bg-gradient-to-b ${gradient} border ${borderColor} backdrop-blur-sm relative overflow-hidden group`}
  >
    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition duration-500">{icon}</div>
    <div className="mb-6">{icon}</div>
    <h3 className="text-3xl font-bold mb-6">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-300">
          <CheckCircle2 size={18} className="text-green-400" /> {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

const StackSection = ({ title, icon, items }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    className="space-y-8"
  >
    <div className="flex items-center gap-3 text-2xl font-bold text-white border-b border-white/10 pb-4">
      <span className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">{icon}</span> {title}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {items.map((item, idx) => (
        <Tech key={idx} {...item} />
      ))}
    </div>
  </motion.div>
)

const Tech = ({ icon, label, color }) => {
  const glowfilter = `drop-shadow(0 0 5px ${color}aa)`

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="
        group relative flex flex-col items-center justify-center p-6 rounded-2xl
        bg-[#0f172a] border border-white/5 cursor-pointer overflow-visible
        hover:border-white/20 hover:bg-white/5
      "
    >
      {/* ICON */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="text-5xl mb-4 z-10"
        style={{
          color,
          filter: glowfilter
        }}
      >
        {icon}
      </motion.div>

      {/* LABEL */}
      <span className="text-sm font-semibold tracking-wide text-slate-400 group-hover:text-white transition-colors z-10">
        {label}
      </span>

      {/* BALANCED GLOW BACKDROP */}
      <div
        className="
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-70
          transition-all duration-300 blur-xl scale-95
          group-hover:scale-100 -z-10
        "
        style={{
          background: `radial-gradient(circle at center, ${color}55, transparent 70%)`
        }}
      />
    </motion.div>
  )
}


const TimelineItem = ({ year, title, desc, side, current }) => {
  const isLeft = side === 'left';
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between w-full relative ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Empty Space for alignment */}
      <div className="hidden md:block w-5/12" />
      
      {/* Center Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-4 h-4 bg-[#020617] border-4 border-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee] z-10" />
      
      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`w-full md:w-5/12 pl-12 md:pl-0 ${!isLeft && 'md:text-right'} ${current ? 'bg-cyan-900/10 border-cyan-500/50' : 'bg-white/5 border-white/10'} border p-6 rounded-2xl backdrop-blur-sm hover:border-cyan-400/50 transition-colors`}
      >
        <span className="text-cyan-400 font-mono font-bold text-lg block mb-2">{year}</span>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </motion.div>

    </div>
  )
}

/* ================= DATA SETS (UPDATED COLORS) ================= */

const mobileStack = [
  { icon: <SiReact />, label: 'React Native', color: '#61dafb' },
  { icon: <SiIos />, label: 'iOS (Swift)', color: '#ffffff' },
  { icon: <SiAndroid />, label: 'Android', color: '#3ddc84' },
  { icon: <SiFlutter />, label: 'Flutter', color: '#02569B' },
  { icon: <Smartphone />, label: 'Expo', color: '#ffffff' },
]

const frontend = [
  { icon: <SiNextdotjs />, label: 'Next.js 14', color: '#ffffff' },
  { icon: <SiReact />, label: 'React.js', color: '#61dafb' },
  { icon: <SiTypescript />, label: 'TypeScript', color: '#3178c6' },
  { icon: <SiTailwindcss />, label: 'Tailwind', color: '#38bdf8' },
  { icon: <SiFramer />, label: 'Framer', color: '#e100ff' },
]

const backend = [
  { icon: <SiNodedotjs />, label: 'Node.js', color: '#3c873a' },
  { icon: <SiExpress />, label: 'Express', color: '#ffffff' },
  { icon: <SiPostgresql />, label: 'PostgreSQL', color: '#336791' },
  { icon: <SiMongodb />, label: 'MongoDB', color: '#47a248' },
  { icon: <SiFirebase />, label: 'Firebase', color: '#FFCA28' },
  { icon: <SiAmazon />, label: 'AWS', color: '#ff9900' },
]

const ai = [
  { icon: <Brain />, label: 'AI Architecture', color: '#ff00ff' },
  { icon: <SiOpenai />, label: 'OpenAI API', color: '#10a37f' },
  { icon: <Cpu />, label: 'Gemini', color: '#8b5cf6' },
  { icon: <SiPython />, label: 'Python', color: '#ffd43b' },
]