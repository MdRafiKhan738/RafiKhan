"use client";
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebookF, FaGithub, FaLinkedinIn, 
  FaWhatsapp, FaPhoneAlt, FaEnvelope 
} from 'react-icons/fa';
import rafipic from "../../public/RafiKhanLogo.png";

const Footer = () => {
  const pathname = usePathname();

  // Dynamic Theme Logic
  const getTheme = () => {
    switch (pathname) {
      case '/about':
        return { 
            bg: "from-blue-600 to-cyan-500", 
            text: "text-blue-400", 
            shadow: "shadow-blue-500/50",
            border: "border-blue-500"
        };
      case '/contact':
        return { 
            bg: "from-pink-600 to-rose-400", 
            text: "text-pink-400", 
            shadow: "shadow-pink-500/50",
            border: "border-pink-500"
        };
      case '/services':
        return { 
            bg: "from-purple-600 to-indigo-500", 
            text: "text-purple-400", 
            shadow: "shadow-purple-500/50",
            border: "border-purple-500"
        };
      case '/testimonial':
        return { 
            bg: "from-orange-500 to-amber-400", 
            text: "text-orange-400", 
            shadow: "shadow-orange-500/50",
            border: "border-orange-500"
        };
      default: // Home / Green
        return { 
            bg: "from-emerald-600 to-green-400", 
            text: "text-emerald-400", 
            shadow: "shadow-emerald-500/50",
            border: "border-emerald-500"
        };
    }
  };

  const theme = getTheme();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative mt-20 overflow-hidden bg-gray-950 text-gray-300 py-16 border-t-2 ${theme.border} transition-colors duration-700`}
    >
      {/* Animated Glowing Background Sphere */}
      <div className={`absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br ${theme.bg} blur-[120px] opacity-20 rounded-full `}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Section 1: Profile & Bio */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`relative w-28 h-28 p-1 rounded-2xl bg-gradient-to-tr ${theme.bg} ${theme.shadow} shadow-2xl`}
            >
              <Image 
                src={rafipic} 
                alt="Rafi Khan" 
                className="rounded-xl bg-gray-900 object-cover w-full h-full"
                placeholder="blur" 
                blurDataURL="/RafiKhanLogo.png"
              />
            </motion.div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter">
                RAFI <span className={`${theme.text} transition-colors duration-700`}>KHAN</span>
              </h2>
              <p className="text-sm font-medium tracking-wide uppercase opacity-70">Working as a fullstack Developer .</p>
            </div>
          </div>

          {/* Section 2: Interactive Contacts */}
          <div className="flex flex-col space-y-6 bg-gray-900/50 p-6 rounded-3xl border border-gray-800 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white text-center">Get In Touch</h3>
            <div className="flex flex-col space-y-4">
                <ContactLink 
                    href="tel:+8801862623066" 
                    icon={<FaPhoneAlt />} 
                    text="01862623066" 
                    themeColor={theme.text} 
                />
                <ContactLink 
                    href="mailto:nextjs061@gmail.com" 
                    icon={<FaEnvelope />} 
                    text="nextjs061@gmail.com" 
                    themeColor={theme.text} 
                />
            </div>
          </div>

          {/* Section 3: Social Hub */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <h3 className="text-xl font-semibold text-white">Social Hub</h3>
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/MdRafiKhan738" icon={<FaGithub />} theme={theme} />
              <SocialIcon href="https://www.linkedin.com/in/rafi-khan-25649a37b/" icon={<FaLinkedinIn />} theme={theme} />
              <SocialIcon href="https://www.facebook.com/rafi.hossian.71/" icon={<FaFacebookF />} theme={theme} />
              <SocialIcon href="https://wa.me/8801989678448" icon={<FaWhatsapp />} theme={theme} />
            </div>
            <p className="text-xs text-gray-500 text-right">Available for Industry level Projects & Full Time jobs.Specially Loved to works as remote senior fullstack developer</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest text-gray-500 uppercase">
          <p>© {new Date().getFullYear()} RAFI KHAN • ALL RIGHTS RESERVED</p>
          <p className="flex items-center gap-2">
            DEVELOPED WITH <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-red-500">❤️</motion.span> BY RAFI
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

// Sub-component for Social Icons with Animation
const SocialIcon = ({ href, icon, theme }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    whileHover={{ y: -8, scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 transition-all duration-300 hover:${theme.border} hover:text-white group`}
  >
    <span className={`text-xl transition-colors duration-700 group-hover:${theme.text}`}>{icon}</span>
  </motion.a>
);

// Sub-component for Contact Links
const ContactLink = ({ href, icon, text, themeColor }) => (
    <motion.a 
        href={href}
        whileHover={{ x: 10 }}
        className="flex items-center gap-4 group cursor-pointer"
    >
        <div className={`p-3 rounded-lg bg-gray-800 group-hover:bg-white group-hover:text-black transition-all duration-300 ${themeColor}`}>
            {icon}
        </div>
        <span className="text-sm font-semibold group-hover:text-white transition-colors">{text}</span>
    </motion.a>
);

export default Footer;