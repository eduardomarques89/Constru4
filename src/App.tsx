import React from 'react';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Partners } from './components/Partners';
import { News } from './components/News';
import { LeadCapture } from './components/LeadCapture';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Achievements />
      <About />
      <Projects />
      <Partners />
      <News />
      <LeadCapture />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;