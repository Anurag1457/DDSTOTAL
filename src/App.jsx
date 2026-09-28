import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import WhyChooseUs from './components/WhyChooseUs';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ flex: 1 }}>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Services onOpenModal={() => setIsModalOpen(true)} />
        <Calculator onOpenModal={() => setIsModalOpen(true)} />
        <WhyChooseUs />
        <LeadForm />
        <FAQ />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
