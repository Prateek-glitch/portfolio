"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c94b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c94b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const MapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c94b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default function ConnectSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mwvwjknz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("sent");
        e.target.reset();
        setTimeout(() => setStatus(""), 3000); 
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      // FIXED: Using amount: 0.1 to ensure mobile browsers trigger this visibility
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl w-full mx-auto px-6 py-24 relative z-40 pointer-events-auto"
    >
      <div className="text-center mb-20">
        {/* FIXED HEADING STYLE */}
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">
          Let's <span className="text-[#c94b4b]">Connect</span>
        </h2>
        <p className="text-gray-500 font-medium tracking-widest uppercase text-xs">
          Available for new opportunities and collaborations
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 justify-between">
        
        <div className="flex-1 space-y-12">
          <div>
            {/* Swapped this label to avoid repeating "Let's Connect" */}
            <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Get In Touch</h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I would love to hear from you.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { icon: <MailIcon />, title: "Email", value: "prtksingh.dev@gmail.com" },
              { icon: <PhoneIcon />, title: "Phone", value: "+91 8982909495" },
              { icon: <MapIcon />, title: "Location", value: "Bengaluru, India (Open for Relocation)" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#c94b4b]/5 border border-red-900/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#c94b4b]/40 shadow-[0_0_15px_rgba(201,75,75,0.05)]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-white font-medium group-hover:text-[#c94b4b] transition-colors">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[1.2] bg-black/20 border border-red-900/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative z-50">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="text" name="_gotcha" className="hidden" style={{ display: "none" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Name</label>
                <input type="text" name="name" required placeholder="Your Name" className="w-full bg-black/40 border border-red-900/10 rounded-xl px-6 py-4 text-white outline-none focus:border-[#c94b4b] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Email</label>
                <input type="email" name="email" required placeholder="your.email@example.com" className="w-full bg-black/40 border border-red-900/10 rounded-xl px-6 py-4 text-white outline-none focus:border-[#c94b4b] transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Message</label>
              <textarea name="message" required rows="5" placeholder="Tell me about your project..." className="w-full bg-black/40 border border-red-900/10 rounded-xl px-6 py-4 text-white outline-none focus:border-[#c94b4b] transition-all resize-none"></textarea>
            </div>

            <div className="flex justify-start">
              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-4 border-2 border-[#c94b4b] rounded-full overflow-hidden transition-all duration-500 z-50 cursor-pointer"
              >
                <motion.div
                  variants={{ initial: { y: "100%" }, hover: { y: "0%" } }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0 bg-[#c94b4b] z-0"
                />
                <span className="relative z-10 text-[#c94b4b] group-hover:text-white font-black uppercase tracking-[0.3em] text-[10px] transition-colors duration-500">
                  {status === "sending" ? "Sending..." : status === "sent" ? "Transmission Sent" : status === "error" ? "System Error" : "Send Message"}
                </span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(201,75,75,0.3)] pointer-events-none" />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}