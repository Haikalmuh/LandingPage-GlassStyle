"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900/40 to-slate-950">
      {/* Background fluid effect */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <GlassCard className="p-12 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400 drop-shadow-lg">
            TechConf 2025
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto">
            Explore the future of technology with innovators, leaders, and dreamers from around the globe.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">Register Now</Button>
<Button variant="outline">Learn More</Button>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
