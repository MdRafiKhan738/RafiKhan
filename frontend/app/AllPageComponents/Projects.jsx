"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Globe, 
  Server, 
  Database, 
  CreditCard, 
  Lock, 
  ExternalLink,
  Zap,
  Github,
  MapPin,
  RefreshCw,
  ShoppingBag,
  Globe2
} from 'lucide-react';

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 40, damping: 15 }
    }
  };

  const projectsData = [
    {
      id: "khancosmetics",
      title: "GlowHaat",
      subtitle: "Enterprise Daraz-Level Ecommerce Ecosystem",
      description: "My biggest ongoing commercial project and personal business platform. A massive, highly scalable architecture featuring six distinct operational panels.",
      highlight: "Next.js Enterprise Architecture",
      icon: <ShoppingBag size={14} className="fill-current" />,
      colorTheme: "from-blue-600 to-cyan-500",
      shadowTheme: "shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_80px_rgba(6,182,212,0.4)]",
      tech: ["Next.js", "Fullstack", "High-Scale DB"],
      features: ["6-Tier Multi-vendor Architecture", "Superadmin & Admin Panels", "Seller & SellerAdmin Dashboards", "User & Affiliate Networking"],
      roles: ['Super Admin', 'Admin', 'Seller', 'Seller Admin', 'User', 'Affiliate'],
      links: [
        { label: "Live Platform", url: "https://khancosmetics.vercel.app", type: "live" }
      ]
    },
    {
      id: "vingo",
      title: "Vingo",
      subtitle: "Real-Time Food Delivery Network",
      description: "A gigantic Zomato/Foodpanda alternative. Features automatic user location detection to show available regional restaurants. Fully real-time infrastructure powered by Socket.io.",
      highlight: "Real-Time Socket.io & Geolocation",
      icon: <MapPin size={14} className="fill-current" />,
      colorTheme: "from-blue-500 to-indigo-500",
      shadowTheme: "shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:shadow-[0_0_80px_rgba(59,130,246,0.4)]",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      features: ["Auto-Location Detection", "Live Order Tracking", "Real-Time Restaurant Sync", "Open Source for Learners"],
      roles: ['User', 'Seller', 'Delivery Boy'],
      links: [
        { label: "User Live URL", url: "https://vingo-1.vercel.app", type: "live" },
        { label: "Frontend Repo", url: "https://github.com/rafihushen01/Vingo-1", type: "github" },
        { label: "Backend Repo", url: "https://github.com/rafihushen01/VingoBackend", type: "github" }
      ]
    },
    {
      id: "onecart",
      title: "OneCart",
      subtitle: "Hacker-Proof Single Panel Ecommerce",
      description: "An incredibly secure, fully encrypted platform. Features Google Authentication hacked via Firebase, Redux for state management, and an impenetrable hashed database.",
      highlight: "Ultra-Secure Encrypted Data",
      icon: <ShieldCheck size={14} className="fill-current" />,
      colorTheme: "from-cyan-500 to-blue-600",
      shadowTheme: "shadow-[0_0_40px_rgba(14,165,233,0.2)] hover:shadow-[0_0_80px_rgba(14,165,233,0.4)]",
      tech: ["React.js", "Express.js", "MongoDB", "Redux", "Firebase Auth"],
      features: ["End-to-End Encryption", "Password & Data Hashing", "React-Hot-Toast Integrations", "Separate Admin Environment"],
      roles: ['User', 'Admin'],
      links: [
        { label: "Live User Site", url: "https://onecartt.vercel.app", type: "live" },
    
        { label: "Frontend Repo", url: "https://github.com/MdRafiKhan738/ecommerce-web/tree/main/frontend", type: "github" },
    
        { label: "Backend Repo", url: "https://github.com/MdRafiKhan738/ecommerce-web/tree/main/backend", type: "github" }
      ]
    },
    {
      id: "elaundry",
      title: "E-Laundry",
      subtitle: "Localized Online Laundry Service",
      description: "A specialized, highly animated platform for laundry owners. Features i18n localization, Framer Motion animations, and bulletproof cookie-based authentication.",
      highlight: "i18n Localization & Cookie Auth",
      icon: <Globe2 size={14} className="fill-current" />,
      colorTheme: "from-blue-400 to-cyan-400",
      shadowTheme: "shadow-[0_0_40px_rgba(56,189,248,0.2)] hover:shadow-[0_0_80px_rgba(56,189,248,0.4)]",
      tech: ["React.js", "Framer Motion", "Socket.io", "i18n", "MongoDB"],
      features: ["Multi-Language Support (i18n)", "Highly Animated UI", "Secure Cookie-Based Sessions", "Real-Time Updates"],
      roles: ['Admin', 'User'],
      links: [
        { label: "Live App", url: "https://elaundry-five.vercel.app", type: "live" },
        { label: "Frontend Repo", url: "https://github.com/rafihushen01/Elaundry", type: "github" },
        { label: "Backend Repo", url: "https://github.com/rafihushen01/Elaundrywebsitebackend", type: "github" }
      ]
    }
  ];

  return (
    <section className="min-h-screen w-full bg-[#030816] text-white py-24 px-4 relative overflow-hidden flex flex-col items-center font-sans">
      
      {/* Dynamic Animated Blue/Cyan Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none fixed">
        <motion.div 
          animate={{ x: [0, 150, 0], y: [0, -100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 150, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl w-full z-10 relative flex flex-col gap-20"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
            Engineering Masterpieces
          </h2>
          <p className="text-blue-200/70 text-lg max-w-3xl mx-auto font-light tracking-wide">
          My Fullstack enterprise projects.I makes some open source projects for helping learners
          </p>
        </motion.div>

        {/* Projects List Mapping */}
        <div className="flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, margin: "-100px" }}
              className={`w-full bg-[#0a1128]/60 backdrop-blur-2xl border border-blue-500/20 rounded-3xl overflow-hidden transition-all duration-700 group ${project.shadowTheme}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full">
                
                {/* Left Side: Visual / Info */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between relative">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${project.colorTheme} bg-opacity-10 border border-blue-400/30 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]`}>
                        {project.icon}
                        {project.highlight}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="block text-xl text-blue-300/80 font-medium mb-6">
                      {project.subtitle}
                    </span>

                    <p className="text-gray-300/90 leading-relaxed mb-8 text-lg font-light">
                      {project.description}
                    </p>

                    {/* Tech Stack Bubbles */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-cyan-50 bg-blue-900/30 backdrop-blur-md border border-blue-500/20 hover:bg-blue-800/40 transition-colors">
                          <Database size={14} className="text-cyan-400" />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links Section */}
                  <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                    {project.links.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                          link.type === 'live' 
                            ? `bg-gradient-to-r ${project.colorTheme} text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-transparent` 
                            : 'bg-transparent text-blue-200 border border-blue-500/30 hover:bg-blue-900/40 hover:text-white'
                        }`}
                      >
                        {link.type === 'live' ? <ExternalLink size={16} /> : <Github size={16} />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Side: Feature List / Dashboard Specs */}
                <div className="lg:col-span-5 bg-[#050b1a]/80 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-blue-500/20 flex flex-col justify-center relative z-10">
                  <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                    <Server className="text-cyan-400" size={24} />
                    System Architecture
                  </h4>

                  <div className="space-y-4">
                    {project.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ x: 8, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                        className="p-4 rounded-2xl bg-[#0a1229] border border-blue-500/10 flex items-center gap-4 transition-all cursor-default shadow-sm"
                      >
                        <div className="min-w-[12px] h-[12px] rounded-full bg-cyan-500/20 flex items-center justify-center relative">
                           <div className="w-[6px] h-[6px] rounded-full bg-cyan-400 absolute"></div>
                           <div className="w-[12px] h-[12px] rounded-full bg-cyan-400 animate-ping opacity-40"></div>
                        </div>
                        <span className="text-blue-100/80 text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Dashboard Role Badges */}
                  <div className="mt-10 pt-8 border-t border-blue-500/20">
                    <p className="text-xs text-blue-400/60 uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                      <Lock size={12} />
                      Access Panels ({project.roles.length})
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.roles.map((role) => (
                        <span key={role} className="px-3 py-1.5 text-xs font-bold border border-blue-500/30 rounded-lg text-cyan-300 bg-blue-950/40">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Teaser */}
        <motion.div variants={itemVariants} className="mt-12 text-center opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-bold flex items-center justify-center gap-3">
            <RefreshCw size={16} className="animate-spin-slow" />
            More New Project is Coming .Stay Connected ❤️....
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Projects;
