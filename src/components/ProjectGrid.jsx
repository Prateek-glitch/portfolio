"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVG to prevent Lucide/Turbopack build errors
const GitHubIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "Mail Guardian",
    image: "/projects/mail-guardian.png",
    description: "An email security dashboard using Google OAuth2 to detect phishing threats and manage secure communications.",
    tags: ["Next.js", "OAuth 2.0", "Security"],
    github: "https://github.com/Prateek-glitch/mail-guardian"
  },
  {
    title: "NutriBridge",
    image: "/projects/nutri-bridge.png",
    description: "A dual-purpose platform for child nutrition tracking and a food donation system to reduce local food waste.",
    tags: ["React", "Node.js", "Flutter"],
    github: "https://github.com/Prateek-glitch/DTL-nutriBridge"
  },
  {
    title: "NoteNest",
    image: "/projects/notenest.png",
    description: "A serverless, cloud-based note-taking PWA supporting audio and drawing notes, built on AWS architecture.",
    tags: ["AWS", "Serverless", "React"],
    github: "https://github.com/Prateek-glitch/demo-cloud-el"
  },
  {
    title: "Jarvis AI (RAG)",
    image: "/projects/jarvis.png",
    description: "A self-hosted Retrieval-Augmented Generation pipeline using Ollama for secure, semantic local search.",
    tags: ["Python", "Ollama", "AI"],
    github: "https://github.com/Prateek-glitch/Diligent_India"
  },
  {
    title: "Saw Arena",
    image: "/projects/saw-arena.png",
    description: "A real-time multiplayer arena game with custom physics, power-ups, and a dynamic health system.",
    tags: ["Socket.io", "React", "GameDev"],
    github: "https://github.com/Prateek-glitch/saw-arena"
  },
  {
    title: "IoT Arduino Lab",
    image: "/projects/arduino.png",
    description: "A collection of embedded systems and IoT projects focusing on sensor data and hardware automation.",
    tags: ["C++", "Arduino", "IoT"],
    github: "https://github.com/Prateek-glitch/some_arduino"
  }
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 pb-24 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col h-full"
    >
      <div className="bg-[#140c0c] rounded-2xl overflow-hidden border border-red-900/10 shadow-2xl flex flex-col h-full transition-all duration-500 group-hover:border-red-600/30">
        
        {/* Large 16:9 Banner */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            onError={(e) => { e.target.src = "https://via.placeholder.com/1200x675/000000/c94b4b?text=Project+Preview"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140c0c] to-transparent opacity-60" />
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-black text-red-500 bg-red-950/20 px-3 py-1 rounded-full border border-red-900/40 uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-red-500 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
            {project.description}
          </p>

          {/* Capsule Button */}
          <div className="mt-auto pt-4 flex justify-center">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative flex items-center justify-center bg-red-600 text-white h-12 rounded-full px-4 overflow-hidden transition-colors hover:bg-red-700 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
              animate={{ width: isHovered ? "140px" : "48px" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center gap-3 whitespace-nowrap">
                <GitHubIcon size={20} />
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="font-black text-xs uppercase tracking-widest"
                    >
                      GitHub
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -inset-1 bg-red-600/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-3xl" />
    </motion.div>
  );
}