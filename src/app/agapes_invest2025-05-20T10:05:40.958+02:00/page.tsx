
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10 z-0"></div>
      
      {/* Hero Section */}
      <div className="relative mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 md:py-20 lg:py-28 gap-12">
          
          {/* Left Content - Text */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-amber-100 border border-amber-200">
              <span className="text-amber-800 font-medium text-sm">Holding d&apos;investissement gastronomique</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              <span className="text-amber-700">Agapes</span> Invest
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Nous investissons dans l&apos;excellence gastronomique française. Notre première acquisition, 
              <span className="font-semibold text-amber-800"> La Cave à Truffes</span>,
              est le reflet de notre engagement envers des produits d&apos;exception.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-4 bg-amber-700 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-800 transition-colors duration-300 text-center">
                Notre portfolio
              </button>
              <button className="px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg shadow-lg border border-amber-200 hover:bg-gray-50 transition-colors duration-300 text-center">
                Découvrir notre vision
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-amber-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="ml-4 text-gray-600 font-medium">Dirigé par des experts <br/> de l&apos;agroalimentaire</span>
              </div>
              
              <div className="h-12 w-px bg-gray-300"></div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-600 font-medium">Approche responsable <br/> et durable</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image + Cards */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-[4/3]">
                  <Image 
                    src="/truffle-production.jpg" 
                    alt="Production de truffes" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white font-bold text-xl">La Cave à Truffes</h3>
                  <p className="text-gray-200">Première acquisition d&apos;Agapes Invest</p>
                </div>
              </div>
              
              {/* Floating Card 1 */}
              <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-5 w-[180px] border border-gray-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800">NextFood Capital</span>
                </div>
                <p className="text-sm text-gray-600">Actionnaire principal d&apos;Agapes Invest</p>
              </div>
              
              {/* Floating Card 2 */}
              <div className="absolute -bottom-10 -left-8 bg-white rounded-xl shadow-xl p-5 w-[200px] border border-gray-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800">Tertium Capital</span>
                </div>
                <p className="text-sm text-gray-600">Partenariat stratégique pour notre développement</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Brands Section */}
        <div className={`pb-16 transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="h-px w-full bg-gray-200 mb-8"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-500 font-medium">Nos entreprises</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-8 items-center">
              <div className="text-center">
                <div className="h-16 flex items-center">
                  <span className="font-serif font-bold text-xl text-amber-800">La Cave à Truffes</span>
                </div>
                <span className="text-xs text-gray-500">Transformation de truffes</span>
              </div>
              
              <div className="text-center">
                <div className="h-16 flex items-center">
                  <span className="font-serif font-bold text-xl text-amber-800">Truffières De Rabasse</span>
                </div>
                <span className="text-xs text-gray-500">Production en Provence</span>
              </div>
              
              <div className="h-20 w-px bg-gray-200 hidden md:block"></div>
              
              <div className="text-center">
                <div className="h-16 flex items-center justify-center px-4 rounded-lg border border-dashed border-amber-300 bg-amber-50">
                  <span className="font-medium text-amber-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Prochaine acquisition
                  </span>
                </div>
                <span className="text-xs text-gray-500">Secteur gastronomique</span>
              </div>
            </div>
          </div>