import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sayanox-official-e1oj.vercel.app"),
  title: {
    default: "Sayanox Private Limited | Original Languages, Security Tools & Systems",
    template: "%s | Sayanox Private Limited",
  },
  description:
    "Sayanox Private Limited — Founded by Sayan Mahata (Sayan The Researcher). Creators of the Sayanox programming language, SAYANOX FORGE, Sentinel OS, Guardrail-X, Nexus OSINT, NetraCore and 90+ open-source security & systems projects.",
  keywords: [
    "Sayanox",
    "Sayanox Private Limited",
    "Sayan Mahata",
    "Sayan The Researcher",
    "sayan9168",
    "Sayanox language",
    "programming language",
    "compiler",
    "cybersecurity",
    "OSINT",
    "AI security",
    "local-first",
    "developer tools",
    "West Bengal",
    "India",
  ],
  authors: [{ name: "Sayan Mahata", url: "https://github.com/sayan9168" }],
  creator: "Sayan Mahata",
  publisher: "Sayanox Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sayanox-official-e1oj.vercel.app",
    siteName: "Sayanox Private Limited",
    title: "Sayanox Private Limited | Original Languages, Security Tools & Systems",
    description:
      "Founded by Sayan Mahata. Original programming languages, AI-powered security platforms and local-first developer tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sayanox Private Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayanox Private Limited",
    description:
      "Original languages, security tools & systems by Sayan Mahata (Sayan The Researcher)",
    creator: "@notfound_sayan",
  },
  alternates: {
    canonical: "https://sayanox-official-e1oj.vercel.app",
  },
  category: "technology",
  verification: {
    google: "uyb7Y9wXsprQjKNrrv9c71J_s-F7AOYX7fBlZJFEY5c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="uyb7Y9wXsprQjKNrrv9c71J_s-F7AOYX7fBlZJFEY5c" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sayanox Private Limited",
              url: "https://sayanox-official-e1oj.vercel.app",
              logo: "https://sayanox-official-e1oj.vercel.app/logo.png",
              description:
                "Technology company building original programming languages, AI-powered security tools and local-first developer platforms.",
              foundingDate: "2025",
              founder: {
                "@type": "Person",
                name: "Sayan Mahata",
                alternateName: ["Sayan The Researcher", "sayan9168"],
                url: "https://github.com/sayan9168",
                sameAs: [
                  "https://github.com/sayan9168",
                  "https://sayan9168-github-io.sm6881164.workers.dev/",
                ],
              },
              sameAs: [
                "https://github.com/sayan9168",
                "https://sayanox-enterprises-private-limited.vercel.app/",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
