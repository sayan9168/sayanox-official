export interface Project {
  id: string;
  name: string;
  description: string;
  category: "Language" | "Security" | "DevTools" | "AI" | "Infrastructure" | "Research";
  github: string;
  live?: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "sayanox",
    name: "Sayanox Language",
    description: "Completely original programming language with its own self-hosting compiler. File extension .sa. Built from first principles in systems programming.",
    category: "Language",
    github: "https://github.com/sayan9168/sayanox",
    tags: ["Compiler", "Self-hosting", "Systems", "Rust/C"],
    featured: true,
  },
  {
    id: "forge",
    name: "SAYANOX FORGE",
    description: "Local-first developer engineering, security analysis, project health and code intelligence platform. Privacy-first browser-native workspace.",
    category: "DevTools",
    github: "https://github.com/sayan9168/SAYANOX-FORGE",
    live: "https://sayanox-forge.vercel.app",
    tags: ["Security Scanner", "Static Analysis", "Local-first", "React"],
    featured: true,
  },
  {
    id: "devtools",
    name: "SAYANOX DevTools",
    description: "Powerful local-first VS Code developer toolkit for code analysis, security scanning, project health and optional local AI.",
    category: "DevTools",
    github: "https://github.com/sayan9168/SAYANOX-DEVTOOLS",
    tags: ["VS Code", "Security", "Productivity", "TypeScript"],
    featured: true,
  },
  {
    id: "sentinel-os",
    name: "Sayanox Sentinel OS",
    description: "Autonomous AI-powered system security & PC operations suite featuring real-time web terminal, ML anomaly detection, FIM and dynamic firewall.",
    category: "Security",
    github: "https://github.com/sayan9168/sayanox-sentinel-os",
    tags: ["AI Security", "Endpoint", "Anomaly Detection", "Python"],
    featured: true,
  },
  {
    id: "guardrail-x",
    name: "Sayanox Guardrail-X",
    description: "AI red-teaming engine for LLM guardrail evaluation and adversarial testing.",
    category: "AI",
    github: "https://github.com/sayan9168/sayanox-guardrail-x",
    tags: ["LLM Security", "Red Teaming", "AI Safety"],
    featured: true,
  },
  {
    id: "nexus-osint",
    name: "Nexus OSINT",
    description: "AI-native OSINT and 3D link analysis platform for intelligence gathering and visualization.",
    category: "Security",
    github: "https://github.com/sayan9168/nexus-osint",
    tags: ["OSINT", "3D Visualization", "AI", "Intelligence"],
    featured: true,
  },
  {
    id: "netracore",
    name: "Project NetraCore",
    description: "Enterprise-grade government cyber-defense & forensic engine with zero-trust architecture and cryptographic evidence ledger.",
    category: "Security",
    github: "https://github.com/sayan9168/Project_NetraCore",
    tags: ["Forensics", "Zero-Trust", "Cryptography", "Enterprise"],
    featured: true,
  },
  {
    id: "neural-ghost",
    name: "Neural Ghost Protocol",
    description: "Advanced AI-resistant steganography tool that injects adversarial noise and encrypted payloads into images.",
    category: "Security",
    github: "https://github.com/sayan9168/neural-ghost-protocol",
    tags: ["Steganography", "AI-Resistant", "Cryptography"],
  },
  {
    id: "falconcore",
    name: "FalconCore",
    description: "Secure AI-native programming language with native runtime, VM, and built-in security primitives.",
    category: "Language",
    github: "https://github.com/sayan9168/FalconCore",
    tags: ["Language", "VM", "AI-Native", "Security"],
  },
  {
    id: "pulsemq",
    name: "Sayanox PulseMQ",
    description: "High-performance event streaming platform built for scale and low latency.",
    category: "Infrastructure",
    github: "https://github.com/sayan9168/Sayanox-PulseMQ",
    tags: ["Messaging", "Streaming", "Rust", "High-Performance"],
  },
  {
    id: "sayanox-license",
    name: "Sayanox License",
    description: "Advanced open-source license with strong attribution, developer protection and commercial-friendly terms.",
    category: "Research",
    github: "https://github.com/sayan9168/sayanox-license",
    tags: ["Open Source", "License", "Legal"],
  },
  {
    id: "sayanox-chain",
    name: "Sayanox Chain",
    description: "Next-generation Layer 1 blockchain built from scratch in Go, focused on security, scalability and decentralization.",
    category: "Infrastructure",
    github: "https://github.com/sayan9168/sayanox-chain",
    tags: ["Blockchain", "L1", "Go", "Distributed Systems"],
  },
  {
    id: "fastbuild",
    name: "FastBuild-Core",
    description: "High-performance parallel build accelerator & global binary caching engine for Linux and Termux.",
    category: "DevTools",
    github: "https://github.com/sayan9168/fastbuild-core",
    tags: ["Build Tool", "Caching", "Performance", "CLI"],
  },
  {
    id: "clipforge",
    name: "SAYANOX CLIPFORGE",
    description: "AI-powered video clipping tool that analyzes videos, identifies engaging moments and creates share-ready clips.",
    category: "AI",
    github: "https://github.com/sayan9168/SAYANOX-CLIPFORGE",
    tags: ["AI", "Video", "Content Creation"],
  },
];

export const categories = ["All", "Language", "Security", "DevTools", "AI", "Infrastructure", "Research"] as const;
