"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, revealUp, scaleUp } from "@/lib/motion"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        title: "Agency Website",
        category: "Web Design",
        color: "dark",
        year: "2024",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop",
    },
    {
        title: "Industrial Site",
        category: "Tech Solutions",
        color: "dark",
        year: "2023",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Consulting App",
        category: "Management System",
        color: "dark",
        year: "2024",
        image: "https://images.unsplash.com/photo-1454165833762-02ec4d49e62c?q=80&w=2670&auto=format&fit=crop",
    },

]

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <div className="overflow-hidden mb-4">
                        <motion.h2
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={revealUp}
                            className="text-primary font-bold font-outfit uppercase tracking-[0.3em] text-sm"
                        >
                            Our Portfolio
                        </motion.h2>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h3
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            variants={revealUp}
                            className="text-5xl md:text-8xl font-bold font-outfit leading-tight tracking-tighter"
                        >
                            Projects <span className="text-muted-foreground italic">of Distinction</span>
                        </motion.h3>
                    </div>
                </div>

                <motion.div
                    variants={staggerContainer(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={scaleUp}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-[3rem] bg-accent border border-border/50 shadow-2xl"
                        >
                            <div className="aspect-3/4 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 text-left backdrop-blur-[2px]">

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    <div className="text-primary font-bold mb-3 font-outfit uppercase tracking-widest text-sm">{project.category}</div>
                                    <h4 className="text-white text-4xl font-bold mb-6 font-outfit leading-tight">{project.title}</h4>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white/60 font-outfit text-lg">{project.year}</span>

                                        <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all duration-500 shadow-xl group/btn">
                                            <ExternalLink size={24} className="group-hover/btn:rotate-45 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
