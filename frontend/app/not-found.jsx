"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, Star, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link"; // Using Next.js Link for better performance

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);
  const [mounted, setMounted] = useState(false);

  // 1. Handle Hydration & Window Object Safely
  useEffect(() => {
    setMounted(true);
    
    // Generate stars only after component mounts on client
    const starCount = 50;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // use percentages for position
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setStars(newStars);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Navigation Links
  const navLinks = [
    { name: "Home", path: "https://rafikhan-silk.vercel.app", icon: <Home size={20} /> },
    { name: "Services", path: "/services", icon: <Briefcase size={20} /> },
    { name: "Projects", path: "/projects", icon: <Star size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Reviews", path: "/testimonials", icon: <MessageSquare size={20} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  if (!mounted) return <div className="bg-[#0a0a2a] w-full h-screen" />;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#030014] text-white flex flex-col items-center justify-center font-sans selection:bg-blue-500/30">
      
      {/* --- DYNAMIC BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Nebula Gradients */}
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px]"
          animate={{ x: mousePosition.x * -20, y: mousePosition.y * -20 }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px]"
          animate={{ x: mousePosition.x * -30, y: mousePosition.y * -30 }}
        />

        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Shooting Star Effect */}
        <motion.div
          className="absolute top-[20%] left-[20%] w-32 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{
            x: [0, 800],
            y: [0, 800],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "linear",
          }}
          style={{ rotate: 45 }}
        />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl w-full">
        
        {/* Animated Astronaut SVG */}
        <motion.div
          className="relative mb-8"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 2, -2, 0],
            filter: ["drop-shadow(0 0 15px rgba(59,130,246,0.3))", "drop-shadow(0 0 30px rgba(168,85,247,0.4))", "drop-shadow(0 0 15px rgba(59,130,246,0.3))"]
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            filter: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            x: mousePosition.x * -40, 
            y: mousePosition.y * -40,
          }}
        >
          <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Glow behind */}
            <circle cx="100" cy="100" r="80" fill="#4F46E5" fillOpacity="0.1" className="animate-pulse" />
            
            {/* Helmet & Suit */}
            <path d="M100 40C80 40 60 55 60 85C60 115 100 130 100 130C100 130 140 115 140 85C140 55 120 40 100 40Z" fill="white" className="drop-shadow-lg"/>
            <rect x="80" y="65" width="40" height="25" rx="12.5" fill="#0f172a"/>
            <circle cx="85" cy="72" r="2" fill="white" fillOpacity="0.5"/>
            
            {/* Limbs */}
            <path d="M70 130L50 170" stroke="white" strokeWidth="12" strokeLinecap="round"/>
            <path d="M130 130L150 170" stroke="white" strokeWidth="12" strokeLinecap="round"/>
            <motion.path 
              d="M55 90L30 70" 
              stroke="white" 
              strokeWidth="12" 
              strokeLinecap="round"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ originX: 0.9, originY: 0.9 }}
            />
            <path d="M145 90L170 70" stroke="white" strokeWidth="12" strokeLinecap="round"/>
            
            {/* Life support cable */}
            <motion.path 
                d="M100 130 Q 100 180 130 200" 
                stroke="#6366f1" 
                strokeWidth="4" 
                strokeDasharray="4 4"
                fill="none"
                animate={{ d: ["M100 130 Q 90 180 120 200", "M100 130 Q 110 180 140 200", "M100 130 Q 90 180 120 200"] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
          </svg>
        </motion.div>

        {/* 404 Glitch Text */}
        <div className="relative">
          <motion.h1 
            className="text-[8rem] md:text-[10rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            404
          </motion.h1>
          <motion.div 
            className="absolute inset-0 text-[8rem] md:text-[10rem] font-black leading-none tracking-tighter text-blue-500/30 mix-blend-screen"
            animate={{ x: [-2, 2, -2], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
          >
            404
          </motion.div>
        </div>

        <motion.h2
          className="text-2xl md:text-3xl font-bold mt-2 text-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Lost in the Void
        </motion.h2>

        <motion.p 
          className="text-gray-400 mt-4 mb-10 max-w-md text-center text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The page you are looking for has drifted into deep space. Engage thrusters to return to safety.
        </motion.p>

        {/* --- NAVIGATION GRID --- */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="group relative flex flex-col items-center justify-center gap-3 p-4 
                         bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl 
                         hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] 
                         transition-all duration-300 overflow-hidden"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                {link.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">{link.name}</span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
            </Link>
          ))}
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="mt-12"
        >
           <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest">
              <ArrowLeft size={14} /> Return to Mission Control
           </Link>
        </motion.div>

      </div>
      
      {/* Decorative footer */}
      <div className="absolute bottom-6 w-full text-center text-white/20 text-xs font-mono">
        COORD: {mousePosition.x.toFixed(4)} // {mousePosition.y.toFixed(4)} <br/>
        SYSTEM STATUS: CRITICAL
      </div>
      
      {/* CSS for Shimmer Animation */}
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;