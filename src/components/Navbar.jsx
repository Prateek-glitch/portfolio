"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "CERTIFICATES", path: "/certificates" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full py-8 flex justify-center z-50 bg-transparent backdrop-blur-sm">
      <nav className="flex gap-10 text-[10px] md:text-xs font-black tracking-[0.3em]">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.path}
            className={`relative pb-2 uppercase transition-colors duration-300 group ${
              pathname === link.path 
                ? "text-white" 
                : "text-gray-500 hover:text-white"
            }`}
          >
            {link.name}

            {/* The Animated Underline */}
            <span 
              className={`absolute bottom-0 left-1/2 h-[2px] bg-[#c94b4b] transition-all duration-300 ease-out -translate-x-1/2 
                ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}
              `} 
            />
            
            {/* Subtle Glow (Optional: Adds that 'Cyber' feel) */}
            <span 
              className={`absolute bottom-0 left-1/2 h-[2px] bg-[#c94b4b] blur-[4px] transition-all duration-300 ease-out -translate-x-1/2 opacity-0 group-hover:opacity-50
                ${pathname === link.path ? "w-full opacity-30" : "w-0 group-hover:w-full"}
              `} 
            />
          </Link>
        ))}
      </nav>
    </header>
  );
}