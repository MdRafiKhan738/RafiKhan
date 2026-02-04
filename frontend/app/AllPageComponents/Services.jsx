"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiShield } from "react-icons/fi";
import { Laptop, Code, Smartphone, Cpu, Database, Zap } from "lucide-react";

const Services = () => {
  const takaToUSD = (taka) => (taka / 120).toFixed(2); // Updated rate approx

  const services = [
    {
      title: "Frontend Masterpiece",
      tech: "(ReactJS / NextJS 14)",
      price: 15000,
      prepayment: 500,
      icon: <Laptop className="w-8 h-8 text-cyan-400" />,
      features: [
        "Ultra-smooth Framer Motion Animations",
        "3D Elements (Three.js/Fiber) Integration",
        "Responsive & Mobile-First Architecture",
        "Server Side Rendering (SSR) for 100% SEO",
        "Custom Micro-interactions & Glassmorphism",
      ],
      desc: "We don't just build websites; we build experiences. Perfect for brands that need to stand out immediately.",
    },
    {
      title: "Fullstack Empire",
      tech: "(MERN / NextJS Fullstack)",
      price: 50000,
      prepayment: 1500,
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      features: [
        "Bank-Grade Security & JWT Auth",
        "Scalable MongoDB/PostgreSQL Architecture",
        "AWS/DigitalOcean Cloud Hosting Setup",
        "SuperAdmin Dashboard & Analytics",
        "Payment Gateway (Stripe/SSLCommerz)",
      ],
      desc: "A complete business solution. My personal elite team handles the architecture to ensure your business scales to millions of users.",
      isPopular: true, // Highlights this card
    },
    {
      title: "Personal Brand Portfolio",
      tech: "(Interactive Resume)",
      price: 7000,
      prepayment: 0, // No Prepayment
      icon: <Code className="w-8 h-8 text-pink-400" />,
      features: [
        "Minimalist or 3D Creative Design",
        "Contact Form with Email Automation",
        "Project Showcase Gallery",
        "Dark/Light Mode Toggle",
        "Optimized for Recruiter View",
      ],
      desc: "Boost your career with a portfolio that speaks louder than your CV. Impress clients and HR instantly.",
    },
    {
      title: "AI & Automation",
      tech: "(Python / LLMs)",
      price: 20000,
      prepayment: 1000,
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      features: [
        "Custom Chatbots (OpenAI/Gemini API)",
        "Image-to-Video Generation Tools",
        "Business Process Automation Scripts",
        "Data Scrapers & Analysis Tools",
        "Python Backend Integration",
      ],
      desc: "Leverage the power of Artificial Intelligence to automate your workflow and create next-gen products.",
    },
    {
      title: "Mobile App Ecosystem",
      tech: "(React Native)",
      price: 25000,
      prepayment: 1500,
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      features: [
        "Cross-Platform (iOS & Android)",
        "Real-time Chat & Push Notifications",
        "Native Device Features (Camera/GPS)",
        "Offline Mode Capabilities",
        "App Store & Play Store Submission Guide",
      ],
      desc: "Turn your idea into an app installed on thousands of devices. Smooth, native performance guaranteed.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0a0514] overflow-hidden text-white pt-36 pb-20 px-6 md:px-12">
      {/* Background Gradients (Ambient Lighting) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm mb-6 backdrop-blur-sm"
        >
          <Zap className="w-4 h-4 fill-purple-400 text-purple-400" />
          <span>Level Up Your Digital Presence</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 glow-text">Services</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Select a package that suits your ambition. We deliver elite code, 
          stunning designs, and scalable architectures.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`group relative rounded-3xl p-8 border transition-all duration-300 backdrop-blur-xl
              ${service.isPopular 
                ? "bg-gradient-to-b from-purple-900/40 to-black/60 border-purple-500/50 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]" 
                : "bg-white/5 border-white/10 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20"
              }`}
          >
             {/* Popular Badge */}
             {service.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                MOST POPULAR
              </div>
            )}

            {/* Icon Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-purple-500/20 transition-colors">
                {service.icon}
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-white">{service.price.toLocaleString()} Tk</h3>
                <p className="text-xs text-gray-400">${takaToUSD(service.price)} USD</p>
              </div>
            </div>

            {/* Title & Desc */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {service.title}
              </h2>
              <p className="text-sm text-purple-400 font-medium mb-3">{service.tech}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <FiCheckCircle className="text-purple-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Prepayment & Button Section */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-gray-400">Prepayment:</span>
                <span className={`font-bold ${service.prepayment === 0 ? "text-green-400" : "text-white"}`}>
                  {service.prepayment === 0 ? "NO PREPAYMENT" : `${service.prepayment.toLocaleString()} Tk`}
                </span>
              </div>
              
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-900/20 active:scale-95">
                Book Now <FiArrowRight />
              </button>
              
              <div className="text-center mt-3 flex items-center justify-center gap-1 text-xs text-gray-500">
                <FiShield className="w-3 h-3" />
                <span>1 Year Free Support & Hosting</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 20px rgba(192, 132, 252, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Services;