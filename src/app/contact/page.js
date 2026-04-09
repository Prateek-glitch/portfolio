"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Official SVGs matched to your theme
const GitHubIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedInIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Capture form data directly from the event target
    const formData = new FormData(e.target);

    try {
      // Send POST request to your specific Formspree endpoint
      const response = await fetch("https://formspree.io/f/mwvwjknz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json' // Crucial: prevents Formspree from redirecting to a "Thank You" page
        }
      });

      if (response.ok) {
        setStatus("sent");
        e.target.reset(); // Clear the form after success
        setTimeout(() => setStatus(""), 3000); 
      } else {
        const data = await response.json();
        console.error("Formspree Error:", data);
        setStatus("error");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const contactLinks = [
    {
      title: "SECURE_MAIL",
      value: "prtksingh.dev@gmail.com",
      link: "mailto:prtksingh.dev@gmail.com", 
      icon: <MailIcon />,
      delay: 0.1
    },
    {
      title: "GITHUB_REPO",
      value: "github.com/Prateek-glitch",
      link: "https://github.com/Prateek-glitch",
      icon: <GitHubIcon />,
      delay: 0.2
    },
    {
      title: "PROFESSIONAL_NET",
      value: "linkedin.com/in/prateek-kumar",
      link: "https://www.linkedin.com/in/prateek-kumar-765aa8316/",
      icon: <LinkedInIcon />,
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto w-full flex flex-col items-center">
      
      {/* Page Header */}
      <div className="text-center mb-20 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#c94b4b]/10 border border-[#c94b4b]/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#c94b4b] animate-pulse"></span>
          <span className="text-[10px] font-black text-[#c94b4b] uppercase tracking-[0.3em]">System.Comms.Active</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4"
        >
          Initiate <span className="text-[#c94b4b]">Contact</span>
        </motion.h1>
      </div>

      {/* 3 Link Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
        {contactLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay, duration: 0.5 }}
            className="group relative flex flex-col items-center justify-center p-8 bg-black/40 border border-red-900/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#c94b4b]/50 hover:bg-[#c94b4b]/5"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#c94b4b]/0 to-[#c94b4b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-gray-500 group-hover:text-[#c94b4b] transition-colors duration-500 mb-6 relative z-10 group-hover:-translate-y-2 transform">
              {item.icon}
            </div>
            <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-2 relative z-10">
              {item.title}
            </h3>
            <p className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors relative z-10 text-center">
              {item.value}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Direct Transmission Form */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-3xl bg-black/20 border border-red-900/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
      >
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">Direct Transmission</h2>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Encrypting payload...</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Formspree Honeypot Spam Protection (Hidden from users) */}
          <input type="text" name="_gotcha" className="hidden" style={{ display: "none" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2 group">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2 group-focus-within:text-[#c94b4b] transition-colors">Name / Alias</label>
              <input type="text" name="name" required placeholder="GUEST_USER" className="w-full bg-black/40 border border-red-900/10 rounded-xl px-6 py-4 text-white font-mono text-sm outline-none focus:border-[#c94b4b] focus:ring-1 focus:ring-[#c94b4b]/20 transition-all placeholder:text-gray-800" />
            </div>
            <div className="space-y-2 group">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2 group-focus-within:text-[#c94b4b] transition-colors">Return Address</label>
              <input type="email" name="email" required placeholder="USER@DOMAIN.COM" className="w-full bg-black/40 border border-red-900/10 rounded-xl px-6 py-4 text-white font-mono text-sm outline-none focus:border-[#c94b4b] focus:ring-1 focus:ring-[#c94b4b]/20 transition-all placeholder:text-gray-800" />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2 group-focus-within:text-[#c94b4b] transition-colors">Message Payload</label>
            <textarea name="message" required rows="5" placeholder="ENTER_TRANSMISSION_DATA..." className="w-full bg-black/40 border border-red-900/10 rounded-xl px-6 py-4 text-white font-mono text-sm outline-none focus:border-[#c94b4b] focus:ring-1 focus:ring-[#c94b4b]/20 transition-all placeholder:text-gray-800 resize-none"></textarea>
          </div>

          {/* The Animated Submit Button */}
          <div className="flex justify-center pt-4">
            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="group relative px-16 py-5 border-2 border-[#c94b4b] rounded-full overflow-hidden transition-all duration-500"
            >
              <motion.div
                variants={{ initial: { y: "100%" }, hover: { y: "0%" } }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 bg-[#c94b4b] z-0"
              />
              <span className="relative z-10 text-[#c94b4b] group-hover:text-white font-black uppercase tracking-[0.4em] text-[10px] transition-colors duration-500">
                {status === "sending" ? "Encrypting..." : status === "sent" ? "Transmission Sent" : status === "error" ? "System Error" : "Initialize Send"}
              </span>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(201,75,75,0.4)] pointer-events-none" />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}