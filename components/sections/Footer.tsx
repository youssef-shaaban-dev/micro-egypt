"use client"

import React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="pt-24 pb-12 bg-slate-950 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />


            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-left">
                {/* Company Info */}
                <div className="lg:col-span-1">
                    <Link href="/" className="text-3xl font-bold text-blue-400 mb-8 block font-outfit">Micro Egypt</Link>

                    <p className="text-slate-400 leading-relaxed mb-8">
                        The leading company in digital solutions, advanced design, and smart systems development in the Middle East.
                    </p>
                    <div className="flex gap-4 justify-start">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                            <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-bold mb-8 font-outfit">Quick Links</h4>
                    <ul className="space-y-4">
                        {["About Us", "Our Services", "Our Portfolio", "Contact Us", "Careers"].map((item, idx) => (
                            <li key={idx}>
                                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-outfit">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-xl font-bold mb-8 font-outfit">Our Services</h4>
                    <ul className="space-y-4">
                        {["App Design", "Web Development", "Visual Identity", "Digital Marketing", "Cloud Solutions"].map((item, idx) => (
                            <li key={idx}>
                                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-outfit">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-bold mb-8 font-outfit">Contact Us</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4 justify-start group">
                            <Phone size={20} className="text-blue-400" />
                            <span className="text-slate-400 group-hover:text-blue-400 transition-colors font-outfit">+20 123 456 7890</span>
                        </li>
                        <li className="flex items-center gap-4 justify-start group">
                            <Mail size={20} className="text-blue-400" />
                            <span className="text-slate-400 group-hover:text-blue-400 transition-colors">info@micro-egypt.com</span>
                        </li>
                        <li className="flex items-start gap-4 justify-start group">
                            <MapPin size={20} className="text-blue-400 mt-1" />
                            <span className="text-slate-400 group-hover:text-blue-400 transition-colors">Cairo, Nasr City, Sixth District</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
                <p>© 2024 Micro Egypt. All Rights Reserved.</p>

                <div className="flex gap-8">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                </div>
            </div>

        </footer>
    )
}
