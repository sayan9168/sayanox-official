"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects, categories, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Open-source tools, languages and platforms built by Sayanox Private Limited — 
            focused on performance, security and developer experience.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition",
                active === cat
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-700"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/sayan9168?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            View all 90+ repositories on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition card-hover"
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        </div>
      )}

      <div className="mb-3">
        <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          {project.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
        {project.name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded bg-slate-800 text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </a>
        )}
      </div>
    </motion.article>
  );
}
