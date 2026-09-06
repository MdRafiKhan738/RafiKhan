'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

// ICONS
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql,
  SiTailwindcss, SiFramer, SiPython, SiRust,
  SiTypescript, SiJavascript, SiExpress, SiDocker, SiRedis,
  SiAmazon, SiFirebase, SiNginx, SiFastapi, SiLangchain, SiGithub,
} from 'react-icons/si'
import {
  Download, ArrowRight, Cpu, Brain, Layers, Server, Smartphone,
  ShoppingBag, Zap, CheckCircle2, Globe, Code2, Boxes, Sparkles,
  Mail, Briefcase, GraduationCap,
} from 'lucide-react'

import rafipic from '../../public/RafiKhanLogo.png.jpeg'

/* =====================================================================
   Silk / RafiStars removed — background is a plain layered gradient now,
   so the page stays quiet instead of competing with the content.
   ===================================================================== */

const About = () => {
  const router = useRouter()

  return (
    <main className="relative min-h-screen w-full bg-[#020617] text-white overflow-x-hidden selection:bg-cyan-500/30">

      {/* static background — no shader, no stars, just a soft layered glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_92%)]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 xl:px-20 pt-20 sm:pt-28 pb-24 sm:pb-32 space-y-28 sm:space-y-36">

        {/* ================= HERO ================= */}
        <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-slate-400 text-sm">Meet</span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Mohammad Rafi Khan
            </h1>

            <p className="text-slate-300 text-base sm:text-lg">
              Senior Fullstack Developer, building AI-integrated web &amp; mobile platforms.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-5 bg-cyan-400 rounded-full" />
                <h2 className="text-sm font-semibold tracking-wide text-white">ABOUT ME</h2>
              </div>
              <ul className="space-y-3">
                {[
                  'Delivered 25+ platforms across e-commerce,ERP,Rag AI,SchoolManagmentSoftware,CRM,HRM and real estate.',
                  'Currently Fullstack Developer at Webin, building products for agency clients.',
                  'Mentored 15+ aspiring developers while shipping AI-integrated platforms.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => router.push('/projects')}
                className="group px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-[#020617] rounded-full font-semibold text-sm sm:text-base transition-colors flex items-center gap-2"
              >
                My Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="px-6 py-3 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 text-white font-medium text-sm sm:text-base transition-colors"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <SocialIcon href="https://github.com/rafihushen01" icon={<SiGithub size={16} />} />
              <SocialIcon href="mailto:nextjs061@gmail.com" icon={<Mail size={16} />} />
              <SocialIcon href="https://mdrafikhan.vercel.app" icon={<Globe size={16} />} />
            </div>
          </div>

          {/* photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 mx-auto lg:mx-0 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
              <Image
                src={rafipic}
                alt="Mohammad Rafi Khan"
                fill
                priority
                className="object-cover grayscale-[15%] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* ================= STATS BAR ================= */}
        <section className="grid grid-cols-3 gap-4 sm:gap-8 py-8 sm:py-10 border-y border-white/10 max-w-3xl mx-auto">
          <Stat value="4+" label="Years Experience" />
          <Stat value="25+" label="Projects Delivered" />
          <Stat value="15+" label="Students Mentored" />
        </section>

        {/* ================= WHO I AM ================= */}
        <section className="max-w-3xl mx-auto text-center space-y-7">
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

          <div className="inline-flex flex-col gap-1 mt-4 px-6 py-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10">
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
            <ServiceCard icon={<Code2 size={22} />} title="Web app development" desc="Scalable, high-performance web apps using Next.js, React, and Laravel with pixel-perfect UI." />
            <ServiceCard icon={<Smartphone size={22} />} title="Mobile app development" desc="Cross-platform Android & iOS applications using React Native." />
            <ServiceCard icon={<Sparkles size={22} />} title="AI & automation" desc="LLM integrations, AI-powered workflows, and business process automation." />
            <ServiceCard icon={<Server size={22} />} title="Backend & cloud" desc="Robust REST APIs, microservices, Docker, AWS (EC2, S3), Redis, and CI/CD pipelines." />
            <ServiceCard icon={<Boxes size={22} />} title="Enterprise solutions" desc="Custom ERP, CRM, HRM systems, and e-commerce platforms tailored to business needs." />
          </div>
        </section>

        {/* ================= TECH ARSENAL ================= */}
        <section>
          <SectionHeader title="Tech arsenal" caption="At a glance" />
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-14">
            <ArsenalGroup title="Languages" tone="cyan" items={['TypeScript', 'JavaScript', 'Python', 'Rust', 'C', 'C++']} />
            <ArsenalGroup title="Frameworks" tone="blue" items={['Next.js', 'React.js', 'Express.js', 'FastAPI', 'Laravel']} />
            <ArsenalGroup title="Cloud & AI" tone="purple" items={['Docker', 'Nginx', 'Redis', 'AWS', 'Firebase', 'LangChain', 'LangGraph', 'MongoDB', 'PostgreSQL', 'Qdrant']} />
          </div>
        </section>

        {/* ================= PROFESSIONAL JOURNEY (custom timeline) ================= */}
        <section className="max-w-4xl mx-auto">
          <SectionHeader title="Professional journey" caption="Career path" />
          <div className="relative mt-16 sm:mt-20 space-y-10 sm:space-y-0">
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent -translate-x-1/2" />
            {journey.map((item, i) => (
              <JourneyItem key={i} {...item} side={i % 2 === 0 ? 'left' : 'right'} />
            ))}
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
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5">Have a big idea?</h2>
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

const Caption = ({ text }) => <span className="text-cyan-400 text-sm font-medium tracking-wide">{text}</span>

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

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 transition-colors"
  >
    {icon}
  </a>
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
    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">{icon}</div>
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
          <span key={i} className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border ${toneMap[tone]}`}>
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
      {items.map((item, idx) => <Tech key={idx} {...item} />)}
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

/* ---- custom timeline (replaces UltimateTimeline / Myevolution import) ---- */

const JourneyItem = ({ period, role, org, url, current, side }) => {
  const isLeft = side === 'left'
  const card = (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`w-full sm:w-[calc(50%-2rem)] p-5 sm:p-6 rounded-2xl border backdrop-blur-sm ${
        current ? 'bg-cyan-500/[0.06] border-cyan-500/30' : 'bg-white/[0.03] border-white/10'
      }`}
    >
      <span className="text-cyan-400 text-xs sm:text-sm font-medium block mb-2">{period}</span>
      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{role}</h3>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm hover:text-cyan-300 transition-colors underline decoration-white/20">
          {org}
        </a>
      ) : (
        <span className="text-slate-400 text-sm">{org}</span>
      )}
    </motion.div>
  )

  return (
    <div className={`relative flex sm:items-center gap-6 sm:gap-0 ${isLeft ? 'sm:justify-start' : 'sm:justify-end'} pb-10 sm:pb-16`}>
      <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#020617] border-2 border-cyan-400" />
      {card}
    </div>
  )
}

const journey = [
  {
    period: '2022 — 2024',
    role: 'Fullstack Web Developer',
    org: 'BAF Shaheen English Medium College (SEMC)',
    url: 'https://bafsemc.edu.bd/',
  },
  {
    period: '2024 — 2025',
    role: 'Fullstack Developer',
    org: 'MuchiBari',
     url: 'https://www.facebook.com/muchibari01'
  },
  {
    period: '2025',
    role: 'Remote Developer, Freelance for USA,FINLAND,NEW YORK Clients',
    org: 'Freelance Platforms',
  },
  {
    period: '2025 (6 mo) — Present',
    role: 'Senior Fullstack Developer',
    org: 'Webin',
    url: 'https://webin.agency',
    current: true,
  },
]

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
