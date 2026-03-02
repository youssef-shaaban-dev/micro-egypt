"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"

export const About = () => {
    return (
        <section id="about" className="py-24 bg-accent/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                                alt="Our Team"
                                width={600}
                                height={450}
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />

                        <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl text-white shadow-xl hidden md:block">
                            <div className="text-4xl font-bold mb-1 font-outfit">10+</div>
                            <div className="text-sm opacity-80 uppercase tracking-wider font-outfit">Years Experience</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn("up", 0.1)}
                        className="text-left"
                    >
                        <h2 className="text-primary font-bold mb-4 flex items-center gap-2 justify-start">
                            <span className="w-12 h-[2px] bg-primary" />
                            Who We Are?
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-snug font-outfit">
                            Micro Egypt.. <br />
                            <span className="text-muted-foreground">Your Trusted Digital Partner</span>
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-sans">
                            We are a leading technical agency dedicated to delivering high-performance digital products. Our team combines creativity with technical excellence to help your business thrive in the digital age.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: "Clear Vision", desc: "We work with a well-defined roadmap" },
                                { title: "Professional Team", desc: "The best developers and designers" },
                                { title: "Tech Support", desc: "Always here to help you" },
                                { title: "Modern Tech", desc: "Using the latest technologies" },
                            ].map((item, idx) => (
                                <div key={idx} className="group p-4 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                                    <div className="font-bold text-lg mb-1 group-hover:text-primary transition-colors font-outfit">{item.title}</div>
                                    <div className="text-sm text-muted-foreground font-sans">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
