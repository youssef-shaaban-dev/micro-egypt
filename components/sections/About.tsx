"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, revealUp, scaleUp } from "@/lib/motion"

export const About = () => {
    return (
        <section id="about" className="py-32 bg-accent/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl group border border-white/20">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                                alt="Our Team"
                                width={600}
                                height={450}
                                className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>

                        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10" />

                        <motion.div
                            variants={scaleUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-[3rem] text-white shadow-2xl hidden md:block z-20 border border-white/10"
                        >
                            <div className="text-6xl font-bold mb-1 font-outfit">10+</div>
                            <div className="text-sm opacity-80 uppercase tracking-widest font-outfit font-bold">Years Experience</div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer(0.2)}
                        className="text-left"
                    >
                        <div className="overflow-hidden mb-6">
                            <motion.h2 variants={revealUp} className="text-primary font-bold flex items-center gap-4 text-lg">
                                <span className="w-20 h-[3px] bg-primary rounded-full" />
                                Who We Are?
                            </motion.h2>
                        </div>

                        <div className="overflow-hidden mb-10">
                            <motion.h3 variants={revealUp} className="text-5xl md:text-7xl font-bold leading-none font-outfit tracking-tight">
                                Micro Egypt.. <br />
                                <span className="text-muted-foreground italic relative">
                                    Trusted Partner
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1, duration: 1 }}
                                        className="absolute bottom-2 left-0 h-4 bg-primary/10 -z-10"
                                    />
                                </span>
                            </motion.h3>
                        </div>

                        <div className="overflow-hidden mb-12">
                            <motion.p variants={fadeIn("up", 0.4)} className="text-2xl text-muted-foreground leading-relaxed font-sans max-w-xl">
                                We are a leading technical agency dedicated to delivering high-performance digital products. Our team combines creativity with technical excellence to help your business thrive in the digital age.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { title: "Clear Vision", desc: "Well-defined roadmap" },
                                { title: "Pro Team", desc: "Expert developers" },
                                { title: "Tech Support", desc: "24/7 dedicated support" },
                                { title: "Modern Stack", desc: "Latest technologies" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={scaleUp}
                                    whileHover={{ y: -5 }}
                                    className="group p-8 rounded-4xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all shadow-xl shadow-black/5 bg-background/50 backdrop-blur-sm"
                                >
                                    <div className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors font-outfit">{item.title}</div>
                                    <div className="text-base text-muted-foreground font-sans leading-relaxed">{item.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
