"use client"

import React, { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { SplashIntro } from "@/components/layout/SplashIntro"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Portfolio } from "@/components/sections/Portfolio"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashIntro key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <div className={!showSplash ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}>
        {!showSplash && (
          <>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Portfolio />
          </>
        )}
      </div>
    </div>
  )
}


