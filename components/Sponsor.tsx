"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sponsors = [
  { name: "Oracle", logo: "/sponsor/oracle.svg" },
  { name: "Vercel", logo: "/sponsors/vercel.svg" },
  { name: "Next.js", logo: "/sponsors/nextjs.svg" },
  { name: "Tailwind", logo: "/sponsors/tailwind.svg" },
];

export default function Sponsors() {
  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400"
        >
          Our Sponsors
        </motion.h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          We’re proud to be supported by leading companies and organizations.
        </p>

        {/* Logos */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={60}
                className="opacity-60 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
