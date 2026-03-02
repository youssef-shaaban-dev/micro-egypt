"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/motion"
import { ArrowRight, Play } from "lucide-react"

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    animate="show"
                    className="text-left lg:text-left"
                >
                    <motion.div
                        variants={fadeIn("up", 0.1)}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold font-outfit"
                    >
                        Innovating the Digital Future
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("up", 0.2)}
                        className="text-5xl md:text-7xl font-bold font-outfit leading-[1.1] mb-6"
                    >
                        Transform your ideas into <span className="text-primary">Reality</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("up", 0.3)}
                        className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl font-sans"
                    >
                        At Micro Egypt, we provide integrated technical solutions including web design, mobile applications, and business management systems with the highest global quality standards.
                    </motion.p>

                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform font-outfit">
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-3 px-8 py-4 rounded-full font-bold border border-border hover:bg-accent transition-colors font-outfit">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Play className="w-4 h-4 fill-current" />
                            </div>
                            View Our Work
                        </button>
                    </motion.div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-linear-to-tr from-primary/20 to-transparent rounded-4xl p-4 border border-white/10 backdrop-blur-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                            alt="Dashboard"
                            width={800}
                            height={500}
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>


                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -left-10 bg-background/90 p-6 rounded-2xl shadow-xl border border-border backdrop-blur-md"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 font-bold text-xl font-outfit">
                                99%
                            </div>
                            <div>
                                <div className="text-sm font-bold font-outfit">Success Rate</div>
                                <div className="text-xs text-muted-foreground">In project delivery</div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}
