
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <header className={`fixed w-full py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} z-50`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">FlanQ</span>
          </div>
          
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">Services</a>
            <a href="#" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">Team</a>
            <a href="#" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">Contact</a>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors">Get Started</button>
          </nav>
          
          <button className="md:hidden text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider">Modern Accounting</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-700">
              Accounting That's Anything But Boring
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-[600px]">
              At FlanQ, we're revolutionizing accounting in the Netherlands with our fresh, funky approach that combines expertise with personality. Let's make your numbers work for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                Book a Consultation
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-medium transition-colors duration-300 text-lg flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                Watch Demo
              </button>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-500 mb-4 font-medium">Trusted by innovative companies</p>
              <div className="flex flex-wrap gap-8 items-center">
                <Image src="/placeholder-logo.svg" alt="Client logo" width={120} height={40} className="opacity-70 hover:opacity-100 transition-opacity" />
                <Image src="/placeholder-logo.svg" alt="Client logo" width={120} height={40} className="opacity-70 hover:opacity-100 transition-opacity" />
                <Image src="/placeholder-logo.svg" alt="Client logo" width={120} height={40} className="opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-12 -left-12 w-[140px] h-[140px] bg-purple-200 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-12 -right-12 w-[180px] h-[180px] bg-indigo-200 rounded-full blur-3xl opacity-70"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-indigo-600">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-[12px]"></div>
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Financial Insights</h3>
                    <p className="text-gray-600">Your business performance at a glance</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    +24% Growth
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                      </div>
                      <span className="font-medium">Q3 Revenue</span>
                    </div>
                    <span className="text-xl font-bold">€186,400</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                      </div>
                      <span className="font-medium">Tax Savings</span>
                    </div>
                    <span className="text-xl font-bold">€27,950</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
