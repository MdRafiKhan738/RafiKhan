"use client"
import React from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Server, 
  UserCheck, 
  Globe, 
  Mail, 
  FileText, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';

 export const PrivacyPolicy = () => {
  // Last Updated Date
  const lastUpdated = "February 5, 2026";

  const sections = [
    {
      title: "Introduction",
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      content: (
        <div className="space-y-4 ">
          <p>
            Your privacy is important. This policy explains how I collect, use, and protect your information.
          </p>
          <div className="pl-4 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-r-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Commitment</h4>
            <p>
              I, Rafi Khan ("I", "me", "my"), am committed to protecting your privacy and ensuring transparency in how your data is handled. This Privacy Policy applies to all visitors and users of parthh.in and its subdomains.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mt-4">Scope of Policy</h4>
            <p>
              This Privacy Policy covers all data collected through the website, including: authentication data from the Guestbook feature, user-generated content (messages), and anonymous analytics data. This policy does not apply to third-party websites linked from this site.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mt-4">Minimal Data Philosophy</h4>
            <p>
              I believe in collecting only the minimum data necessary for functionality. I do not sell, trade, or rent your personal information to third parties. Your data is used solely to provide and improve the website experience.
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            This policy may be updated periodically. Continued use of the site constitutes acceptance of any changes.
          </p>
        </div>
      )
    },
    {
      title: "Data We Collect",
      icon: <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      content: (
        <div className="space-y-4">
          <p className="font-medium text-gray-700 dark:text-gray-300">Transparency about exactly what information is collected and how.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-gray-900 dark:text-white">Authentication Data:</strong> When you sign in via GitHub or Google OAuth, I receive ONLY your display name and profile picture. Your email is used solely for ID and never shared.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Guestbook Messages:</strong> Your display name, avatar, and message content with timestamp are stored and publicly visible.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Automatic Data:</strong> IP addresses (anonymized), browser type, and timestamps are logged for security and debugging.
            </li>
          </ul>
          <div className="flex items-start gap-3 mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-300">No Sensitive Data</h4>
              <p className="text-sm text-green-700 dark:text-green-400">
                I do NOT collect passwords, payment info, precise location, contacts, or health information.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How Data Is Used",
      icon: <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      content: (
        <div className="space-y-3">
          <p>Specific purposes for which collected data is processed:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Guestbook Functionality</h4>
              <p className="text-sm">Displaying your name/avatar alongside messages to identify you.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Account Management</h4>
              <p className="text-sm">Allowing you to edit/delete messages. Moderation of content.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Analytics & Improvement</h4>
              <p className="text-sm">Understanding popular pages and performance via anonymous data.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Communication</h4>
              <p className="text-sm">Only for critical security notifications or if you reach out first.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Analytics & Tracking",
      icon: <Eye className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      content: (
        <div className="space-y-4">
          <p>
            <strong className="text-gray-900 dark:text-white">Vercel Analytics:</strong> Measures performance (load times, Core Web Vitals). Data is fully aggregated with no personal identifiers.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Cookie Use:</strong> strictly for authentication sessions, theme preferences, and basic analytics. No advertising cookies.
          </p>
          <div className="p-4 border border-teal-200 dark:border-teal-800 rounded-lg">
            <h4 className="font-semibold text-teal-900 dark:text-teal-300 mb-1">No Invasive Tracking</h4>
            <p className="text-teal-800 dark:text-teal-400 text-sm">
              I do NOT use session recordings, heatmaps, or keystroke logging. You can opt-out of analytics using tools like uBlock Origin.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Third-Party Services",
      icon: <Server className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      content: (
        <ul className="space-y-4">
          <li className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <span>
              <strong className="text-gray-900 dark:text-white block">GitHub & Google OAuth</strong>
              <span className="text-sm">Used for authentication. Shares only public profile info.</span>
            </span>
            <a href="https://docs.github.com/privacy" className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-2 sm:mt-0">Privacy Policy &rarr;</a>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <span>
              <strong className="text-gray-900 dark:text-white block">Appwrite (Backend)</strong>
              <span className="text-sm">Secure database with encryption and role-based access.</span>
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <span>
              <strong className="text-gray-900 dark:text-white block">Vercel (Hosting)</strong>
              <span className="text-sm">Logs standard HTTP requests for security.</span>
            </span>
            <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-2 sm:mt-0">Privacy Policy &rarr;</a>
          </li>
        </ul>
      )
    },
    {
      title: "Your Rights & Control",
      icon: <UserCheck className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
      content: (
        <div className="space-y-4">
          <p className="font-medium">Full control over your data:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <h5 className="font-bold text-gray-900 dark:text-white">Delete Messages</h5>
              <p className="text-sm mt-1">Directly from the website instantly.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <h5 className="font-bold text-gray-900 dark:text-white">Account Deletion</h5>
              <p className="text-sm mt-1">Contact me to wipe all data within 30 days.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <h5 className="font-bold text-gray-900 dark:text-white">Data Access</h5>
              <p className="text-sm mt-1">Request a portable copy of your data.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <h5 className="font-bold text-gray-900 dark:text-white">Correction</h5>
              <p className="text-sm mt-1">Update profile directly or contact support.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Data Security",
      icon: <Lock className="w-6 h-6 text-red-600 dark:text-red-400" />,
      content: (
        <div className="space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Encryption:</strong> HTTPS/TLS for transmission. Encrypted databases at rest.</li>
            <li><strong>Access Control:</strong> Only the site owner has admin access.</li>
            <li><strong>OAuth Security:</strong> Passwords are never stored on this site.</li>
          </ul>
          <div className="flex items-center gap-3 mt-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded-lg text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>While reasonable measures are taken, no internet transmission is 100% secure.</p>
          </div>
        </div>
      )
    },
    {
      title: "Children & GDPR",
      icon: <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      content: (
        <div className="space-y-3">
          <p>
            <strong className="text-gray-900 dark:text-white">Age Requirement:</strong> You must be at least 13 years old to use the Guestbook.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">GDPR Compliance:</strong> EEA users have rights to access, rectification, erasure, and portability.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Retention:</strong> Messages are kept indefinitely unless deleted. Analytics retained for 12 months.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto mt-20">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I believe in transparency and collecting only the minimum data necessary to provide a great experience.
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Last Updated: {lastUpdated}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center p-8 bg-blue-600 dark:bg-blue-700 rounded-3xl text-white">
          <h2 className="text-2xl font-bold mb-4">Have questions about this policy?</h2>
          <p className="mb-6 opacity-90 text-lg">
            I aim to respond to all privacy requests within 30 days.
          </p>
          <a 
            href="mailto:nextjs061@gmail.com" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            nextjs061@gmail.com
          </a>
          <p className="mt-4 text-sm opacity-75">
            Alternative: nextjs061@gmail.com
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 dark:text-gray-500 text-sm mb-[-10]">
          &copy; {new Date().getFullYear()} Rafi Khan. All rights reserved.
        </footer>

      </div>
    </div>
  );
}

export default PrivacyPolicy