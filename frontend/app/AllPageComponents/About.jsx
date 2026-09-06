'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, useScroll, useSpring } from 'framer-motion'

// ICONS
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql,
  SiTailwindcss, SiFramer, SiPython, SiCplusplus, SiRust,
  SiTypescript, SiJavascript, SiExpress, SiDocker, SiRedis,
  SiAmazon, SiFirebase, SiNginx, SiFastapi, SiLangchain,
} from 'react-icons/si'
import {
  Download, ArrowRight, Cpu, Brain, Layers, Server, Smartphone,
  ShoppingBag, Zap, CheckCircle2, Globe, Code2, Boxes, Sparkles,
} from 'lucide-react'

// COMPONENTS (existing project components — unchanged)
import Silk from '@/components/Silk'
import RafiStars from '@/components/RafiStars'
import rafipic from '../../public/RafiKhanLogo.png.jpeg'
import UltimateTimeline from './Myevolution'

/* =====================================================================
   DESIGN NOTES
   Same palette as before (navy #020617 base, cyan → blue → purple accent),
   but pulled back from "everything glows and spins" toward a calmer,
   more deliberate hierarchy: one motion moment in the hero, quiet cards
   everywhere else, and a single accent used consistently rather than
   scattered glow effects on every element.
   ===================================================================== */

