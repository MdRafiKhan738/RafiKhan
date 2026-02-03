'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGithub, 
  FaFacebook, 
  FaLinkedin 
} from 'react-icons/fa'
import { serverurl } from '../page'



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
      await axios.post(`${serverurl}contact/sendmessage`, formdata)
      alert("Message sent successfully 🚀")
      setformdata({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        phonenumber: ''
      })
    } catch (error) {
      alert("Something went wrong ❌")
    } finally {
      setloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-black to-pink-800 flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30"
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-pink-400 mb-4">
            Let’s Build Something Amazing 💖
          </h1>

          <p className="text-gray-300 mb-8">
            Got a project idea, startup, or collaboration in mind?  
            Just tap — real contact, real conversation.
          </p>

          {/* CONTACT ACTIONS */}
          <div className="space-y-4">

            <a
              href="tel:01989678448"
              className="flex items-center gap-4 p-4 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 transition"
            >
              <FaPhoneAlt className="text-pink-400 text-xl" />
              <span className="text-white">01989678448</span>
            </a>

            <a
              href="mailto:nextjs061@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 transition"
            >
              <FaEnvelope className="text-pink-400 text-xl" />
              <span className="text-white">nextjs061@gmail.com</span>
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-6 mt-8">
            <a href="https://github.com/MdRafiKhan738" target="_blank">
              <FaGithub className="text-2xl text-white hover:text-pink-400 transition" />
            </a>
            <a href="https://www.facebook.com/rafi.hossian.71" target="_blank">
              <FaFacebook className="text-2xl text-white hover:text-pink-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/rafi-khan-25649a37b/" target="_blank">
              <FaLinkedin className="text-2xl text-white hover:text-pink-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handlesubmit}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >

          {[
            ['name', 'Your Name'],
            ['email', 'Your Email'],
            ['subject', 'Subject'],
            ['budget', 'Project Budget'],
            ['phonenumber', 'Phone Number']
          ].map(([name, placeholder]) => (
            <input
              key={name}
              name={name}
              value={formdata[name]}
              onChange={handlechange}
              placeholder={placeholder}
              className="w-full p-3 rounded-xl bg-black/40 border border-pink-500/30 text-white outline-none focus:border-pink-500"
            />
          ))}

          <textarea
            name="message"
            value={formdata.message}
            onChange={handlechange}
            placeholder="Tell me about your project..."
            rows="5"
            className="w-full p-3 rounded-xl bg-black/40 border border-pink-500/30 text-white outline-none focus:border-pink-500"
          />

          <button
            disabled={loading}
            className="w-full py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition text-white font-semibold"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </motion.form>

      </motion.div>
    </div>
  )
}