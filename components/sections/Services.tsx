"use client"

import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/motion"
import { Smartphone, Laptop, Globe, Server, Palette, Rocket } from "lucide-react"

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
        <section id="services" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold mb-4 font-outfit"
                    >
                        Our Services
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-outfit"
                    >
                        Integrated Digital Solutions for Your Business Growth
                    </motion.h3>
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
                            variants={fadeIn("up", 0)}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-background border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon size={28} />
                            </div>
                            <h4 className="text-xl font-bold mb-4 font-outfit">{service.title}</h4>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {service.desc}
                            </p>
                            <div className="w-10 h-1 bg-primary/20 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
