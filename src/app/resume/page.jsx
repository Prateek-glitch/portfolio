"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumePage() {
  // Your specific Google Drive File ID
  const fileId = "1nZY6ukpfPlUUN2h0XDEP68QnFalm5AQz";
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className="min-h-screen bg-[#0a0505] pt-28 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8 p-6 bg-black/40 backdrop-blur-xl border border-red-900/20 rounded-2xl"
        >
          <div>
            <h1 className="text-2xl font-black text-white uppercase tracking-tighter">
              Resume <span className="text-[#c94b4b]">.pdf</span>
            </h1>
            <p className="text-xs text-gray-500 font-mono tracking-widest mt-1">SYSTEM.VIEWER.PRATEEK</p>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors text-xs uppercase font-bold tracking-widest"
            >
              Back to Home
            </Link>
            <a 
              href={downloadUrl}
              className="bg-[#c94b4b] hover:bg-[#b03d3d] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(201,75,75,0.2)]"
            >
              Download
            </a>
          </div>
        </motion.div>

        {/* PDF Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full h-[85vh] bg-black/20 rounded-3xl border border-red-900/10 overflow-hidden shadow-2xl relative"
        >
          {/* Subtle Glow behind the viewer */}
          <div className="absolute inset-0 bg-[#c94b4b]/5 blur-[100px] pointer-events-none"></div>
          
          <iframe 
            src={previewUrl}
            width="100%" 
            height="100%" 
            className="relative z-10 border-none"
            allow="autoplay"
            title="Prateek Kumar Resume"
          />
        </motion.div>

        {/* Footer Credit */}
        <p className="text-center mt-8 text-gray-600 text-[10px] uppercase tracking-[0.5em] font-bold">
          SECURE DOCUMENT VIEWER V2.0
        </p>
      </div>
    </div>
  );
}