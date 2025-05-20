
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative min-h-[90vh] overflow-hidden px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 to-neutral-50"></div>
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-amber-100/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-20 h-[300px] w-[300px] rounded-full bg-amber-200/20 blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl pt-28 md:pt-32 lg:pt-36">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="max-w-xl">
                <h1 className="font-serif text-4xl font-light tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
                  Des bougies qui révèlent 
                  <span className="block text-amber-600">leurs secrets</span>
                </h1>
                
                <p className="mt-6 text-lg leading-relaxed text-neutral-700 md:text-xl">
                  Découvrez nos bougies minimalistes uniques, chacune porteuse d&apos;un message mystérieux qui se dévoile à mesure que la flamme brûle.
                </p>
                
                <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button className="group relative overflow-hidden rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800">
                    <span className="relative z-10">Découvrir notre collection</span>
                    <span className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  
                  <button className="rounded-md border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition-all duration-300 hover:border-amber-500 hover:text-amber-600">
                    Notre histoire
                  </button>
                </div>
                
                <div className="mt-12 flex items-center space-x-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                        <Image 
                          src={`/avatar-${i}.jpg`} 
                          alt="Client satisfait" 
                          width={40} 
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Plus de 2,000 clients satisfaits</p>
                    <div className="mt-1 flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="h-4 w-4 fill-amber-500" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-xs text-neutral-600">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right content - candle image */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="order-1 lg:order-2"
              style={{ 
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl lg:max-w-none">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-400/30 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-amber-300/20 blur-xl"></div>
                
                <div className="relative mx-auto aspect-[1/1.5] max-w-[220px]">
                  <Image 
                    src="/candle-reveal.png" 
                    alt="Bougie KiBrule avec message secret" 
                    fill
                    className="object-contain"
                    priority
                  />
                  
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-amber-500/10 px-4 py-2 text-center text-sm font-medium text-amber-800">
                    <span className="block">Un message se révèle</span>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-medium text-neutral-900">Candle &quot;Révélation&quot;</h3>
                  <p className="mt-1 text-neutral-600">Simple. Minimaliste. Mystérieuse.</p>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">Édition limitée</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative flame animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.3, 0.6, 0.4] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute bottom-12 right-12 h-16 w-16 rounded-full bg-amber-500/40 blur-xl"
        ></motion.div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-xs text-neutral-500">Explorer</span>
            <svg className="mt-2 h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  )
}
