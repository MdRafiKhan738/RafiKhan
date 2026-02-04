"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  MessageSquareQuote,

} from "lucide-react";
import { FaDollarSign } from "react-icons/fa";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Nav = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home, color: "#22c55e" },
    { name: "About", href: "/about", icon: User, color: "#38bdf8" },
    { name: "Service", href: "/services", icon: Briefcase, color: "#b60fb6ff" },
    { name: "Projects", href: "/projects", icon: FolderGit2, color: "#8b5cf6" },
    { name: "Contact", href: "/contact", icon: Mail, color: "#ec4899" },
    { name: "Reviews", href: "/testimonials", icon: MessageSquareQuote, color: "#f86024ff" },
    
  ];

  const activeItem = navItems.find(item => item.href === pathname);

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
      <nav className="relative flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl">

        {/* ✅ SINGLE SHARED ACTIVE PILL */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              key={pathname}
              className="absolute inset-1 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                backgroundColor: `${activeItem.color}20`,
                border: `1px solid ${activeItem.color}40`
              }}
            />
          )}
        </AnimatePresence>

        {navItems.map(item => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative z-10 flex flex-col items-center justify-center px-4 py-2 sm:px-6 sm:py-3 group"
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.2 : 1,
                  y: isActive ? -2 : 0
                }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
              >
                <Icon
                  size={22}
                  className={cn(
                    "transition-all duration-300",
                    isActive
                      ? "drop-shadow-[0_0_10px_var(--glow)]"
                      : "text-white/40 group-hover:text-white/80"
                  )}
                  style={{
                    color: isActive ? item.color : undefined,
                    "--glow": item.color
                  }}
                />
              </motion.div>

              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="text-[10px] font-bold tracking-widest uppercase mt-1"
                    style={{ color: item.color }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
