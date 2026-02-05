'use client'

import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaPaperPlane
} from 'react-icons/fa'

/* ================= ANIMATION ================= */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } }
}

/* ================= COMPONENT ================= */

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

  /* ================= SUBMIT ================= */

  const handlesubmit = async (e) => {
    e.preventDefault()
    if (loading) return

    const name = formdata.name.trim()
    const email = formdata.email.trim()
    const message = formdata.message.trim()

    if (!name || !email || !message) {
      toast.error("Name, Email & Message required")
      return
    }

    const serverurl = process.env.NEXT_PUBLIC_SERVER_URL
    console.log("SERVER URL:", serverurl)

    if (!serverurl) {
      toast.error("Server URL missing (ENV)")
      return
    }

    try {
      setloading(true)

      const res = await axios.post(
        `${serverurl}/contact/sendmessage`,
        { ...formdata, name, email, message },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 20000,
          withCredentials: false
        }
      )

      console.log("RESPONSE:", res.data)

      if (res.data?.success) {
        toast.success(res.data.message || "Message Sent 🚀")
        setformdata({
          name: '',
          email: '',
          subject: '',
          message: '',
          budget: '',
          phonenumber: ''
        })
      } else {
        toast.error(res.data?.message || "Failed")
      }

    } catch (err) {
      console.error(err)
      toast.error("Backend not responding / CORS / Server down")
    } finally {
      setloading(false)
    }
  }

  /* ================= UI ================= */

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">

      {/* TOASTER */}
      <Toaster position="top-right" />

      {/* ANIMATED BLOBS BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-600/30 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(255,0,150,0.15)]"
      >

        {/* LEFT INFO SIDE */}
        <motion.div variants={item} className="flex flex-col justify-between">

          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Let’s Build Something <span className="text-pink-400">Amazing</span> 🚀
            </h1>

            <p className="text-gray-400 mb-8">
              Fullstack Websites • Mobile Apps • AI Systems • Enterprise Platforms
            </p>

            <div className="space-y-4">

              <InfoCard icon={<FaPhoneAlt />} text="01989678448" />
              <InfoCard icon={<FaEnvelope />} text="nextjs061@gmail.com" />

            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Social icon={<FaGithub />} href="#" />
            <Social icon={<FaFacebook />} href="#" />
            <Social icon={<FaLinkedin />} href="#" />
          </div>

        </motion.div>

        {/* FORM SIDE */}
        <motion.form
          variants={item}
          onSubmit={handlesubmit}
          className="bg-black/30 p-6 rounded-2xl border border-white/10 space-y-4"
        >

          <Input name="name" value={formdata.name} onChange={handlechange} placeholder="Name" />
          <Input name="email" value={formdata.email} onChange={handlechange} placeholder="Email" />
          <Input name="phonenumber" value={formdata.phonenumber} onChange={handlechange} placeholder="Phone" />
          <Input name="subject" value={formdata.subject} onChange={handlechange} placeholder="Subject" />

          <textarea
            name="message"
            value={formdata.message}
            onChange={handlechange}
            placeholder="Your Message..."
            rows="4"
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
          />

          <button
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-white font-bold flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : <>Send Message <FaPaperPlane /></>}
          </button>

        </motion.form>

      </motion.div>
    </div>
  )
}

/* ================= REUSABLE ================= */

function Input({ name, value, onChange, placeholder }) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
    />
  )
}

function InfoCard({ icon, text }) {
  return (
    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="text-pink-400 text-xl">{icon}</div>
      <span className="text-white">{text}</span>
    </div>
  )
}

function Social({ icon, href }) {
  return (
    <a href={href} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-white hover:text-pink-400 transition">
      {icon}
    </a>
  )
}
