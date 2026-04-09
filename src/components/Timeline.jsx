"use client";
import { motion } from "framer-motion";

export default function Timeline() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full py-24 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full px-6 relative">
        
        {/* The Vertical Line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#c94b4b]/50 via-[#c94b4b]/20 to-transparent"></div>

        {/* Node 1: MCA (Left Side) */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          // FIXED: Use 'amount' instead of negative margin for mobile stability
          viewport={{ once: true, amount: 0.2 }}
          className="relative mb-24 md:w-1/2 md:pr-12 md:text-right md:ml-0 ml-12"
        >
          <span className="absolute w-4 h-4 bg-[#c94b4b] rounded-full left-[-31px] md:left-auto md:-right-[10px] top-2 ring-4 ring-[#0a0505] shadow-[0_0_20px_rgba(201,75,75,0.6)] z-10"></span>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-2">
              Master of Computer Applications
            </h3>
            <h4 className="text-lg md:text-xl font-bold text-[#c94b4b] uppercase tracking-[0.2em] mb-4">
              R.V. College of Engineering
            </h4>
            
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-[#c94b4b]/10 text-[#c94b4b] text-[10px] font-black rounded border border-[#c94b4b]/20 uppercase tracking-[0.3em]">
                2024-In Progress
              </span>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
              Currently pursuing a Master of Computer Applications (MCA), specializing in advanced software architecture and secure full-stack ecosystems.
            </p>
          </div>
        </motion.div>

        {/* Node 2: Internship (Right Side) */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          // FIXED: Changed margin: -100px to amount: 0.2
          viewport={{ once: true, amount: 0.2 }}
          className="relative mb-24 md:w-1/2 md:pl-12 md:ml-auto ml-12"
        >
          <span className="absolute w-4 h-4 bg-[#c94b4b]/80 rounded-full left-[-31px] md:-left-[9px] top-2 ring-4 ring-[#0a0505] shadow-[0_0_15px_rgba(201,75,75,0.4)] z-10"></span>
          
          <div className="flex flex-col items-start">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-2">
              AI Intern
            </h3>
            <h4 className="text-lg md:text-xl font-bold text-[#c94b4b] uppercase tracking-[0.2em] mb-4">
              Bhargawa Info Tech Solutions
            </h4>
            
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-[#c94b4b]/5 text-[#c94b4b]/80 text-[10px] font-black rounded border border-[#c94b4b]/20 uppercase tracking-[0.3em]">
                Completed
              </span>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
              Successfully completed a 6-week intensive internship at RVCE, developing a specialized LLM pipeline to analyze and summarize complex financial news.
            </p>
          </div>
        </motion.div>

        {/* Node 3: BCA (Left Side) */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          // FIXED: Changed margin: -100px to amount: 0.2
          viewport={{ once: true, amount: 0.2 }}
          className="relative mb-12 md:w-1/2 md:pr-12 md:text-right md:ml-0 ml-12"
        >
          <span className="absolute w-4 h-4 bg-gray-700 rounded-full left-[-31px] md:left-auto md:-right-[10px] top-2 ring-4 ring-[#0a0505] z-10"></span>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-3xl md:text-5xl font-black text-white/60 uppercase tracking-tighter leading-none mb-2">
              Bachelor of Computer Applications
            </h3>
            <h4 className="text-lg md:text-xl font-bold text-[#c94b4b] uppercase tracking-[0.2em] mb-4">
              BIT Mesra
            </h4>
            
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-gray-900/50 text-gray-500 text-[10px] font-black rounded border border-gray-800 uppercase tracking-[0.3em]">
                2021-2024
              </span>
            </div>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
              Graduated with a Bachelor of Computer Applications (BCA), establishing a strong foundation in data structures, algorithms, and core programming principles.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}