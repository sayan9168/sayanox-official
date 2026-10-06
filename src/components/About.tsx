"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Cpu } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    text: "Build original, high-performance systems, languages and security tools that give developers and organizations real power without compromising privacy or control.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "A world where secure, local-first, open infrastructure is the default — not the exception. Sayanox aims to be the foundation of that future.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "First-principles thinking · Privacy by design · Open source first · Strong attribution · Research-grade engineering · No shortcuts on security.",
  },
  {
    icon: Cpu,
    title: "Focus",
    text: "Programming language design, compilers, endpoint & AI security, OSINT, forensics, developer tooling and high-performance systems programming.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Sayanox</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Sayanox Private Limited is a technology company founded by{" "}
            <strong className="text-white">Sayan Mahata</strong> (Sayan The Researcher) 
            from West Bengal, India. We design original programming languages, 
            AI-driven security platforms and local-first developer tools from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
