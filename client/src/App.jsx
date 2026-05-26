import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Process from './components/Process';
import Gallery from './components/Gallery';
import InquiryForm from './components/InquiryForm';
import ContactMap from './components/ContactMap';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-emerald-200 antialiased">
      <Navbar />
      <Hero />
      <Process />
      <Products /> 
      <Features />
      <Gallery />
      <ContactMap />
      <InquiryForm />

      <footer className="bg-gray-900 text-gray-400 text-xs py-8 text-center border-t border-gray-800">
        <p>© 2026 Hariom High-Tech Organic Fertilizers. All biological configurations reserved.</p>
      </footer>
    </div>
  );
}