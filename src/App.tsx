import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Testimonials } from './components/sections/Testimonials';
import { Process } from './components/sections/Process';
import { Audit } from './components/sections/Audit';
import { Contact } from './components/sections/Contact';
import { WhatsAppButton } from './components/ui/WhatsAppButton';



function App() {
  useEffect(() => {
    // Provide anchor link smooth scrolling support manually for anchor tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', () => {
        const id = anchor.getAttribute('href');
        if (id) {
            const target = document.querySelector(id) as HTMLElement;
            if (target) {
                // lenis handles scroll. 
                // Alternatively, we use native behavior smoothed by lenis root:
                // e.preventDefault();
                // window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
            }
        }
      });
    });
  }, []);

  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen bg-background text-gray-100 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <Process />
          <Audit />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ReactLenis>
  );
}

export default App;
