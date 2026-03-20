"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp, 
  FaArrowUp, FaPhoneAlt, FaEnvelope 
} from 'react-icons/fa';
import rafipic from "../../public/RafiKhanLogo.png.jpeg"; 
import { useRouter } from 'next/navigation'


const Footer = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [timeData, setTimeData] = useState({
    dhaka: { time: "--:--", ampm: "" },
    usa: { time: "--:--", ampm: "" },
    japan:{ time: "--:--", ampm: "" },
  });
const router=useRouter()
  // 1. Theme Logic (Dynamic Colors based on Route)
  const getTheme = () => {
    const themes = {
      '/about': { 
        name: "Cyan",
        bg: "from-blue-600 to-cyan-500", 
        text: "text-blue-400", 
        border: "border-blue-500/30",
        hover: "group-hover:text-blue-400",
        btn: "bg-blue-600 hover:bg-blue-500"
      },
            '/privacypolicy': { 
        name: "Red",
        bg: "from-red-600 to-red-500", 
        text: "text-red-400", 
        border: "border-red-500/30",
        hover: "group-hover:text-red-400",
        btn: "bg-red-600 hover:bg-red-500"
      },
       '/projects': { 
        name: "Purple",
        bg: "from-purple-600 to-cyan-500", 
        text: "text-purple-400", 
        border: "border-purple-500/30",
        hover: "group-hover:text-purple-400",
        btn: "bg-purple-600 hover:bg-purple-500"
      },
      '/contact': { 
        name: "Rose",
        bg: "from-pink-600 to-rose-400", 
        text: "text-pink-400", 
        border: "border-pink-500/30",
        hover: "group-hover:text-pink-400",
        btn: "bg-pink-600 hover:bg-pink-500"
      },
      '/services': { 
        name: "Purple",
        bg: "from-purple-600 to-indigo-500", 
        text: "text-purple-400", 
        border: "border-purple-500/30",
        hover: "group-hover:text-purple-400",
        btn: "bg-purple-600 hover:bg-purple-500"
      },
      '/testimonials': { 
        name: "Orange",
        bg: "from-orange-500 to-amber-400", 
        text: "text-orange-400", 
        border: "border-orange-500/30",
        hover: "group-hover:text-orange-400",
        btn: "bg-orange-600 hover:bg-orange-500"
      },
    };
    // Default Theme (Emerald)
    return themes[pathname] || { 
      name: "Emerald",
      bg: "from-emerald-600 to-green-400", 
      text: "text-emerald-400", 
      border: "border-emerald-500/30",
      hover: "group-hover:text-emerald-400",
      btn: "bg-emerald-600 hover:bg-emerald-500"
    };
  };
 const menu = ['Home', 'Services', 'testimonials', 'projects', 'About', 'Contact']
  const theme = getTheme();

  // 2. Accurate Time Logic (Runs only on client to avoid hydration mismatch)
