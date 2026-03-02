"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, revealUp, scaleUp } from "@/lib/motion"
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
                    className="text-left max-w-4xl"
                >
                    <div className="overflow-hidden">
                        <motion.div
                            variants={fadeIn("up", 0.1)}
                            className="inline-block px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold font-outfit"
                        >
                            Innovating the Digital Future
                        </motion.div>
                    </div>

                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            variants={revealUp}
                            className="text-6xl md:text-8xl font-bold font-outfit leading-[1.05]"
                        >
                            Transform your ideas into <span className="text-primary italic">Reality</span>
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-12">
                        <motion.p
                            variants={fadeIn("up", 0.3)}
                            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-sans"
                        >
                            At Micro Egypt, we provide integrated technical solutions including web design, mobile applications, and business management systems with the highest global quality standards.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        className="flex flex-wrap gap-6"
                    >
                        <button className="group bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/20 font-outfit text-lg">
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-4 px-10 py-5 rounded-full font-bold border border-border hover:bg-accent transition-all font-outfit text-lg group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Play className="w-5 h-5 fill-current" />
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
                        variants={scaleUp}
                        transition={{ delay: 1 }}
                        animate={{ y: [0, -20, 0] }}
                        className="absolute -top-10 -left-10 bg-background/90 p-8 rounded-3xl shadow-2xl border border-border backdrop-blur-xl z-20"
                    >
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 font-bold text-2xl font-outfit">
                                99%
                            </div>
                            <div>
                                <div className="text-base font-bold font-outfit">Success Rate</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-widest font-outfit">In delivery</div>
                            </div>
                        </div>
                    </motion.div>


                </motion.div>
            </div>
        </section>
    )
}
