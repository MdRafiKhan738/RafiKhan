'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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



export default function ContactPage() {
  const [formdata, setformdata] = useState({
    name: '', email: '', subject: '', message: '', budget: '', phonenumber: ''
  })
  const [loading, setloading] = useState(false)

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      setloading(true)
      await axios.post(`${serverurl}contact/sendmessage`, formdata)
      alert("Message sent successfully 🚀")
      setformdata({ name: '', email: '', subject: '', message: '', budget: '', phonenumber: '' })
    } catch (error) {
      alert("Something went wrong ❌")
    } finally {
      setloading(false)
    }
  }

  return (
    // Added pt-24 to fix the Navbar overlap and overflow-hidden for background blobs
    <div className="min-h-screen pt-24 pb-12 bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center px-4">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl z-10"
      >

        {/* LEFT SIDE: Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
              Let’s Build <br /> Something Amazing 💖
            </h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Got a project idea, startup, or collaboration in mind? 
              Reach out and let's create the next big thing together.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-4">
              {[
                { icon: <FaPhoneAlt />, label: "01989678448", href: "tel:01989678448" },
                { icon: <FaEnvelope />, label: "nextjs061@gmail.com", href: "mailto:nextjs061@gmail.com" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ x: 10, backgroundColor: "rgba(236, 72, 153, 0.2)" }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 transition-all"
                >
                  <span className="text-pink-400 text-xl">{item.icon}</span>
                  <span className="text-white font-medium">{item.label}</span>
                </motion.a>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-10">
              {[
                { icon: <FaGithub />, link: "https://github.com/MdRafiKhan738" },
                { icon: <FaFacebook />, link: "https://www.facebook.com/rafi.hossian.71" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rafi-khan-25649a37b/" }
              ].map((soc, i) => (
                <motion.a
                  key={i}
                  href={soc.link}
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white text-2xl hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                >
                  {soc.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Animated Form */}
        <motion.form
          onSubmit={handlesubmit}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-black/20 p-8 rounded-3xl border border-white/5 space-y-4 relative"
        >
          {[
            ['name', 'Your Name', 'text'],
            ['email', 'Your Email', 'email'],
            ['subject', 'Subject', 'text'],
            ['budget', 'Project Budget', 'text'],
            ['phonenumber', 'Phone Number', 'tel']
          ].map(([name, placeholder, type], index) => (
            <motion.div 
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
            >
              <input
                type={type}
                name={name}
                value={formdata[name]}
                onChange={handlechange}
                placeholder={placeholder}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 transition-all placeholder:text-gray-500"
                required
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <textarea
              name="message"
              value={formdata.message}
              onChange={handlechange}
              placeholder="Tell me about your project..."
              rows="4"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 transition-all placeholder:text-gray-500 resize-none"
              required
            />
          </motion.div>

          <motion.button
            disabled={loading}
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-50 transition-all"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Send Message <FaPaperPlane className="text-sm" />
              </>
            )}
          </motion.button>
        </motion.form>

      </motion.div>
    </div>
  )
}