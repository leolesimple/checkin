'use client'

import Image from "next/image"
import Title from "@app/ui/titles"
import { motion } from "framer-motion"
import Footer from "@app/ui/footer";

export default function StudioPage() {
    return (
        <>
        <main className="min-h-screen w-full bg-stone-900 text-neutral-100 px-6 pb-32 pt-20 overflow-hidden">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-20">
                <Title heading="Inside Liquid Glass" tag="h1" className="text-6xl mb-6 tracking-tight" />
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-xl text-stone-400 max-w-2xl mx-auto"
                >
                    Discover the next evolution of iOS design. Liquid Glass blends depth, translucency, and motion to create an interface that feels alive.
                </motion.p>
            </div>

            <div className="space-y-28 max-w-5xl mx-auto">
                {/* Translucent Surfaces */}
                <section className="flex flex-col-reverse lg:flex-row items-center gap-10">
                    <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-4"
                    >
                        <h2 className="text-4xl font-semibold text-stone-100">Translucent Surfaces</h2>
                        <p className="text-lg text-stone-400">
                            Layers of semi-transparent material reveal context without distraction. By harnessing dynamic blur algorithms,
                            Liquid Glass elevates focus and guides your attention effortlessly.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <Image
                            src="/img/materials-liquid-glass-overview@2x.png"
                            alt="Stunning semi-transparent interface panels overlapping over photographic background"
                            width={800}
                            height={600}
                            className="rounded-xl shadow-2xl"
                        />
                    </motion.div>
                </section>

                {/* Vibrancy Engine */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-4xl font-semibold text-stone-100 mb-4">Vibrancy Engine</h2>
                        <p className="text-lg text-stone-400">
                            Advanced color blending blends hue and luminance in real time, creating depth and vitality. Every element
                            carries subtle vibrancy that adapts to ambient light and content changes.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <Image
                            src="/img/liquid-glass-color.png"
                            alt="Rich color gradients flowing across UI elements with soft glow"
                            width={800}
                            height={600}
                            className="rounded-xl"
                        />
                    </motion.div>
                </section>

                {/* Spatial Depth */}
                <section className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-3xl"
                    >
                        <Image
                            src="/img/spatial-layering.png"
                            alt="3D interface layers showing perspective and depth"
                            width={1200}
                            height={700}
                            className="object-cover w-full"
                        />
                    </motion.div>
                    <div className="absolute inset-0 flex items-end justify-center pb-16 bg-gradient-to-t from-stone-900/80">
                        <div className="text-center space-y-3 max-w-md">
                            <h2 className="text-4xl font-semibold text-white">Spatial Depth</h2>
                            <p className="text-lg text-stone-300">
                                Harnessing advanced parallax and perspective layers, Liquid Glass creates a sense of space that
                                responds to device tilt and interaction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Responsive Haptics */}
                <section className="flex flex-col lg:flex-row items-center gap-10">
                    <motion.div
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <Image
                            src="/img/responsive-glass.png"
                            alt="Close-up of a device with subtle haptic feedback interface demonstration"
                            width={800}
                            height={600}
                            className="rounded-xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-4"
                    >
                        <h2 className="text-4xl font-semibold text-stone-100">Responsive Haptics</h2>
                        <p className="text-lg text-stone-400">
                            Our design integrates context-aware haptic feedback, offering tactile cues that bridge digital motion
                            and real‑world sensation. Every tap resonates with purpose.
                        </p>
                    </motion.div>
                </section>

                {/* Accessibility Integration */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-semibold text-stone-100 mb-4">Accessibility Integration</h2>
                        <p className="text-lg text-stone-400">
                            High‑contrast translucency and dynamic text scaling ensure that Liquid Glass remains legible and intuitive for all users,
                            adhering to WCAG and leveraging system-wide accessibility APIs.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/img/foundations-accessibility-intro@2x.png"
                            alt="Interface demonstrating high contrast and dynamic text scaling"
                            width={800}
                            height={600}
                            className="rounded-xl"
                        />
                    </motion.div>
                </section>
            </div>

            {/* Footer Source */}
            <div className="mt-40 max-w-3xl mx-auto text-center">
                <p className="text-stone-500 text-sm">
                    Learn more at{' '}
                    <a
                        href="https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/"
                        className="underline hover:text-stone-300"
                        target="_blank"
                    >
                        apple.com/newsroom
                    </a>
                </p>
            </div>
        </main>
        <Footer />
    </>
    )
}
