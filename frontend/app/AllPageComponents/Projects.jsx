
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Globe, 
  Server, 
  Database, 
  CreditCard, 
  Users, 
  Lock, 
  Smartphone,
  ExternalLink,
  Zap
} from 'lucide-react';

const Projects = () => {
  // Animation variants for stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  const techStack = [
    { name: "Next.js", icon: <Globe size={16} />, color: "bg-black" },
    { name: "MongoDB", icon: <Database size={16} />, color: "bg-green-600" },
    { name: "Strapi CMS", icon: <Server size={16} />, color: "bg-indigo-600" },
    { name: "Stripe", icon: <CreditCard size={16} />, color: "bg-purple-600" },
    { name: "Firebase Auth", icon: <Lock size={16} />, color: "bg-yellow-600" },
  ];

  const features = [
    "Multi-vendor (User, Seller, Admin, Super Admin)",
    "Bank-Level Security & E2E Encryption",
    "OTP Based Verification & Google Auth",
    "Zero Fees for FB/Insta Sellers",
    "Daraz/Cartup Superior Alternative"
  ];

  return (
    <section className="min-h-screen w-full bg-[#0f0518]   text-white py-20 px-4 relative overflow-hidden flex items-center justify-center font-sans">
      
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full mt-16 overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl w-full z-10 relative"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            Featured Masterpiece
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Redefining e-commerce in Bangladesh with next-gen security and architecture.
          </p>
        </motion.div>

        {/* Project Card - The "Ecommerce Platform" */}
        <motion.div 
          variants={itemVariants}
          className="w-full bg-[#1a1025]/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.15)] hover:shadow-[0_0_80px_rgba(147,51,234,0.3)] transition-all duration-500 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Side: Visual / Info */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between relative">
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Zap size={12} className="fill-current" />
                    Full Stack Platform
                  </span>
                  <span className="px-4 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck size={12} />
                    Bank-Level Security
                  </span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  Rafis World Market
                  <span className="block text-xl text-gray-400 font-normal mt-2">The Ultimate Multivendor Ecosystem</span>
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  A revolutionary e-commerce infrastructure designed specifically for 
                  <span className="text-purple-400 font-semibold"> Bangladeshi FB & Instagram sellers</span>. 
                  Unlike traditional sites, this is a secure, zero-fee platform offering a true alternative to Daraz/Cartup. 
                  Built with bank-grade security, OTP verification, and dedicated dashboards for every user role.
                </p>

                {/* Tech Stack Bubbles */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {techStack.map((tech, index) => (
                    <div key={index} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white/90 shadow-lg ${tech.color} bg-opacity-80 backdrop-blur-md border border-white/10`}>
                      {tech.icon}
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a 
                  href="https://rafis-world.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] group/btn"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  <ExternalLink size={20} />
                  Visit Live Platform
                </a>
                
                <button className="px-8 py-4 rounded-xl font-bold text-white border border-purple-500/30 hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2">
                  <Smartphone size={20} />
                  View Mobile App
                </button>
              </div>
            </div>

            {/* Right Side: Feature List / Dashboard Preview UI */}
            <div className="lg:col-span-5 bg-[#130b1b] p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-purple-500/30 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Server className="text-purple-500" />
                System Architecture
              </h4>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
                    className="p-4 rounded-xl bg-[#1e122b] border border-purple-500/20 flex items-start gap-3 transition-colors cursor-default"
                  >
                    <div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-green-500/20 flex items-center justify-center">
                       <div className="w-[8px] h-[8px] rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Dashboard Role Badges */}
              <div className="mt-8 pt-8 border-t border-purple-500/20">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Dashboard Access Levels</p>
                <div className="flex flex-wrap gap-2">
                  {['Super Admin', 'Admin', 'Seller', 'User'].map((role) => (
                    <span key={role} className="px-2 py-1 text-xs border border-gray-600 rounded text-gray-400">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Teaser (Optional Footer for other projects) */}
        <motion.div variants={itemVariants} className="mt-20 text-center opacity-50 hover:opacity-100 transition-opacity">
          <p className="text-purple-300/60 text-sm tracking-[0.2em] uppercase animate-pulse">
            More New Greatest Fullstack Project is comming soon ..Stay Connected
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Projects;