const About = () => {
  const router = useRouter()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <main className="relative min-h-screen w-full bg-[#020617] text-white overflow-x-hidden selection:bg-cyan-500/30">

      {/* progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk speed={2} scale={1.6} color="#22d3ee" noiseIntensity={0.3} />
        <RafiStars />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_92%)]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 xl:px-20 pt-20 sm:pt-28 pb-24 sm:pb-32 space-y-28 sm:space-y-36">

        {/* ================= HERO ================= */}
        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center min-h-0 lg:min-h-[80vh]">
          <div className="space-y-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-sm font-medium"
            >
              <Zap size={14} /> Senior Full-Stack Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.12]"
            >
              Building advanced,
              <br className="hidden sm:block" /> secure platforms{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                end to end
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg font-light"
            >
              I engineer high-scale web and mobile ecosystems — from AI-powered
              platforms to multi-vendor marketplaces built to handle real production traffic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => router.push('/contact')}
                className="group px-6 sm:px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-[#020617] rounded-full font-semibold text-base transition-colors flex items-center gap-2"
              >
                Work with me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/Mohammad_Rafi_Khan_Resume.docx" download
                className="px-6 sm:px-7 py-3.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 text-white font-medium transition-colors flex items-center gap-2"
              >
                <Download size={18} /> Download CV
              </a>
            </motion.div>
          </div>

          {/* profile image — no spinning rings, one quiet accent ring, scales cleanly to mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-full bg-cyan-500/15 blur-[90px]" />
              <div className="absolute inset-[-8px] rounded-full border border-cyan-500/25" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 z-10">
                <Image src={rafipic} alt="Mohammad Rafi Khan" className="object-cover" fill priority />
              </div>

              {/* two quiet floating badges, hidden on small screens to avoid overlap */}
              <FloatingIcon icon={<SiNextdotjs />} color="#ffffff" top="4%" right="-4%" delay={0} />
              <FloatingIcon icon={<SiReact />} color="#61dafb" bottom="6%" left="-6%" delay={1.4} />
            </div>
          </motion.div>
        </section>

        {/* ================= WHO I AM ================= */}
        <section className="max-w-4xl mx-auto text-center space-y-8">
          <Caption text="Who I am" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Turning complex problems into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              elegant solutions
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Senior Full-Stack Developer delivering high-performance web and
            mobile applications with Next.js, React.js, Node.js, PHP, and
            Laravel. Experienced in scalable backend architecture, SQL/NoSQL
            databases, caching, and cloud deployment — Mohammad Rafi Khan
            builds robust, secure, user-centric products from architecture
            through to launch.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 max-w-lg mx-auto">
            <Stat value="3+" label="Years Experience" />
            <Stat value="25+" label="Projects Delivered" />
            <Stat value="15+" label="Students Mentored" />
          </div>

          <div className="inline-flex flex-col gap-1 mt-6 px-6 py-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10">
            <span className="text-sm font-semibold text-cyan-300">Always learning</span>
            <span className="text-slate-300 text-sm italic">
              "Continuous improvement is better than delayed perfection."
            </span>
          </div>
        </section>

        {/* ================= WEB & MOBILE MASTERY ================= */}
        <section>
          <SectionHeader title="Web & mobile, built to scale" caption="Full-stack" />
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-14">
            <DomainCard
              title="Advanced mobile apps"
              icon={<Smartphone size={28} className="text-pink-400" />}
              items={[
                'React Native cross-platform apps',
                'Real-time chat & push notifications',
                'Secure, cookie-based authentication',
                'App Store & Play Store deployment',
                'AI-integrated mobile experiences',
                'Native device features (camera, GPS)',
              ]}
            />
            <DomainCard
              title="Large-scale web systems"
              icon={<Globe size={28} className="text-cyan-400" />}
              items={[
                'Next.js & React enterprise architecture',
                'AI-integrated SaaS platforms',
                'Complex dashboards & analytics',
                'SEO-optimized, high-performance builds',
                'Secure payment gateways (Stripe/SSL)',
                'Multi-vendor & role-based admin panels',
              ]}
            />
          </div>
        </section>

        {/* ================= TECH STACK ================= */}
        <section className="space-y-14 sm:space-y-16">
          <SectionHeader title="Languages & technologies" caption="Full-stack expertise" />
          <StackSection title="Frontend & UI" icon={<Layers size={20} />} items={frontend} />
          <StackSection title="Backend & Cloud" icon={<Server size={20} />} items={backend} />
          <StackSection title="AI & Data" icon={<Brain size={20} />} items={ai} />
        </section>

        {/* ================= WHAT I OFFER ================= */}
        <section>
          <SectionHeader title="What I offer" caption="Services" subtitle="High-impact solutions for businesses and startups." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-14">
            <ServiceCard
              icon={<Code2 size={22} />}
              title="Web app development"
              desc="Scalable, high-performance web apps using Next.js, React, and Laravel with pixel-perfect UI."
            />
            <ServiceCard
              icon={<Smartphone size={22} />}
              title="Mobile app development"
              desc="Cross-platform Android & iOS applications using React Native."
            />
            <ServiceCard
              icon={<Sparkles size={22} />}
              title="AI & automation"
              desc="LLM integrations, AI-powered workflows, and business process automation."
            />
            <ServiceCard
              icon={<Server size={22} />}
              title="Backend & cloud"
              desc="Robust REST APIs, microservices, Docker, AWS (EC2, S3), Redis, and CI/CD pipelines."
            />
            <ServiceCard
              icon={<Boxes size={22} />}
              title="Enterprise solutions"
              desc="Custom ERP, CRM, HRM systems, and e-commerce platforms tailored to business needs."
            />
          </div>
        </section>

        {/* ================= TECH ARSENAL ================= */}
        <section>
          <SectionHeader title="Tech arsenal" caption="At a glance" />
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-14">
            <ArsenalGroup
              title="Languages"
              tone="cyan"
              items={['TypeScript', 'JavaScript', 'Python', 'Rust', 'C', 'C++']}
            />
            <ArsenalGroup
              title="Frameworks"
              tone="blue"
              items={['Next.js', 'React.js', 'Express.js', 'FastAPI', 'Laravel']}
            />
            <ArsenalGroup
              title="Cloud & AI"
              tone="purple"
              items={['Docker', 'Nginx', 'Redis', 'AWS', 'Firebase', 'LangChain', 'LangGraph', 'MongoDB', 'PostgreSQL', 'Qdrant']}
            />
          </div>
        </section>

        {/* ================= EVOLUTION TIMELINE ================= */}
        <section className="max-w-5xl mx-auto">
          <SectionHeader title="The evolution" caption="My journey" />
          <div className="relative mt-16 sm:mt-20">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-transparent md:-translate-x-1/2" />
            <UltimateTimeline />
          </div>
        </section>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center py-16 sm:py-24 px-6 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-cyan-900/15 to-purple-900/15 border border-white/10"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5">
            Have a big idea?
          </h2>
          <p className="text-base sm:text-xl text-slate-300 mb-8 sm:mb-10 max-w-xl mx-auto">
            Let's build the application or platform that defines your next stage of growth.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="px-8 sm:px-10 py-4 bg-white text-[#020617] hover:bg-cyan-50 rounded-full font-semibold text-base sm:text-lg transition-colors"
          >
            Start the project
          </button>
        </motion.div>

      </div>
    </main>
  )
}

