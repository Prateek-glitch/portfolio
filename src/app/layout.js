import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import BackgroundParticles from "@/components/BackgroundParticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 1. Configure Inter with the '900' weight for that heavy Caesar look
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"], 
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Prateek Kumar | Software Engineer",
  description: "Portfolio of Prateek Kumar",
  // 2. Map the favicon files from your public/favicon folder
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  // If you have a site manifest, link it here
  manifest: "/favicon/site.webmanifest", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} bg-[#0a0505] text-gray-100 antialiased selection:bg-[#c94b4b]/30`}>
        
        {/* FIXED BACKGROUND */}
        <BackgroundParticles />
        
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* MAIN CONTENT */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}