"use client";

import { motion } from "framer-motion";
import { Mail, Github, MapPin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Interested in collaboration, research, or using Sayanox tools? 
            Reach out directly.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <a
            href="mailto:sm6881164@gmail.com"
            className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">Email</div>
              <div className="text-white font-medium">sm6881164@gmail.com</div>
            </div>
          </a>

          <a
            href="https://github.com/sayan9168"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition">
              <Github className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">GitHub</div>
              <div className="text-white font-medium">sayan9168</div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">Location</div>
              <div className="text-white font-medium">West Bengal, India</div>
            </div>
          </div>

          <a
            href="https://sayanox-enterprises-private-limited.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition">
              <Globe className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">Company Site</div>
              <div className="text-white font-medium">Sayanox Pvt Ltd</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
