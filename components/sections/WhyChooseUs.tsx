"use client"

import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/motion"
import { CheckCircle2, History, Users2, Trophy } from "lucide-react"

const stats = [
    { label: "Successful Projects", value: "250+", icon: Trophy },
    { label: "Happy Clients", value: "180+", icon: Users2 },
    { label: "Years of Experience", value: "10+", icon: History },
    { label: "Technical Experts", value: "45+", icon: Users2 },
]

export const WhyChooseUs = () => {
    return (
        <section id="why-us" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-white/5 -skew-x-12 -translate-y-20 origin-top" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        variants={staggerContainer(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <motion.h2 variants={fadeIn("up")} className="text-white/80 font-bold mb-4 font-outfit">Why Choose Micro Egypt?</motion.h2>
                        <motion.h3 variants={fadeIn("up")} className="text-3xl md:text-5xl font-bold mb-8 leading-tight font-outfit">
                            We don&apos;t just build software, <br />
                            <span className="text-blue-200">we build a digital future</span>
                        </motion.h3>


                        <div className="space-y-6">
                            {[
                                "High precision in delivery dates and professionalism.",
                                "Specialized team with extensive experience in international markets.",
                                "Using the latest global technologies to ensure security and speed.",
                                "Continuous technical support and innovative out-of-the-box solutions.",
                            ].map((text, idx) => (
                                <motion.div key={idx} variants={fadeIn("up")} className="flex items-start gap-4 justify-start">
                                    <CheckCircle2 className="text-blue-300 w-6 h-6 mt-1 shrink-0" />
                                    <span className="text-lg font-sans">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>


                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-4xl bg-white/10 border border-white/10 backdrop-blur-lg flex flex-col items-center text-center"
                            >
                                <stat.icon className="w-10 h-10 mb-4 text-blue-200" />
                                <div className="text-4xl font-bold mb-2 font-outfit">{stat.value}</div>
                                <div className="text-sm opacity-80 font-outfit">{stat.label}</div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
