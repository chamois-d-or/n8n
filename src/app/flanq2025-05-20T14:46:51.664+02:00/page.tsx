
"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        <div className="absolute top-[40%] right-[-10%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-amber-500 to-pink-500"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center min-h-[90vh] py-12 md:py-24 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0 z-10">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
              Not your standard accounting firm
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
              Accounting with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">flair</span> and precision
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-[550px]">
              FlanQ brings a funky fresh approach to financial services in the Netherlands, combining expert accounting with vibrant creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-all">
                Book a consultation
              </button>
              <button className="px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
                Our services
              </button>
            </div>
            
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500"></div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Trusted by 200+ businesses</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative z-10">
            <div className="relative">
              <div className="absolute -top-4 -left-4 right-4 bottom-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=M3w3NDgwODZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5ZXQlMjBwbGF5ZnVsfGVufDB8fHx8MTc0Nzc0NTIxNnww&ixlib=rb-4.1.0"
                  alt="FlanQ team - professional yet playful accountants"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-xl font-semibold drop-shadow-lg">
                    &ldquo;We bring color to the numbers&rdquo;
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-[150px] h-[150px] bg-white rounded-full p-4 shadow-2xl hidden md:block">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-400 to-pink-500 rounded-full text-white font-bold text-center">
                25+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
}