useEffect(() => {
  setMounted(true);

  let timer;

  const updateTime = () => {
    const getTime = (timeZone) => {
      // Create fresh date for each zone (prevents drift)
      const now = new Date();

      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const parts = formatter.formatToParts(now);

      const hour = parts.find(p => p.type === "hour")?.value || "00";
      const minute = parts.find(p => p.type === "minute")?.value || "00";
      const ampm = parts.find(p => p.type === "dayPeriod")?.value || "";

      return {
        time: `${hour}:${minute}`,
        ampm,
      };
    };

    setTimeData({
      dhaka: getTime("Asia/Dhaka"),           // Bangladesh (no DST)
      usa: getTime("America/New_York"),    
      japan:getTime("Asia/Tokyo") 
    });
  };

  // Run immediately
  updateTime();

  // Sync exactly every minute (no useless CPU load)
  const now = new Date();
  const delay = (60 - now.getSeconds()) * 1000; // align to real clock minute

  setTimeout(() => {
    updateTime();
    timer = setInterval(updateTime, 60000); // update every real minute
  }, delay);

  // Cleanup
  return () => {
    if (timer) clearInterval(timer);
  };
}, []);




  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  if (!mounted) return null; // Prevent hydration errors

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={`relative  bg-[#050505] text-gray-300 py-20 border-t ${theme.border} transition-colors duration-700 overflow-hidden`}
    >
      {/* Background Ambient Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-b ${theme.bg} opacity-[0.03] blur-[100px] pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* --- Column 1: Brand & Time (Span 4) --- */}
          <div className="md:col-span-4 flex flex-col space-y-8">
            <div className="flex items-center gap-5">
               <div className={`relative w-20 h-20 p-[2px] rounded-full bg-gradient-to-tr ${theme.bg} shadow-lg shadow-gray-900/50`}>
                  <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                    <Image src={rafipic} alt="Logo" fill className="object-cover" />
                  </div>
               </div>
               <div>
                 <h2 className="text-3xl font-black text-white tracking-tight leading-none">
                   RAFI <span className={theme.text}>KHAN</span>
                 </h2>
                 <p className="text-xs text-gray-500 font-medium tracking-widest mt-1">Working As a fullstack developer</p>
               </div>
            </div>
            
            {/* Live Time Display */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/> Live Status
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Dhaka Time */}
                <div>
                  <p className="text-3xl font-mono text-white leading-none tracking-tighter">
                    {timeData.dhaka.time}<span className="text-sm text-gray-500 ml-1">{timeData.dhaka.ampm}</span>
                  </p>
                  <p className={`text-[10px] font-bold uppercase mt-1 ${theme.text}`}>Dhaka, BD</p>
                </div>
                {/* NYC Time */}
                <div className="border-l border-white/10 pl-4">
                  <p className={`text-3xl font-mono text-gray-400 leading-none tracking-tighter  ${theme.text}`}>
                    {timeData.usa.time}<span className="text-sm text-gray-600 ml-1">{timeData.usa.ampm}</span>
                  </p>
                  <p className="text-[10px] font-bold uppercase mt-1 text-gray-500">New York, USA</p>
                </div>
                  <div className="border-l border-white/10 pl-4">
                  <p className={`text-3xl font-mono text-gray-400 leading-none tracking-tighter  ${theme.text}`}>
                    {timeData.japan.time}<span className="text-sm text-gray-600 ml-1">{timeData.japan.ampm}</span>
                  </p>
                  <p className="text-[10px] font-bold uppercase mt-1 text-gray-500">Tokoyo,Japan</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Column 2: Navigation (Span 4) --- */}
          <div className="md:col-span-4 flex flex-col justify-between">
             <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-600 mb-6">Menu</h3>
                <nav className="flex flex-col space-y-2">
                  {['Home', 'Services', 'testimonials', "projects",'About', 'Contact'].map((item) => (
                    <SwipeText key={item} label={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} themeColor={theme.text} />
                  ))}
                </nav>
             </div>
   
             
             {/* DIRECT ACTION BUTTONS (New) */}
             <div className="mt-8 flex flex-col gap-3">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-600 mb-2">Direct Connect</h3>
                
                {/* Call Button */}
                <a href="tel:01989678448" className="group relative w-full overflow-hidden rounded-xl bg-gray-900 border border-gray-800 p-4 transition-all hover:border-gray-600 active:scale-95">
                  <div className={`absolute inset-0 w-0 bg-gradient-to-r ${theme.bg} opacity-10 transition-all duration-300 group-hover:w-full`} />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full bg-gray-800 ${theme.text} group-hover:text-white transition-colors`}>
                        <FaPhoneAlt size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Me Now</p>
                        <p className="text-sm font-mono font-bold text-white group-hover:tracking-widest transition-all">+880 1989-678448</p>
                      </div>
                    </div>
                    <div className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                      <FaArrowUp className="rotate-45 text-white" />
                    </div>
                  </div>
                </a>

                {/* Email Button */}
                <a href="mailto:nextjs061@gmail.com" className="group relative w-full overflow-hidden rounded-xl bg-gray-900 border border-gray-800 p-4 transition-all hover:border-gray-600 active:scale-95">
                  <div className={`absolute inset-0 w-0 bg-gradient-to-r ${theme.bg} opacity-10 transition-all duration-300 group-hover:w-full`} />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full bg-gray-800 ${theme.text} group-hover:text-white transition-colors`}>
                        <FaEnvelope size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Send Email</p>
                        <p className="text-sm font-bold text-white group-hover:tracking-widest transition-all">nextjs061@gmail.com</p>
                      </div>
                    </div>
                    <div className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                      <FaArrowUp className="rotate-45 text-white" />
                    </div>
                  </div>
                </a>

             </div>
          </div>

          {/* --- Column 3: Socials & Action (Span 4) --- */}
          <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end">
             <div className="w-full text-left md:text-right">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-600 mb-6">Social Networks</h3>
                <div className="flex flex-col space-y-2 md:items-end">
                  <SwipeText label="Github" href="https://github.com/rafihushen01" themeColor={theme.text} alignRight />
                                    <SwipeText label="Alternate Github" href="https://github.com/MdRafiKhan738" themeColor={theme.text} alignRight />
                  <SwipeText label="LinkedIn" href="https://www.linkedin.com/in/rafi-khan-25649a37b/" themeColor={theme.text} alignRight />
                  <SwipeText label="Facebook" href="https://www.facebook.com/rafi.hossian.71" themeColor={theme.text} alignRight />
                  <SwipeText label="WhatsApp" href="https://wa.me/8801989678448" themeColor={theme.text} alignRight />
                </div>
             </div>

             <motion.button
               onClick={scrollToTop}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className={`mt-10 md:mt-0 p-5 rounded-full bg-gradient-to-br ${theme.bg} text-white shadow-2xl shadow-gray-900/50 border border-white/10 group`}
             >
               <FaArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
             </motion.button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-medium tracking-widest text-gray-600 uppercase">
              © {new Date().getFullYear()} Rafi Khan — All Rights Reserved.
            </p>
             <p className="text-[10px] font-medium tracking-widest text-gray-600 uppercase" onClick={()=>router.push("/privacypolicy")} style={{cursor:"pointer"}}>
              Privacy & Policy
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.bg} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${theme.bg}`}></span>
              </span>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Available for Fullstack development and large scale projects.Also work as a remote fullstack developer</p>
            </div>
        </div>
      </div>
    </motion.footer>
  );
};

// -------------------------------------------------------------
// The "Super Cool" Swiping Text Component (Fixed Animation)
// -------------------------------------------------------------
const SwipeText = ({ label, href, themeColor, alignRight = false }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group overflow-hidden h-9 cursor-pointer flex flex-col ${alignRight ? 'items-end' : 'items-start'}`}
    >
      {/* Container for the two text lines */}
      <div className="relative w-full h-full transition-transform duration-500 ease-[0.19,1,0.22,1] group-hover:-translate-y-full">
        
        {/* State 1: Default Visible */}
        <span className="flex items-center h-9 text-2xl font-bold text-gray-500 tracking-tight transition-colors duration-300">
          {label}
        </span>
        
        {/* State 2: Hover Reveal (From Bottom) */}
        <span className={`flex items-center h-9 text-2xl font-bold tracking-tight italic ${themeColor}`}>
          {label}
        </span>

      </div>
      
      {/* Fancy Underline */}
      <span className={`absolute bottom-0 ${alignRight ? 'right-0' : 'left-0'} w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100`} />
    </a>
  );
};

export default Footer;
