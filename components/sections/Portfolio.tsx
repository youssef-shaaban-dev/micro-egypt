"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/motion"
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
        <section id="portfolio" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-left mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold mb-4 font-outfit"
                    >
                        Our Portfolio
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-outfit"
                    >
                        Projects We Are Proud Of
                    </motion.h3>
                </div>

                <motion.div
                    variants={staggerContainer(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up")}
                            className="group relative overflow-hidden rounded-4xl bg-accent"
                        >
                            <div className="aspect-4/5 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 text-left">

                                <div className="text-blue-400 font-bold mb-2 font-outfit">{project.category}</div>
                                <h4 className="text-white text-3xl font-bold mb-4 font-outfit">{project.title}</h4>
                                <div className="flex items-center justify-start gap-6">
                                    <span className="text-white/60 font-outfit">{project.year}</span>

                                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
