"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

// Create a motion-enabled Link component for internal navigation
const MotionLink = motion(Link);

// Custom SVGs for stability
const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const LeetCodeIcon = () => (
  <img 
    src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" 
    alt="LeetCode" 
    className="w-8 h-8 object-contain" 
  />
);

const GFGIcon = () => (
  <img 
    src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" 
    alt="GeeksforGeeks" 
    className="w-8 h-8 object-contain" 
  />
);

export default function Hero() {
  const socials = [
    { icon: <GitHubIcon />, link: "https://github.com/Prateek-glitch" },
    { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/prateek-kumar-765aa8316/" },
    { icon: <LeetCodeIcon />, link: "https://leetcode.com/u/gVoxJ8HaKU/" },
    { icon: <GFGIcon />, link: "https://www.geeksforgeeks.org/profile/prtksibxvi" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 max-w-6xl mx-auto w-full px-6"
    >
      {/* Left Column: Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-gray-400 text-xl mb-4 tracking-tight">
          Hello, I am <span className="text-[#c94b4b] font-bold underline decoration-[#c94b4b]/30 underline-offset-8">Prateek</span>
        </h2>
        
        <h1 className="text-7xl md:text-9xl font-black text-[#c94b4b] tracking-tighter leading-[0.85] mb-8 uppercase">
          Software<br/>Engineer
        </h1>
        
        <p className="text-gray-400 mb-10 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
          I build robust full-stack applications, combining clean frontend architecture with secure backend logic and vulnerability management.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* FIXED: Using MotionLink instead of motion.a and removed 'download' */}
          <MotionLink 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume" 
            className="inline-block bg-[#c94b4b] hover:bg-[#b03d3d] text-white font-black py-4 px-10 rounded-lg transition-all shadow-[0_0_25px_rgba(201,75,75,0.4)] uppercase tracking-[0.2em] text-xs"
          >
            View CV
          </MotionLink>

          {/* Social Icons */}
          <div className="flex gap-5">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  y: -5, 
                  borderColor: "#c94b4b", 
                  color: "#c94b4b",
                  backgroundColor: "rgba(201,75,75,0.08)"
                }}
                className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 transition-all duration-300 bg-black/40 shadow-sm overflow-hidden group"
              >
                <div className="flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Portrait Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative group"
      >
        <div className="w-64 h-80 md:w-72 md:h-96 bg-black rounded-2xl border border-[#c94b4b]/20 shadow-[0_0_60px_rgba(201,75,75,0.1)] overflow-hidden flex items-center justify-center relative transition-all duration-500 group-hover:border-[#c94b4b]/40">
          <img 
            src="/potrait.jpeg" 
            alt="Prateek Kumar" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] via-transparent to-transparent opacity-60"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c94b4b]/5 blur-[80px] pointer-events-none"></div>
        </div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#c94b4b]/20 -z-10 group-hover:border-[#c94b4b]/40 transition-colors duration-500"></div>
      </motion.div>
    </motion.section>
  );
}