 "use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Code2, Smartphone, BrainCircuit, 
  ShoppingBag, Dumbbell, Users, GraduationCap, 
  Server, Globe, Zap, Cpu, Database, Layers
} from "lucide-react";

// --- Configuration & Data ---

// Helper to assign specific "Neon" colors to tech stacks for that "Glowing" look
const getTechStyle = (techName) => {
  const styles = {
    "React.js": "text-cyan-400 border-cyan-500/30 shadow-cyan-500/20 bg-cyan-500/10",
    "React Native": "text-blue-400 border-blue-500/30 shadow-blue-500/20 bg-blue-500/10",
    "Next.js 14": "text-white border-white/30 shadow-white/20 bg-white/10",
    "Node.js": "text-green-400 border-green-500/30 shadow-green-500/20 bg-green-500/10",
    "MongoDB": "text-emerald-400 border-emerald-500/30 shadow-emerald-500/20 bg-emerald-500/10",
    "AWS": "text-orange-400 border-orange-500/30 shadow-orange-500/20 bg-orange-500/10",
    "Python": "text-yellow-300 border-yellow-500/30 shadow-yellow-500/20 bg-yellow-500/10",
    "Docker": "text-blue-300 border-blue-500/30 shadow-blue-500/20 bg-blue-500/10",
    "HTML5": "text-orange-500 border-orange-500/30 shadow-orange-500/20 bg-orange-500/10",
    "CSS3": "text-blue-500 border-blue-500/30 shadow-blue-500/20 bg-blue-500/10",
    "JavaScript": "text-yellow-400 border-yellow-500/30 shadow-yellow-500/20 bg-yellow-500/10",
    "Kubernetes": "text-indigo-400 border-indigo-500/30 shadow-indigo-500/20 bg-indigo-500/10",
  };
  // Default fallback for others
  return styles[techName] || "text-slate-200 border-slate-500/30 shadow-slate-500/20 bg-slate-500/10";
};

const timelineData = [
  {
    year: "2018",
    title: "The Genesis",
    role: "Frontend Specialist",
    description: "Started the journey by deep-diving into web fundamentals. Built responsive, pixel-perfect interfaces that laid the foundation for complex engineering.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    icon: <Code2 />,
    glowColor: "cyan",
  },
  {
    year: "2020",
    title: "Fullstack Mastery",
    role: "MERN Stack Developer",
    description: "Transitioned to backend architecture. Mastered the art of connecting efficient APIs with dynamic frontends using the MERN stack.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    icon: <Server />,
    glowColor: "purple",
  },
  {
    year: "2022",
    title: "Cross-Platform & Cloud",
    role: "Mobile & DevOps Engineer",
    description: "Broke the barrier between web and mobile. Deployed scalable applications on AWS/Docker and built native experiences.",
    tech: ["React Native", "Docker", "AWS", "Kubernetes"],
    icon: <Smartphone />,
    glowColor: "blue",
  },
  {
    year: "2023",
    title: "Enterprise Solutions",
    role: "Lead Systems Architect",
    description: "Architected and deployed complex multi-vendor systems across various industries serving thousands of daily users.",
    featuredProjects: [
      { name: "Ecommerce", icon: <ShoppingBag className="w-3 h-3" /> },
      { name: "LMS Platform", icon: <GraduationCap className="w-3 h-3" /> },
      { name: "Fitness Tech", icon: <Dumbbell className="w-3 h-3" /> },
      { name: "HR SaaS", icon: <Users className="w-3 h-3" /> },
    ],
    tech: ["Microservices", "PostgreSQL", "Redis", "GraphQL"],
    icon: <Globe />,
    glowColor: "emerald",
  },
  {
    year: "Present",
    title: "AI & Next-Gen Tech",
    role: "Senior AI Architect",
    description: "Fusing Artificial Intelligence with modern web architectures. Building intelligent platforms and RAG Chatbots defining the next generation.",
    tech: ["Next.js 14", "Python", "LLMs", "Vector DBs"],
    icon: <BrainCircuit />,
    glowColor: "rose",
  },
];

