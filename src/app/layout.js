import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import BackgroundParticles from "@/components/BackgroundParticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- MERGED METADATA CONFIGURATION (Only one export allowed!) ---
export const metadata = {
  title: "Prateek Kumar | Software Engineer & Cybersecurity Enthusiast",
  description: "Portfolio of Prateek Kumar, an MCA student at RVCE specializing in Full-Stack Development and Cybersecurity.",
  keywords: ["Prateek Kumar", "Software Engineer", "Full Stack Developer", "Cybersecurity", "RVCE", "R.V. College of Engineering", "MCA", "Portfolio"],
  
  // Google Search Console Verification
  verification: {
    google: "7_CxPOB0O1OhKjjJQ0twY1HfghtlHzVBsa10JDGqmHU",
  },

  // Social Media / OpenGraph Preview
  openGraph: {
    title: "Prateek Kumar | Software Engineer | Frontend | Full Stack Developer",
    description: "Building robust applications and secure systems.",
    url: "https://prateek-portfolio-kappa.vercel.app/",
    siteName: "Prateek Kumar Portfolio",
    images: [
      {
        url: "/p.jpeg", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Favicon and App Icons Configuration
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
  manifest: "/favicon/site.webmanifest", 
};

// --- FONT INITIALIZATION ---
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"], 
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// --- ROOT LAYOUT COMPONENT ---
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
