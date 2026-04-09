// src/app/page.js
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import TerminalAbout from '../components/TerminalAbout';
import ContactForm from '../components/ContactForm'; 
// import Footer from '@/components/Footer';
import ConnectSection from '../components/ContactForm';
export default function Home() {
  return (
    <div className="max-w-6xl w-full mx-auto flex flex-col gap-24 pt-12 pb-24">
      <Hero />
      <Timeline />
      <TerminalAbout />
      <ContactForm />
      {/* <Footer /> */}
      {/* <ConnectSection /> */}
    </div>
  );
}