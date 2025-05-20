
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3"></div>
        </div>

        {/* Hero section */}
        <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-amber-700">Agapes Invest</span>
                  <br />
                  <span className="text-gray-800">Cultivating Excellence in Gastronomy</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-[650px]">
                  Une holding d&apos;investissement dédiée à l&apos;acquisition et au développement d&apos;entreprises d&apos;exception dans le secteur gastronomique.
                </p>
              </div>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                  Découvrir nos entreprises
                </button>
                <button className="px-8 py-4 bg-white hover:bg-gray-100 text-amber-700 font-semibold rounded-lg border-2 border-amber-700 shadow-sm transition-all duration-300 transform hover:scale-105">
                  À propos de nous
                </button>
              </div>
              
              <div className="pt-12">
                <p className="text-gray-500 mb-3 font-medium">Nos investissements actuels</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-700 font-bold">LC</span>
                    </div>
                    <span className="ml-3 text-gray-800 font-medium">La Cave à Truffes</span>
                  </div>
                  <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-700 font-bold">TR</span>
                    </div>
                    <span className="ml-3 text-gray-800 font-medium">Truffières De Rabasse</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop"
                    alt="Gastronomie de luxe"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold">Excellence Gastronomique</h3>
                  <p className="text-gray-200 mt-2">Nous investissons dans le savoir-faire français</p>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 z-20 bg-white p-4 rounded-lg shadow-xl border border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Partenariat avec</p>
                    <p className="text-amber-700 font-bold">Tertium Capital</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="container mx-auto px-6 lg:px-8 py-12 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">Backed by</h3>
            <p className="text-gray-600 mt-1">NextFood Capital</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-700">Expertise</p>
                <p className="text-sm text-gray-500">Financière</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-700">Expérience</p>
                <p className="text-sm text-gray-500">Agro-alimentaire</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-700">Vision</p>
                <p className="text-sm text-gray-500">Long terme</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
