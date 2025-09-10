"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-b from-slate-950 via-purple-900/20 to-slate-950 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400">
              TechConf 2025
            </h3>
            <p className="text-slate-400 text-sm">
              Exploring the future of technology together.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-slate-300 text-sm">
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>
            <a href="#speakers" className="hover:text-purple-400 transition">
              Speakers
            </a>
            <a href="#schedule" className="hover:text-purple-400 transition">
              Schedule
            </a>
            <a href="#registration" className="hover:text-purple-400 transition">
              Registration
            </a>
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 hover:bg-white/10 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 hover:bg-white/10 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 hover:bg-white/10 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 hover:bg-white/10 transition"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Bottom line */}
        <div className="mt-10 text-center text-slate-500 text-sm border-t border-white/10 pt-6">
          © {new Date().getFullYear()} TechConf. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
