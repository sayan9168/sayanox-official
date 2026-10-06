import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">
              Sayanox<span className="text-cyan-400">®</span>
            </span>
          </div>

          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} Sayanox Private Limited. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            Founded by Sayan Mahata (Sayan The Researcher)
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a
              href="https://github.com/sayan9168"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://github.com/sayan9168/sayanox-license"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
