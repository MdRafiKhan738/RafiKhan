'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'


import rafilogo from "../../public/Rafilogo.jpg"
import { serverurl } from '../page'

const theme = {
  primary: '#152C21',
  soft: 'rgba(21,44,33,0.08)',
  glass: 'rgba(255,255,255,0.12)'
}

const Signup = () => {
  const [step, setstep] = useState('send-otp')
  const [loading, setloading] = useState(false)

  const [form, setform] = useState({
    fullname: '',
    email: '',
    password: '',
    otp: '',
    gender: '',
    mobile: '',
    address: '',
    country: ''
  })

  const onchange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const sendotp = async () => {
    try {
      setloading(true)
      const { data } = await axios.post(`${serverurl}/user/signup`, {
        step: 'send-otp',
        fullname: form.fullname,
        email: form.email,
        password: form.password
      })
      toast.success(data.message || 'OTP sent')
      setstep('verify-otp')
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Failed to send OTP')
    } finally {
      setloading(false)
    }
  }

  const verifyotp = async () => {
    try {
      setloading(true)
      const { data } = await axios.post(`${serverurl}/user/signup`, {
        step: 'verify-otp',
        email: form.email,
        otp: form.otp
      })
      toast.success(data.message || 'OTP verified')
      setstep('complete-profile')
    } catch (error) {
      toast.error(error?.response?.data?.message || 'OTP verification failed')
    } finally {
      setloading(false)
    }
  }

  const completeprofile = async () => {
    try {
      setloading(true)
      const { data } = await axios.post(`${serverurl}/user/signup`, {
        step: 'complete-profile',
        email: form.email,
        gender: form.gender,
        mobile: form.mobile,
        address: form.address,
        country: form.country
      }, { withCredentials: true })

      toast.success(data.message || 'Signup completed')
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Signup failed')
    } finally {
      setloading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: theme.soft }}>
      <Toaster position="top-right" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-3xl p-8 backdrop-blur-xl"
        style={{ background: theme.glass, boxShadow: `0 30px 80px ${theme.soft}` }}
      >
        <div className="flex flex-col items-center mb-8">
          <Image src={rafilogo} alt="Rafi Logo" width={80} height={80} className="rounded-2xl" />
          <h1 className="mt-4 text-2xl font-semibold" style={{ color: theme.primary }}>Create your account</h1>
          <p className="text-sm opacity-70">Secure • OTP Verified • Professional</p>
        </div>

        <AnimatePresence mode="wait">
          {step === 'send-otp' && (
            <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <input name="fullname" placeholder="Full name" onChange={onchange} className="w-full px-4 py-3 rounded-xl outline-none" />
              <input name="email" placeholder="Email address" onChange={onchange} className="w-full px-4 py-3 rounded-xl outline-none" />
              <input name="password" type="password" placeholder="Password" onChange={onchange} className="w-full px-4 py-3 rounded-xl outline-none" />

              <button disabled={loading} onClick={sendotp} className="w-full py-3 rounded-xl text-white font-medium cursor-pointer" style={{ background: theme.primary }}>
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </motion.div>
          )}

          {step === 'verify-otp' && (
            <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <input name="otp" placeholder="Enter OTP" onChange={onchange} className="w-full px-4 py-3 rounded-xl outline-none" />
              <button disabled={loading} onClick={verifyotp} className="w-full py-3 rounded-xl text-white font-medium cursor-pointer" style={{ background: theme.primary }}>
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </motion.div>
          )}

          {step === 'complete-profile' && (
            <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <select name="gender" onChange={onchange} className="w-full px-4 py-3 rounded-xl outline-none">
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input name="mobile" placeholder="Mobile number" onChange={onchange} className="w-full px-4 py-3 rounded-xl outline-none" />
              <input name="address" placeholder="Address" onChange={onchange} className="w-full px-4 py-3 rounded-xl outline-none" />
              <input name="country" placeholder="Country" onChange={onchange} className="w-full px-4 py-3 rounded-xl outline-none" />

              <button disabled={loading} onClick={completeprofile} className="w-full py-3 rounded-xl text-white font-medium cursor-pointer" style={{ background: theme.primary }}>
                {loading ? 'Creating account...' : 'Complete Signup'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Signup