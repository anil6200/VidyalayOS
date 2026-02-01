import React from 'react';
import Navbar from './components/layouts/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/layouts/Footer';

function App() {
  return (

    <div className="relative w-full min-h-screen bg-white selection:bg-blue-600 selection:text-white antialiased">
      <Navbar />

      <main>

        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}

export default App;