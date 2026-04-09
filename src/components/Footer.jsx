"use client";
import { motion } from "framer-motion";

// Reusing your custom SVGs for consistency
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// Minimal Dragon Logo placeholder (as requested previously)
const DragonLogo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c94b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100 transition-opacity">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0505] border-t border-red-900/10 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <DragonLogo />
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
                Prateek <span className="text-[#c94b4b]">Kumar</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Software engineer specializing in secure full-stack architecture and vulnerability management. Building the next generation of resilient digital ecosystems.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-[#c94b4b] uppercase tracking-[0.3em]">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Portfolio', 'Certificates', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-[#c94b4b] uppercase tracking-[0.3em]">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: <GitHubIcon />, link: "https://github.com/Prateek-glitch" },
                { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/prateek-kumar-765aa8316/" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{ y: -3, color: '#c94b4b' }}
                  className="text-gray-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-gray-600">
              Encrypted transmission enabled.
            </p>
          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="pt-8 border-t border-red-900/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">
            © {currentYear} Prateek Kumar • All Rights Reserved
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-gray-800 uppercase tracking-tighter">SECURE_PORT: 443</span>
            <span className="text-[10px] text-gray-800 uppercase tracking-tighter">LATENCY: 24MS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}