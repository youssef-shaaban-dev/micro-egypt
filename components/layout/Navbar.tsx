"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useHasMounted } from "@/hooks/use-has-mounted"

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Why Us?", href: "#why-us" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, setTheme } = useTheme()
    const hasMounted = useHasMounted()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (!hasMounted) return null

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-outfit">M</div>
                    <span className="font-outfit">Micro Egypt</span>
                </Link>


                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-accent transition-colors"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Link
                        href="#contact"
                        className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        Start Your Project
                    </Link>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-accent"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-center font-bold"
                        >
                            Start Your Project
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

