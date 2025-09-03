"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";

const schedule = [
  {
    time: "09:00 AM",
    title: "Opening Keynote",
    speaker: "Dr. Jane Smith",
    description: "The future of AI and emerging technologies.",
  },
  {
    time: "10:30 AM",
    title: "Panel Discussion",
    speaker: "Industry Leaders",
    description: "Innovation, startups, and the global tech landscape.",
  },
  {
    time: "01:00 PM",
    title: "Workshop",
    speaker: "John Doe",
    description: "Hands-on with Next.js & modern frontend tools.",
  },
  {
    time: "03:00 PM",
    title: "Closing Remarks",
    speaker: "Conference Host",
    description: "Summary and takeaways for the future.",
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-purple-900/20 to-slate-950"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400"
        >
          Event Schedule
        </motion.h2>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Garis utama */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/40 via-fuchsia-400/30 to-indigo-500/40" />

          {/* Items */}
          <div className="space-y-12 pl-12">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Bullet */}
                <span className="absolute left-4 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 ring-4 ring-slate-950 shadow-lg" />

                {/* Card */}
                <GlassCard className="p-6">
                  <span className="text-sm font-semibold text-purple-300">
                    {item.time}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-slate-300 text-sm">by {item.speaker}</p>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