const TimelineCard = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} mb-24 last:mb-0`}>
      {/* Spacer for Desktop Alignment */}
      <div className="hidden md:block w-1/2" />
      
      {/* CENTRAL NODE ICON */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 bg-black/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group z-20 relative
            ${item.glowColor === 'cyan' ? 'border-cyan-500 shadow-cyan-500/40 text-cyan-400' : ''}
            ${item.glowColor === 'purple' ? 'border-purple-500 shadow-purple-500/40 text-purple-400' : ''}
            ${item.glowColor === 'blue' ? 'border-blue-500 shadow-blue-500/40 text-blue-400' : ''}
            ${item.glowColor === 'emerald' ? 'border-emerald-500 shadow-emerald-500/40 text-emerald-400' : ''}
            ${item.glowColor === 'rose' ? 'border-rose-500 shadow-rose-500/40 text-rose-400' : ''}
          `}
        >
            {/* Inner pulsing dot */}
            <div className={`absolute inset-0 rounded-full opacity-20 animate-ping 
                 ${item.glowColor === 'cyan' ? 'bg-cyan-500' : 
                   item.glowColor === 'purple' ? 'bg-purple-500' :
                   item.glowColor === 'blue' ? 'bg-blue-500' :
                   item.glowColor === 'emerald' ? 'bg-emerald-500' : 'bg-rose-500'}`} 
            />
            
            {/* Icon */}
            <div className="w-6 h-6 md:w-8 md:h-8 z-10">
                {item.icon}
            </div>
        </motion.div>
      </div>

      {/* CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className={`w-full md:w-[calc(50%-50px)] pl-16 md:pl-0 relative z-10 
          ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
      >
        {/* Glass Card Container */}
        <div className="relative group rounded-2xl p-6 md:p-8 
             bg-white/[0.02] backdrop-blur-xl border border-white/10 
             hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500
             shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
        >
          {/* Year & Role Header */}
          <div className={`flex flex-col gap-1 mb-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
            <span className={`text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10`}>
              {item.year}
            </span>
            <span className={`text-xs md:text-sm font-bold tracking-[0.2em] uppercase py-1 px-3 rounded-full border bg-opacity-20 backdrop-blur-md w-fit
               ${item.glowColor === 'cyan' ? 'border-cyan-500/50 text-cyan-300 bg-cyan-900/20' : 
                 item.glowColor === 'purple' ? 'border-purple-500/50 text-purple-300 bg-purple-900/20' :
                 item.glowColor === 'blue' ? 'border-blue-500/50 text-blue-300 bg-blue-900/20' :
                 item.glowColor === 'emerald' ? 'border-emerald-500/50 text-emerald-300 bg-emerald-900/20' : 
                 'border-rose-500/50 text-rose-300 bg-rose-900/20'}`}>
              {item.role}
            </span>
          </div>
          
          {/* Title & Desc */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
            {item.description}
          </p>
          
          {/* Projects (If any) */}
          {item.featuredProjects && (
            <div className={`grid grid-cols-2 gap-3 mb-6 ${isEven ? 'md:justify-end' : ''}`}>
              {item.featuredProjects.map((proj, i) => (
                <div key={i} className={`flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all 
                  ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <span className={`${item.glowColor === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'}`}>{proj.icon}</span>
                  <span>{proj.name}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills - The "Glowing Buttons" */}
          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
            {item.tech.map((t, i) => (
              <motion.span 
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-lg border backdrop-blur-md transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${getTechStyle(t)}`}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function UltimateTimeline() {
  const containerRef = useRef(null);
  
  // Track scroll for the center line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    // Transparent wrapper (No black bg)
    <div className="relative w-full py-20 overflow-hidden" ref={containerRef}>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        
        {/* THE LINE */}
        {/* Background static line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />
        
        {/* Animated filling line (Glow effect) */}
        <motion.div 
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-rose-500 md:-translate-x-1/2 shadow-[0_0_20px_rgba(0,255,255,0.5)] z-0"
        />

        {/* TIMELINE ITEMS */}
        <div className="relative z-10">
          {timelineData.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
        
      </div>
    </div>
  );
}