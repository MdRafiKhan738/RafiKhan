'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGithub, 
  FaFacebook, 
  FaLinkedin,
  FaPaperPlane 
} from 'react-icons/fa'
import { serverurl } from '../page'
import toast, { Toaster } from 'react-hot-toast'

// Animation Variants for Stagger Effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
}

export default function ContactPage() {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    phonenumber: ''
  })

  const [loading, setloading] = useState(false)

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      setloading(true)
      const { data } = await axios.post(`${serverurl}contact/sendmessage`, formdata)
    if(data?.success){

     toast.success(data.message || 'Message sent successfully 🚀 ')}
      
      setformdata({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        phonenumber: ''
      })
    } catch (error) {
     
    } finally {
           toast.error(error?.response?.data?.message || 'Failed to send the messages')
    }
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* Animated Background Elements (Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-600/30 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]" 
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 bg-white/5 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.1)]"
      >

        {/* LEFT SIDE: Info & Visuals */}
        <motion.div variants={itemVariants} className="flex flex-col justify-between">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-medium mb-4"
            >
              🚀 Ready to Launch?
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Amazing</span> 💖
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Got a killer project idea, a startup vision, wana creating a mobile app?,creating a fullstack website,or just want to collaborate? 
              Drop me a message — let's turn that idea into reality.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <ContactCard 
                href="tel:01989678448" 
                icon={<FaPhoneAlt />} 
                text="01989678448" 
                subtext="Call me directly"
              />
              <ContactCard 
                href="mailto:nextjs061@gmail.com" 
                icon={<FaEnvelope />} 
                text="nextjs061@gmail.com" 
                subtext="Send me an email"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <p className="text-gray-500 text-sm mb-4">Connect with me on</p>
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/MdRafiKhan738" icon={<FaGithub />} />
              <SocialIcon href="https://www.facebook.com/rafi.hossian.71" icon={<FaFacebook />} />
              <SocialIcon href="https://www.linkedin.com/in/rafi-khan-25649a37b/" icon={<FaLinkedin />} />
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Interactive Form */}
        <motion.div variants={itemVariants} className="bg-black/20 p-6 rounded-2xl border border-white/5">
          <form onSubmit={handlesubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputGroup name="name" value={formdata.name} onChange={handlechange} placeholder="Your Name" />
              <InputGroup name="phonenumber" value={formdata.phonenumber} onChange={handlechange} placeholder="Phone Number" />
            </div>
            
            <InputGroup name="email" value={formdata.email} onChange={handlechange} placeholder="Your Email Address" type="email" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputGroup name="subject" value={formdata.subject} onChange={handlechange} placeholder="Subject" />
              <InputGroup name="budget" value={formdata.budget} onChange={handlechange} placeholder="Estimated Budget" />
            </div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <textarea
                name="message"
                value={formdata.message}
                onChange={handlechange}
                placeholder="Tell me the details about your project..."
                rows="4"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500 focus:bg-pink-500/5 transition-all duration-300 resize-none"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/25 transition-all"
            >
              {loading ? "Sending..." : <>Send Message <FaPaperPlane className="text-sm" /></>}
            </motion.button>
          </form>
        </motion.div>

      </motion.div>
    </div>
  )
}

// Reusable Components for cleaner code

function ContactCard({ href, icon, text, subtext }) {
  return (
    <motion.a
      whileHover={{ scale: 1.02, x: 5 }}
      href={href}
      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-pink-500/10 hover:border-pink-500/30 transition-all group"
    >
      <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-medium">{text}</h3>
        <p className="text-gray-500 text-sm">{subtext}</p>
      </div>
    </motion.a>
  )
}

function SocialIcon({ href, icon }) {
  return (
    <motion.a 
      whileHover={{ y: -5, color: '#F472B6' }}
      href={href} 
      target="_blank"
      className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white text-xl border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"
    >
      {icon}
    </motion.a>
  )
}

function InputGroup({ name, value, onChange, placeholder, type = "text" }) {
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500 focus:bg-pink-500/5 transition-all duration-300"
      />
    </motion.div>
  )
}