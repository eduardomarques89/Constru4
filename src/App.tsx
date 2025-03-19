import React from 'react';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { About } from './components/About';
import { Projects } from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Achievements />
              {/* <Partners /> */}
              <Contact />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/projeto/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;