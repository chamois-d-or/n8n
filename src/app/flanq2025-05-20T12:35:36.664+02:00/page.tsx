
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[90vh] bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 px-6 md:px-12 lg:px-20">
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5 backdrop-blur-sm"
              initial={{ 
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0.1
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh] items-center">
            <div className="lg:col-span-7 pt-28 md:pt-20 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full backdrop-blur-sm">
                  <p className="text-indigo-200 font-medium text-sm">Redefining Accounting in the Netherlands</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Accounting with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Funky Twist</span>
                </h1>
                <p className="text-indigo-100 text-lg md:text-xl mb-8 max-w-[600px] leading-relaxed">
                  FlanQ brings creative energy to your finances. We make numbers fun while ensuring your business stays compliant and profitable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg text-white font-semibold shadow-lg shadow-purple-700/30 hover:shadow-purple-700/50 transition-all duration-300 text-lg">
                    Get Started
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300 text-lg">
                    Learn More
                  </button>
                </div>
                
                <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-indigo-900 overflow-hidden">
                        <Image 
                          src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                          alt="Client" 
                          width={48} 
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-indigo-200 font-medium">Trusted by <span className="text-white font-bold">500+</span> businesses</p>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="ml-2 text-indigo-200 font-medium">4.9/5</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40 border border-indigo-600/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-indigo-700/40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                  <div 
                    className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg"
                    style={{
                      transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
                    }}
                  >
                    <h2 className="text-6xl font-bold text-white">FlanQ</h2>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {['Analytics', 'Taxes', 'Advice'].map((service, i) => (
                      <div 
                        key={service} 
                        className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 text-center"
                        style={{
                          transform: `translateY(${scrollY * 0.05 * (i+1)}px)`
                        }}
                      >
                        <p className="text-white font-medium">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-[150px] h-[150px] bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-full blur-[80px] opacity-60"></div>
              <div className="absolute -top-10 -left-10 w-[200px] h-[200px] bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-[100px] opacity-60"></div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-slate-950 to-transparent"></div>
      </section>
    </main>
  );
}
