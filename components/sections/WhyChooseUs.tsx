import { motion } from "framer-motion"
import { fadeIn, staggerContainer, revealUp, springUp } from "@/lib/motion"
import { CheckCircle2, History, Users2, Trophy } from "lucide-react"

const stats = [
    { label: "Successful Projects", value: "250+", icon: Trophy },
    { label: "Happy Clients", value: "180+", icon: Users2 },
    { label: "Years of Experience", value: "10+", icon: History },
    { label: "Technical Experts", value: "45+", icon: Users2 },
]

export const WhyChooseUs = () => {
    return (
        <section id="why-us" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Abstract Background */}
            <motion.div
                initial={{ opacity: 0, scale: 1.5, rotate: -15 }}
                whileInView={{ opacity: 0.1, scale: 1, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-0 left-0 w-1/2 h-full bg-white -skew-x-12 -translate-y-20 origin-top"
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        variants={staggerContainer(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <div className="overflow-hidden mb-6">
                            <motion.h2 variants={revealUp} className="text-blue-200 font-bold font-outfit uppercase tracking-[0.3em] text-sm">Why Choose Micro Egypt?</motion.h2>
                        </div>

                        <div className="overflow-hidden mb-12">
                            <motion.h3 variants={revealUp} className="text-5xl md:text-8xl font-bold leading-[0.9] font-outfit tracking-tighter">
                                Building Your <br />
                                <span className="text-blue-300 italic">Digital Future</span>
                            </motion.h3>
                        </div>

                        <div className="space-y-8">
                            {[
                                "High precision in delivery dates and professionalism.",
                                "Specialized team with extensive experience in international markets.",
                                "Using the latest global technologies to ensure security and speed.",
                                "Continuous technical support and innovative solutions.",
                            ].map((text, idx) => (
                                <motion.div key={idx} variants={fadeIn("up", 0.5 + idx * 0.1)} className="flex items-center gap-6 justify-start group">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-lg">
                                        <CheckCircle2 className="w-6 h-6 shrink-0" />
                                    </div>
                                    <span className="text-2xl font-sans opacity-80 group-hover:opacity-100 transition-opacity font-medium tracking-tight">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>


                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                variants={springUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={idx}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                className="p-12 rounded-[3.5rem] bg-white/10 border border-white/10 backdrop-blur-xl flex flex-col items-center text-center group cursor-pointer shadow-2xl transition-all duration-500"
                            >
                                <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                                    <stat.icon className="w-8 h-8 text-blue-200" />
                                </div>
                                <div className="text-6xl font-bold mb-3 font-outfit tracking-tighter">{stat.value}</div>
                                <div className="text-xs opacity-60 uppercase tracking-[0.2em] font-outfit font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
