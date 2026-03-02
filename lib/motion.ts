import { Variants } from "framer-motion"

export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
    return {
        hidden: {
            y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
            x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.9],
            },
        },
    }
}

export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren,
            },
        },
    }
}

export const revealUp: Variants = {
    hidden: { y: 150, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.33, 1, 0.68, 1],
        },
    },
}

export const textReveal: Variants = {
    hidden: { y: "100%" },
    show: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
        },
    },
}

export const scaleUp: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.33, 1, 0.68, 1],
        },
    },
}

export const springUp: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
}

