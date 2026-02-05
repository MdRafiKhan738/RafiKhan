"use client"

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// 1. Data Source
const testimonials = [
  {
    id: 1,
    name: "Alexia Sterling",
    role: "CEO, Nebula Tech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "We moved our platform to Rafi’s system a few months ago. Since then, crashes stopped, speed improved, and everything just feels more stable. It’s been a very reliable experience so far.",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: "What stood out to me was the smoothness. Pages load fast, transitions feel natural, and nothing feels heavy or broken. It’s clean work and very thoughtfully done.",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    text: "As a developer, I really appreciate the structure. The codebase is organized, scalable, and easy to understand. Security and performance were clearly considered from the start.",
  },
  {
    id: 4,
    name: "Daniel Foster",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    text: "Before this rebuild, our site slowed down whenever traffic increased. Now it handles users smoothly without breaking. That alone made a huge difference for us.",
  },
  {
    id: 5,
    name: "Emily Carter",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    text: "Working together was straightforward. Communication was clear, updates were regular, and the final system felt polished and dependable.",
  },
  {
    id: 6,
    name: "Michael Tan",
    role: "Ecommerce Owner",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200",
    text: "Customers noticed the speed improvement immediately. Checkout feels smoother and the overall experience is more responsive than before.",
  },
  {
    id: 7,
    name: "Sophia Reynolds",
    role: "UX Consultant",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=200",
    text: "The interface feels modern but not overdone. Animations are subtle and smooth, and the usability is strong. It’s well balanced design work.",
  },
  {
    id: 8,
    name: "James Walker",
    role: "CTO, CloudSphere",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    text: "Technically, the system is solid. Authentication, backend structure, and performance tuning were handled properly. It feels production ready.",
  },
  {
    id: 9,
    name: "Olivia Bennett",
    role: "Brand Director",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200",
    text: "Our platform now reflects our brand quality better. It feels smoother, cleaner, and more trustworthy for our users.",
  },
  {
    id: 10,
    name: "Ryan Mitchell",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200",
    text: "The biggest difference is reliability. Things just work consistently now, even when usage grows. That stability matters a lot.",
  },
  {
    id: 11,
    name: "Hannah Scott",
    role: "Operations Lead",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200",
    text: "We’ve had fewer issues and smoother daily operations since switching. Performance improvements were noticeable right away.",
  },
  {
    id: 12,
    name: "Lucas Green",
    role: "SaaS Founder",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=200",
    text: "It’s a practical and well-built system. Clean architecture, predictable performance, and easy to maintain. Exactly what we needed.",
  },
  {
    id: 13,
    name: "Isabella Moore",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=200",
    text: "The site feels smoother and more professional now. Visitors stay longer and interactions feel more responsive.",
  },
  {
    id: 14,
    name: "Ethan Brooks",
    role: "Platform Engineer",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    text: "From an engineering perspective, it’s efficient and stable. Good backend decisions, solid performance tuning, and clean implementation.",
  },
  {
    id: 15,
    name: "Grace Turner",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1524255684952-d7185b509571?auto=format&fit=crop&q=80&w=200",
    text: "Overall, the experience has been smooth and dependable. The system feels faster, more stable, and easier for our customers to use.",
  },
];

const Testimonials = () => {
  // Animation Variants for Scroll Reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delays each card for a cool effect
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden py-24 flex flex-col justify-center items-center font-sans">
      {/* --- GLOBAL STYLES & FONTS --- 
        Injecting Google Font 'Outfit' for that modern cool look
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap');
        .font-cool { font-family: 'Outfit', sans-serif; }
        .text-silver {
          background: linear-gradient(to bottom, #ffffff, #d1d5db, #9ca3af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0px 2px 4px rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* --- BACKGROUND ANIMATIONS --- 
        Moving Orange Orbs
      */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen blur-[120px] opacity-30" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-800 rounded-full mix-blend-screen blur-[150px] opacity-20" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="h-[1px] w-12 bg-orange-500/50"></span>
            <span className="text-orange-500 tracking-[0.3em] mt-4 text-sm uppercase font-bold">Client Love</span>
            <span className="h-[1px] w-12 bg-orange-500/50"></span>
          </div>
          
          <h2 className="font-cool text-5xl md:text-7xl font-bold mb-6">
            <span className="text-silver">Trusted by the</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
              Coolest People
            </span>
          </h2>
        </motion.div>

        {/* TESTIMONIALS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-gray-600 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
              
              {/* Card Content */}
              <div className="relative h-full bg-[#111] border border-white/10 p-8 rounded-2xl overflow-hidden font-cool backdrop-blur-sm">
                
                {/* Metallic Shine Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                {/* Quote Icon */}
                <Quote className="text-orange-500 w-10 h-10 mb-6 opacity-80 group-hover:scale-110 transition-transform duration-300" />

                {/* Text */}
                <p className="text-silver text-lg italic mb-8 leading-relaxed font-light">
                  "{item.text}"
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-6"></div>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur opacity-40"></div>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="relative w-14 h-14 rounded-full border-2 border-orange-500/50 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-wide text-lg">{item.name}</h4>
                    <p className="text-orange-400 text-sm font-medium uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>

                {/* Star Rating Animation */}
                <div className="absolute top-8 right-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;