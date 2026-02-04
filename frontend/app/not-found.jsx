import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Star, MessageSquare } from 'lucide-react';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', path: 'https://rafikhan-silk.vercel.app', icon: <Home size={18} /> },
    { name: 'Services', path: '/services', icon: <Briefcase size={18} /> },
    { name: 'Projects', path: '/projects', icon: <Star size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Testimonials', path: '/testimonials', icon: <MessageSquare size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a2a] text-white flex flex-col items-center justify-center font-sans">
      
      {/* --- BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Generate random stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: `calc(${Math.random() * 100}% + ${mousePosition.x * 20}px)`,
              y: `calc(${Math.random() * 100}% + ${mousePosition.y * 20}px)`,
            }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
            }}
          />
        ))}
        
        {/* Large faint planet gradient in background */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20"
          animate={{
            x: mousePosition.x * -40,
            y: mousePosition.y * -40,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-[100px] opacity-20"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-4">
        
        {/* Floating Astronaut Illustration (SVG) */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            x: mousePosition.x * -30, 
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 0.2, ease: "linear"}
          }}
          className="mb-8 inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          {/* Simple Vector Astronaut */}
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#2563EB" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" strokeDasharray="10 10"/>
            <path d="M100 40C80 40 60 55 60 85C60 115 100 130 100 130C100 130 140 115 140 85C140 55 120 40 100 40Z" fill="white"/>
            <rect x="80" y="65" width="40" height="25" rx="12.5" fill="#1E293B"/>
            <path d="M70 130L50 170" stroke="white" strokeWidth="12" strokeLinecap="round"/>
            <path d="M130 130L150 170" stroke="white" strokeWidth="12" strokeLinecap="round"/>
            <path d="M55 90L30 70" stroke="white" strokeWidth="12" strokeLinecap="round"/>
            <path d="M145 90L170 70" stroke="white" strokeWidth="12" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* 404 Text */}
        <motion.h1 
          className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-bold mt-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Houston, we have a problem.
        </motion.h2>

        <motion.p 
          className="text-gray-400 max-w-md mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The page you are looking for has drifted into deep space. Let's get you back to safety.
        </motion.p>

        {/* --- NAVIGATION GRID --- */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.path}
              className="group relative flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
                {link.icon}
              </span>
              <span className="relative z-10 font-medium">{link.name}</span>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </motion.div>

      </div>
      
      {/* Decorative footer element */}
      <div className="absolute bottom-5 text-gray-600 text-xs">
        Lost Coordinates: {mousePosition.x.toFixed(2)} | {mousePosition.y.toFixed(2)}
      </div>
    </div>
  );
};

export default NotFound;