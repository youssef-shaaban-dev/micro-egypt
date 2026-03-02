"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"

export const SplashIntro = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete()
        }, 2500)
        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-100 bg-[#00509d] flex items-center justify-center overflow-hidden"

        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-[#00509d] text-5xl font-bold mb-6 shadow-2xl font-outfit"
                >
                    M
                </motion.div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="text-white text-4xl md:text-5xl font-bold font-outfit"
                    >
                        Micro Egypt
                    </motion.h1>
                </div>


                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                    className="h-[2px] w-full bg-white/30 mt-4 origin-center"
                />
            </div>

            {/* Background shards for premium feel */}
            <motion.div
                animate={{
                    rotate: [0, 90],
                    opacity: [0.1, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 blur-3xl rounded-full"
            />
            <motion.div
                animate={{
                    rotate: [0, -90],
                    opacity: [0.1, 0.2]
                }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 blur-3xl rounded-full"
            />
        </motion.div>
    )
}
