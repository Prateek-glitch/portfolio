"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CertificateGrid() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.NEXT_PUBLIC_DRIVE_KEY; 
  const FOLDER_ID = process.env.NEXT_PUBLIC_DRIVE_FOLDER_ID;

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&fields=files(id,name,webViewLink)&key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setCertificates(data.files || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setLoading(false);
      }
    };
    fetchCertificates();
  }, [API_KEY, FOLDER_ID]);

  if (loading) return (
    <div className="flex justify-center py-20">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    /* Changed to max 2 columns for a "wider" look */
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {certificates.map((cert, index) => (
        <motion.div 
          key={cert.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="group relative"
        >
          {/* Main Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border-[10px] border-white">
            
            {/* The Image Container - Aspect ratio set for wide certificates */}
            <div className="relative w-full aspect-[16/10] bg-gray-50 overflow-hidden">
              <img 
                src={`https://drive.google.com/thumbnail?id=${cert.id}&sz=w1200`} 
                alt={cert.name}
                referrerPolicy="no-referrer" 
                className="w-full h-full object-contain md:object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content Section */}
            <div className="p-8 bg-white text-center flex flex-col items-center border-t border-gray-100">
              <p className="text-[10px] font-black text-red-600 tracking-[0.4em] uppercase mb-3">
                Official Credential
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight uppercase">
                {cert.name.split('.')[0].replace(/_/g, ' ')}
              </h3>

              <div className="w-12 h-1 bg-red-600 rounded-full mb-8 group-hover:w-32 transition-all duration-500" />

              <a 
                href={cert.webViewLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gray-900 text-white py-4 text-xs font-black tracking-widest hover:bg-red-600 transition-colors uppercase rounded-xl"
              >
                Verify Certificate
              </a>
            </div>
          </div>

          {/* Red Glow behind card */}
          <div className="absolute -inset-2 bg-red-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-3xl" />
        </motion.div>
      ))}
    </div>
  );
}