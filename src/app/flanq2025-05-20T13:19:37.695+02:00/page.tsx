
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-16 pb-20 sm:pt-24 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-100 border border-indigo-200">
                <p className="text-sm font-medium text-indigo-700">Accounting with personality</p>
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                Accounting <span className="text-indigo-600">reimagined</span> for modern business
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mb-8">
                At FlanQ, we bring a refreshing approach to accounting. Based in the Netherlands, 
                we combine financial expertise with a funky, innovative culture that makes 
                accounting actually enjoyable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-lg">
                  Book a consultation
                </button>
                <button className="px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition duration-300 text-lg">
                  Explore services
                </button>
              </div>
              
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                      <Image 
                        src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} 
                        alt="Team member" 
                        width={48} 
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600">Trusted by 200+ businesses in the Netherlands</p>
                </div>
              </div>
            </div>
            
            {/* Image/Visual Side */}
            <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-indigo-500 opacity-10 z-10 rounded-2xl"></div>
                <div className="absolute -right-12 -bottom-12 w-[200px] h-[200px] bg-yellow-300 rounded-full opacity-70"></div>
                <div className="absolute -left-12 -top-12 w-[150px] h-[150px] bg-indigo-300 rounded-full opacity-70"></div>
                <Image
                  src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Funky accounting team"
                  fill
                  className="object-cover object-center rounded-2xl z-0"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/80 to-transparent p-8 rounded-b-2xl z-20">
                  <p className="text-white text-xl font-semibold">
                    &ldquo;FlanQ transformed how we handle our finances&rdquo;
                  </p>
                  <p className="text-indigo-100 mt-2">
                    — Jan Bakker, Founder of TechDirect
                  </p>
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl z-30">
                <div className="w-[120px] h-[120px] relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#4f46e5" strokeWidth="10" 
                      strokeDasharray="283" strokeDashoffset="60" transform="rotate(-90 50 50)" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">79%</span>
                  </div>
                </div>
                <p className="mt-2 text-center text-sm font-medium text-gray-600">Time saved on tax filing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
