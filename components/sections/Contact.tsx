"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { revealUp, scaleUp, staggerContainer, fadeIn } from "@/lib/motion"

const contactDetails = [
    {
        icon: Phone,
        label: "Call Us",
        value: "+20 123 456 7890",
        href: "tel:+201234567890",
        color: "bg-blue-500/10 text-blue-500"
    },
    {
        icon: Mail,
        label: "Email Us",
        value: "info@micro-egypt.com",
        href: "mailto:info@micro-egypt.com",
        color: "bg-purple-500/10 text-purple-500"
    },
    {
        icon: MapPin,
        label: "Visit Us",
        value: "Cairo, Nasr City, Sixth District",
        href: "#",
        color: "bg-emerald-500/10 text-emerald-500"
    }
]

const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "Linkedin" }
]

export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-accent/30 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -ml-24 -mb-24" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer(0.2)}
                    >
                        <div className="overflow-hidden mb-6">
                            <motion.h2 variants={revealUp} className="text-primary font-bold flex items-center gap-4 text-lg">
                                <span className="w-20 h-[3px] bg-primary rounded-full" />
                                Get In Touch
                            </motion.h2>
                        </div>

                        <div className="overflow-hidden mb-10">
                            <motion.h3 variants={revealUp} className="text-5xl md:text-7xl font-bold leading-none font-outfit tracking-tight">
                                Ready to <br />
                                <span className="text-muted-foreground italic relative">
                                    Start Your Project?
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
                                We&apos;re here to help you navigate your digital transformation. Reach out to us through any of these channels.
                            </motion.p>
                        </div>

                        {/* Social Tiles */}
                        <motion.div variants={fadeIn("up", 0.6)} className="flex gap-6">
                            {socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-xl shadow-black/5 group"
                                    aria-label={social.label}
                                >
                                    <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Contact Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer(0.1)}
                        className="grid gap-8"
                    >
                        {contactDetails.map((detail, idx) => (
                            <motion.a
                                key={idx}
                                href={detail.href}
                                variants={scaleUp}
                                whileHover={{ x: 10 }}
                                className="group p-10 rounded-[2.5rem] bg-background border border-border hover:border-primary/50 transition-all shadow-2xl shadow-black/5 flex items-center gap-8"
                            >
                                <div className={`w-20 h-20 rounded-2xl ${detail.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                    <detail.icon size={32} />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2 font-outfit">{detail.label}</div>
                                    <div className="text-2xl md:text-3xl font-bold font-outfit break-all">{detail.value}</div>
                                </div>
                                <ArrowRight className="ml-auto w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
