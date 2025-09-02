"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

const speakers = [
  {
    name: "Ariana Lopez",
    role: "AI Researcher @ OpenAI",
    img: "/speakers/ariana.jpeg",
  },
  {
    name: "James Wong",
    role: "CTO @ FutureTech",
    img: "/speakers/james.jpeg",
  },
  {
    name: "Sophia Tan",
    role: "Founder @ InnovateHub",
    img: "/speakers/shopia.jpeg",
  },
  {
    name: "Liam Chen",
    role: "Engineer @ SpaceX",
    img: "/speakers/liam.jpeg",
  },
];

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950"
    >
      <div className="container mx-auto px-6 text-center max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400"
        >
          Meet Our Speakers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto"
        >
          Learn from pioneers, innovators, and leaders shaping the future of
          technology.
        </motion.p>

        {/* Grid of Speakers */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-lg">
                  <Image
                    src={speaker.img}
                    alt={speaker.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{speaker.role}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