export default About

/* ================= SUB-COMPONENTS ================= */

const Caption = ({ text }) => (
  <span className="text-cyan-400 text-sm font-medium tracking-wide">{text}</span>
)

const SectionHeader = ({ title, caption, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center space-y-3 max-w-2xl mx-auto"
  >
    {caption && <Caption text={caption} />}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{title}</h2>
    {subtitle && <p className="text-slate-400 text-sm sm:text-base">{subtitle}</p>}
  </motion.div>
)

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
      {value}
    </span>
    <span className="text-xs sm:text-sm text-slate-400 mt-1 text-center">{label}</span>
  </div>
)

const FloatingIcon = ({ icon, color, top, left, right, bottom, delay }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 4, delay, ease: 'easeInOut' }}
    style={{ top, left, right, bottom, color }}
    className="hidden sm:flex absolute text-2xl bg-[#0b1120] p-2.5 rounded-xl border border-white/10 z-20 items-center justify-center"
  >
    {icon}
  </motion.div>
)

const DomainCard = ({ title, icon, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="p-7 sm:p-9 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
  >
    <div className="mb-5 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-bold mb-5">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
          <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" /> {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

const ServiceCard = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors"
  >
    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
)

const ArsenalGroup = ({ title, items, tone }) => {
  const toneMap = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10"
    >
      <h3 className="text-base font-semibold text-white mb-5">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border ${toneMap[tone]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const StackSection = ({ title, icon, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="space-y-6 sm:space-y-8"
  >
    <div className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-white border-b border-white/10 pb-3 sm:pb-4">
      <span className="text-cyan-400">{icon}</span> {title}
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-5">
      {items.map((item, idx) => (
        <Tech key={idx} {...item} />
      ))}
    </div>
  </motion.div>
)

const Tech = ({ icon, label, color }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-colors"
  >
    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3" style={{ color }}>{icon}</div>
    <span className="text-[11px] sm:text-xs font-medium text-slate-400 text-center">{label}</span>
  </motion.div>
)

/* ================= DATA ================= */

const frontend = [
  { icon: <SiNextdotjs />, label: 'Next.js', color: '#ffffff' },
  { icon: <SiReact />, label: 'React.js', color: '#61dafb' },
  { icon: <SiTypescript />, label: 'TypeScript', color: '#3178c6' },
  { icon: <SiJavascript />, label: 'JavaScript', color: '#f7df1e' },
  { icon: <SiTailwindcss />, label: 'Tailwind', color: '#38bdf8' },
  { icon: <SiFramer />, label: 'Framer Motion', color: '#e100ff' },
]

const backend = [
  { icon: <SiNodedotjs />, label: 'Node.js', color: '#3c873a' },
  { icon: <SiExpress />, label: 'Express', color: '#ffffff' },
  { icon: <SiFastapi />, label: 'FastAPI', color: '#009688' },
  { icon: <SiPostgresql />, label: 'PostgreSQL', color: '#336791' },
  { icon: <SiMongodb />, label: 'MongoDB', color: '#47a248' },
  { icon: <SiDocker />, label: 'Docker', color: '#2496ed' },
  { icon: <SiNginx />, label: 'Nginx', color: '#009639' },
  { icon: <SiRedis />, label: 'Redis', color: '#dc382d' },
  { icon: <SiAmazon />, label: 'AWS', color: '#ff9900' },
  { icon: <SiFirebase />, label: 'Firebase', color: '#ffca28' },
  { icon: <SiPython />, label: 'Python', color: '#ffd43b' },
  { icon: <SiRust />, label: 'Rust', color: '#ce9178' },
]

const ai = [
  { icon: <Brain size={26} />, label: 'AI Agents', color: '#ff66ff' },
  { icon: <SiLangchain />, label: 'LangChain', color: '#1c3c3c' },
  { icon: <Cpu size={26} />, label: 'LangGraph', color: '#8b5cf6' },
  { icon: <ShoppingBag size={26} />, label: 'RAG Systems', color: '#22d3ee' },
]
