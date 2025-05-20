
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
    <main className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <section className="relative overflow-hidden pt-24 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 -left-4 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-6">
              Accounting Reimagined
            </span>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Make finances 
              <span className="text-purple-600"> fun </span>
              with FlanQ
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're not your typical accounting firm. At FlanQ, we blend financial expertise with a fresh approach that makes accounting accessible, engaging, and (dare we say it) exciting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
                Book a Consultation
              </button>
              <button className="px-8 py-4 bg-white text-purple-600 font-medium rounded-lg border-2 border-purple-200 hover:bg-purple-50 transition-colors">
                Learn Our Approach
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Customer"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="Customer"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="https://randomuser.me/api/portraits/women/22.jpg"
                  alt="Customer"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">Trusted by <span className="font-medium">500+</span> Dutch businesses</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-purple-100 overflow-hidden aspect-[4/3] border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="FlanQ team working"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-transparent" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">98%</h3>
                  <p className="text-sm text-gray-600">Client satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-xl shadow-lg rotate-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">Average 23% savings</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
