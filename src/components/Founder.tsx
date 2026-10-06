"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet the <span className="text-cyan-400">Founder</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-cyan-500/20">
                SM
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">
                Sayan Mahata
              </h3>
              <p className="text-cyan-400 font-medium mb-4">
                Founder & System Architect · Sayan The Researcher · sayan9168
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                System Architect and Security Researcher from West Bengal, India. 
                Creator of the original <strong className="text-white">Sayanox programming language</strong> (.sa), 
                designer of the Sayanox License, and builder of 90+ open-source projects 
                spanning compilers, cybersecurity, OSINT, digital forensics and developer tooling.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href="https://github.com/sayan9168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://sayan9168-github-io.sm6881164.workers.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Portfolio
                </a>
                <a
                  href="mailto:sm6881164@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
