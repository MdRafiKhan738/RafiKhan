"use client"
import React, { useState, useEffect } from "react"

const PrivacyPolicy = () => {
  const [dark, setDark] = useState(true)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Handle Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const percent = (scrolled / height) * 100
      setProgress(percent)
    }
    window.addEventListener("scroll", handleScroll)
    
    // Set mounted to true to avoid hydration mismatch on date
    setMounted(true)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // The "Super Cool" Glassmorphism Card Style
  const sectionStyle =
    "backdrop-blur-xl bg-white/5 dark:bg-black/30 border border-black/5 dark:border-white/10 rounded-2xl p-6 md:p-10 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-purple-500/30"

  return (
    <div
      className={`${
        dark ? "dark bg-[#0a0a0a] text-white" : "bg-gray-50 text-black"
      } min-h-screen transition-colors duration-500 ease-in-out font-sans`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-100 ease-out"
        style={{ width: ${progress}% }}
      />

      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-5 pt-20 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Privacy Policy
            </h1>
            <p className="mt-2 opacity-70 text-sm md:text-base">
              Last updated: {mounted ? new Date().toDateString() : "Loading..."}
            </p>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-95"
          >
            <span className="text-xl transition-transform group-hover:rotate-12">
              {dark ? "☀️" : "🌙"}
            </span>
            <span className="font-medium text-sm">
              {dark ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-5 pb-24 space-y-8">
        
        {/* Section 1 */}
        <div className={sectionStyle}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            1. Information We Collect
          </h2>
          <p className="opacity-80 leading-relaxed text-lg">
            We collect personal information such as your name, email address,
            phone number, and usage data to provide and improve our services.
            This includes device information, IP address, and browsing activity
            to enhance security and performance.
          </p>
        </div>

        {/* Section 2 */}
        <div className={sectionStyle}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">
            2. How We Use Your Information
          </h2>
          <p className="opacity-80 leading-relaxed text-lg">
            Your information is used to operate our platform, improve user
            experience, process transactions, detect fraud, and ensure system
            security. We may also use data to personalize content and send
            important updates.
          </p>
        </div>

        {/* Section 3 */}
        <div className={sectionStyle}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            3. Data Protection & Security
          </h2>
          <p className="opacity-80 leading-relaxed text-lg">
            We use advanced encryption, secure servers, and fraud detection
            systems to protect your data. Access is strictly controlled and
            monitored to prevent unauthorized usage.
          </p>
        </div>

        {/* Section 4 */}
        <div className={sectionStyle}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            4. Cookies & Tracking
          </h2>
          <p className="opacity-80 leading-relaxed text-lg">
            We use cookies to enhance user experience, analyze traffic, and
            personalize content. You can disable cookies through your browser
            settings, but some features may not function properly.
          </p>
        </div>

        {/* Section 5 */}
        <div className={sectionStyle}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">
            5. Third-Party Services
          </h2>
          <p className="opacity-80 leading-relaxed text-lg">
            We may use trusted third-party services such as payment gateways,
            analytics tools, and cloud hosting providers. These partners follow
            strict security and privacy standards.
          </p>
        </div>

        {/* Section 6 */}
        <div className={sectionStyle}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            6. Your Rights
          </h2>
          <p className="opacity-80 leading-relaxed text-lg">
            You have the right to access, update, or delete your personal data.
            You may contact us anytime to request data removal or clarification
            about how your information is handled.
          </p>
        </div>

        {/* Section 7 */}
        <div className={sectionStyle}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            7. Changes To This Policy
          </h2>
          <p className="opacity-80 leading-relaxed text-lg">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </div>

        {/* Section 8 */}
        <div className={sectionStyle}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">
            8. Contact Us
          </h2>
          <p className="opacity-80 leading-relaxed text-lg">
            If you have any questions regarding this Privacy Policy, you may
            contact our support team anytime for assistance.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-black/5 dark:border-white/10 mt-10">
        <div className="max-w-5xl mx-auto px-5 py-10 text-center opacity-60 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </div>
  )
}
