"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    /* We removed the min-h-screen and BackgroundParticles here 
       to let the RootLayout handle the global styling.
    */
    <div className="flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[25vw] font-black text-[#c94b4b]">LOST</h1>
      </div>

      <div className="relative z-10 text-center space-y-10">
        {/* Error Code */}
        <div className="relative inline-block">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-9xl md:text-[12rem] font-black text-[#c94b4b] tracking-tighter leading-none"
          >
            404
          </motion.h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#c94b4b]/20 blur-sm" />
        </div>

        {/* Diagnostic Log */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto bg-black/40 border border-red-900/10 p-8 rounded-2xl font-mono text-left backdrop-blur-md shadow-2xl"
        >
          <div className="flex gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c94b4b] animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-red-900/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-red-900/20" />
          </div>
          <div className="space-y-2 text-[11px] md:text-xs uppercase tracking-[0.2em]">
            <p className="text-[#c94b4b]/60">
              {">"} status: <span className="text-white">access_denied</span>
            </p>
            <p className="text-[#c94b4b]/60">
              {">"} trace: <span className="text-white">endpoint_not_found</span>
            </p>
            <p className="text-[#c94b4b]/60">
              {">"} logs: <span className="text-white italic">unauthorized entry detected in empty sector.</span>
            </p>
          </div>
        </motion.div>

        {/* The Action Button */}
        <div className="pt-4">
          <Link href="/">
            <motion.button
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="group relative px-14 py-5 border-2 border-[#c94b4b] rounded-full overflow-hidden transition-all duration-500"
            >
              {/* Fill Animation */}
              <motion.div
                variants={{
                  initial: { y: "100%" },
                  hover: { y: "0%" }
                }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 bg-[#c94b4b] z-0"
              />

              <span className="relative z-10 text-[#c94b4b] group-hover:text-white font-black uppercase tracking-[0.4em] text-[10px] transition-colors duration-500">
                Return to Mainframe
              </span>

              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(201,75,75,0.4)] pointer-events-none" />
            </motion.button>
          </Link>
        </div>
      </div>
      
      {/* Subtle CRT Flicker Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] z-50 bg-[length:100%_4px,3px_100%] opacity-20" />
    </div>
  );
}