"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function TerminalAbout() {
  const containerRef = useRef(null);
  
  // FIXED: Changed margin to 0px and added amount: 0.1
  // This tells the phone: "As soon as the user sees the top 10% of this box, start the animation."
  const isInView = useInView(containerRef, { 
    once: true, 
    amount: 0.1,
    margin: "0px" 
  });
  
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowContent(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const commandText = "cat profile.md";

  return (
    <motion.div 
      ref={containerRef}
      // FIXED: Ensure opacity 1 is the default if isInView is acting up, 
      // but for now, we'll keep the logic and just make the trigger easier to hit.
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl w-full mx-auto shadow-2xl rounded-xl overflow-hidden border border-red-950/30 font-mono mb-24 bg-black/40 backdrop-blur-md relative z-20"
    >
      {/* Terminal Header */}
      <div className="bg-[#1a0505] px-4 py-3 flex items-center gap-2 border-b border-red-950/30">
        <div className="w-3 h-3 rounded-full bg-[#c94b4b]/80 shadow-[0_0_8px_rgba(201,75,75,0.4)]"></div>
        <div className="w-3 h-3 rounded-full bg-red-900/40"></div>
        <div className="w-3 h-3 rounded-full bg-red-900/40"></div>
        <span className="ml-4 text-[#c94b4b]/40 text-[10px] uppercase tracking-[0.2em]">system.terminal.prateek</span>
      </div>

      {/* Terminal Body */}
      <div className="p-8 text-gray-300 text-sm md:text-base leading-relaxed min-h-[300px]">
        
        <div className="mb-6 flex items-center flex-wrap">
          <span className="text-[#c94b4b]">prateek@dev</span>
          <span className="text-white">:</span>
          <span className="text-red-900">~</span>
          <span className="text-gray-100 mr-2">$</span>
          
          {isInView && (
            <span className="flex">
              {commandText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: index * 0.08 }}
                  className="whitespace-pre"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          )}

          {!showContent && (
            <span className="w-2 h-5 bg-[#c94b4b] animate-pulse ml-1 inline-block align-middle"></span>
          )}
        </div>

        {showContent && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 }
              }
            }}
          >
            <motion.p variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="text-white font-black mb-6 tracking-tight uppercase text-lg">
              Software Engineer & Cybersecurity Enthusiast
            </motion.p>
            
            <motion.p variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="mb-6 text-gray-400">
              I specialize in building secure, full-stack ecosystems. My current mission involves bridging 
              <span className="text-[#c94b4b] font-bold"> robust development</span> with 
              <span className="text-[#c94b4b] font-bold"> defensive security</span>.
            </motion.p>

            <motion.p variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="mb-6">
              Expertise: <span className="text-[#c94b4b]/80">React, Node.js, Java (DSA), NIST Framework, and Threat Mitigation.</span>
            </motion.p>
            
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-10 flex items-center gap-2">
              <span className="text-[#c94b4b]">prateek@dev</span>
              <span className="text-white">:</span>
              <span className="text-red-900">~</span>
              <span className="text-gray-100">$</span> 
              <span className="w-2 h-5 bg-[#c94b4b] animate-pulse block"></span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}