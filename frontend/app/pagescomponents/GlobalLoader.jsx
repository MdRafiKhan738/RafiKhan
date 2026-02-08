"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// Ensure the path matches where you saved the GIF
import globalloader from "../../public/Redirecting.gif"; 

const GlobalLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 2.5 seconds) for that "cool" splash screen effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // If loading is finished, we return null to remove it from the DOM
  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#fcd400] transition-opacity duration-700 ease-in-out ${
        loading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-80 h-auto">
        {/* 'unoptimized' is crucial for GIFs to animate correctly in Next.js */}
        <Image 
          src={globalloader} 
          alt="Loading..." 
          unoptimized 
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default GlobalLoader;