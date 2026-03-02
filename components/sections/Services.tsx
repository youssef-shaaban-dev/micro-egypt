"use client"

import React from "react"
import { motion } from "framer-motion"
import { Smartphone, Laptop, Globe, Server, Palette, Rocket } from "lucide-react"
import { staggerContainer, revealUp, scaleUp } from "@/lib/motion"

const services = [
    {
        title: "App Design",
        desc: "We design attractive user interfaces (UI) and unique user experiences (UX) for Android and iOS applications.",
        icon: Smartphone,
        color: "bg-blue-500",
    },
    {
        title: "Web Development",
        desc: "We build responsive and fast websites that serve your business goals and increase your reach to customers.",
        icon: Laptop,
        color: "bg-purple-500",
    },
    {
        title: "Digital Marketing",
        desc: "We help you reach your target audience through innovative marketing strategies on social networks.",
        icon: Globe,
        color: "bg-pink-500",
    },
    {
        title: "Technical Solutions",
        desc: "Development of cloud systems and custom software to manage business operations with high efficiency.",
        icon: Server,
        color: "bg-green-500",
    },
    {
        title: "Visual Identity",
        desc: "We design integrated visual identities that reflect your brand value and leave a lasting impression.",
        icon: Palette,
        color: "bg-orange-500",
    },
    {
        title: "Quick Launch",
        desc: "We guarantee the launch of your project in record time while maintaining the highest quality standards.",
        icon: Rocket,
        color: "bg-red-500",
    },
]

export const Services = () => {
    return (
        <section id="services" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <div className="overflow-hidden mb-4">
                        <motion.h2
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={revealUp}
                            className="text-primary font-bold font-outfit uppercase tracking-widest text-sm"
                        >
                            Our Expertise
                        </motion.h2>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h3
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            variants={revealUp}
                            className="text-4xl md:text-7xl font-bold font-outfit leading-tight"
                        >
                            High-impact digital solutions <br />
                            <span className="text-muted-foreground italic">crafted with precision</span>
                        </motion.h3>
                    </div>
                </div>



                <motion.div
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={scaleUp}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="p-10 rounded-[2.5rem] bg-background border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />

                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                <service.icon size={32} />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 font-outfit">{service.title}</h4>
                            <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-sans">
                                {service.desc}
                            </p>
                            <div className="w-12 h-1 bg-primary/30 group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}
