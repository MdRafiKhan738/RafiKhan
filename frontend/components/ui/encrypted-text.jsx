"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset) {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

function generateGibberishPreservingSpaces(original, charset) {
  if (!original) return "";
  let result = "";
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result += ch === " " ? " " : generateRandomCharacter(charset);
  }
  return result;
}

export const EncryptedText = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  interval = 9000, // Default 8 seconds delay between loops
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef(null);
  // Removed { once: true } so it keeps tracking visibility
  const isInView = useInView(ref); 

  const [revealCount, setRevealCount] = useState(0);
  const animationFrameRef = useRef(null);
  const timeoutRef = useRef(null); // Ref for the 8s delay timer
  const startTimeRef = useRef(0);
  const lastFlipTimeRef = useRef(0);
  const scrambleCharsRef = useRef(
    text ? generateGibberishPreservingSpaces(text, charset).split("") : []
  );

  useEffect(() => {
    // If not in view, stop everything
    if (!isInView) {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        return;
    }

    // Initialize animation state
    const startAnimation = () => {
        const initial = text
            ? generateGibberishPreservingSpaces(text, charset)
            : "";
        scrambleCharsRef.current = initial.split("");
        startTimeRef.current = performance.now();
        lastFlipTimeRef.current = startTimeRef.current;
        setRevealCount(0);
        
        // Start the loop
        animationFrameRef.current = requestAnimationFrame(update);
    };

    const update = (now) => {
      const elapsedMs = now - startTimeRef.current;
      const totalLength = text.length;
      const currentRevealCount = Math.min(
        totalLength,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs))
      );

      setRevealCount(currentRevealCount);

      // --- ANIMATION FINISHED CHECK ---
      if (currentRevealCount >= totalLength) {
        // Animation is done. Wait 'interval' ms, then restart.
        timeoutRef.current = setTimeout(() => {
            startAnimation(); // Restart the cycle
        }, interval);
        return; 
      }

      // Re-randomize unrevealed scramble characters on an interval
      const timeSinceLastFlip = now - lastFlipTimeRef.current;
      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        for (let index = 0; index < totalLength; index += 1) {
          if (index >= currentRevealCount) {
            if (text[index] !== " ") {
              scrambleCharsRef.current[index] = generateRandomCharacter(charset);
            } else {
              scrambleCharsRef.current[index] = " ";
            }
          }
        }
        lastFlipTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    // Kick off the first animation
    startAnimation();

    // Cleanup on unmount or dependency change
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isInView, text, revealDelayMs, charset, flipDelayMs, interval]);

  if (!text) return null;

  return (
    <motion.span
      ref={ref}
      className={cn(className, "inline-block whitespace-pre")} // whitespace-pre preserves spaces
      aria-label={text}
      role="text"
    >
      {text.split("").map((char, index) => {
        const isRevealed = index < revealCount;
        const displayChar = isRevealed
          ? char
          : char === " "
          ? " "
          : scrambleCharsRef.current[index] ?? generateRandomCharacter(charset);

        return (
          <span
            key={index}
            className={cn(isRevealed ? revealedClassName : encryptedClassName)}
          >
            {displayChar}
          </span>
        );
      })}
    </motion.span>
  );
};