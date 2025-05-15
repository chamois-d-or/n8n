
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header/Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4 md:py-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[48px] h-[48px] bg-amber-700 rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-2xl font-bold">A</span>
            </div>
            <span className="text-amber-900 font-semibold text-xl">Agapes Invest</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-800 hover:text-amber-700 transition-colors">À propos</a>
            <a href="#portfolio" className="text-slate-800 hover:text-amber-700 transition-colors">Portfolio</a>
            <a href="#approach" className="text-slate-800 hover:text-amber-700 transition-colors">Notre approche</a>
            <a href="#contact" className="text-slate-800 hover:text-amber-700 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-amber-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative pt-32 px-6 md:px-12 lg:px-24 pb-24 md:pt-40 md:min-h-[90vh] flex flex-col md:flex-row md:items-center gap-12 overflow-hidden">
        <motion.div 
          className="md:w-[55%] z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Investir dans <span className="text-amber-700">l&apos;excellence gastronomique</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
            Agapes Invest est une holding d&apos;investissement dédiée à l&apos;acquisition et au développement d&apos;entreprises d&apos;exception dans le secteur de la gastronomie française.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors shadow-lg">
              Notre portfolio
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-800 rounded-md hover:border-amber-700 hover:text-amber-700 transition-colors">
              En savoir plus
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-[45%] relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-amber-700 opacity-10"></div>
            <Image
              src="/images/truffle-hero.jpg"
              alt="Truffes de haute qualité"
              width={800}
              height={600}
              className="object-cover w-full h-[400px] rounded-2xl"
              priority
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl w-[200px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[12px] h-[12px] rounded-full bg-emerald-500"></div>
              <span className="text-slate-900 font-medium">Acquisition récente</span>
            </div>
            <h3 className="text-amber-900 font-bold mb-1">La Cave à Truffes</h3>
            <p className="text-slate-600 text-sm">Premier investissement d&apos;Agapes dans le secteur de la truffe de luxe</p>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute bottom-12 left-12 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 0.7 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-2 text-slate-500"
          >
            <span className="w-12 h-[1px] bg-slate-400"></span>
            <span>Défiler pour découvrir</span>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute -top-36 right-24 w-[300px] h-[300px] rounded-full bg-amber-100 opacity-30 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.3 : 0 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
      
      {/* Clients strip */}
      <div className="bg-white py-8 px-6 md:px-12 lg:px-24 border-t border-b border-slate-200">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-8 text-center">En partenariat avec</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-slate-700 font-semibold">NextFood Capital</div>
            <div className="text-slate-700 font-semibold">Tertium Capital</div>
            <div className="text-slate-700 font-semibold">Truffières De Rabasse</div>
          </div>
        </div>
      </div>
    </div>
  );
}
