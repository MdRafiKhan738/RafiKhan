// components/Chatbot.js
"use client"; // ensures this runs only on the client

import Script from "next/script";

export default function Chatbot() {
  return (
    <Script
      src="https://support-ai-tau.vercel.app/chatBot.js"
      strategy="afterInteractive" // loads after page is ready
      data-owner-id="usr_111385257491563540"
    />
  );
}
