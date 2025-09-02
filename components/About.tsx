"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"
    >
      <div className="container mx-auto px-6 text-center max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400"
        >
          About TechConf 2025
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto"
        >
          TechConf 2025 brings together the brightest minds in technology,
          offering a stage for innovation, collaboration, and inspiration.
        </motion.p>

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold text-purple-300">Global Speakers</h3>
            <p className="mt-3 text-slate-300 text-sm">
              Hear from industry leaders and visionaries from around the world.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold text-purple-300">Networking</h3>
            <p className="mt-3 text-slate-300 text-sm">
              Connect with fellow innovators, entrepreneurs, and tech enthusiasts.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold text-purple-300">Innovation</h3>
            <p className="mt-3 text-slate-300 text-sm">
              Discover the latest breakthroughs shaping the future of technology.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
