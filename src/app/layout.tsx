import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Umair Inayat | Computer Vision Engineer & AI Researcher",
  description:
    "Portfolio of Umair Inayat — Computer Vision Engineer & AI Researcher specializing in PyTorch, LLMs, RAG systems, and production AI. 43+ projects, competition placements, and open-source contributions.",
  keywords: [
    "Umair Inayat",
    "Computer Vision Engineer",
    "AI Researcher",
    "Machine Learning",
    "PyTorch",
    "Deep Learning",
    "NLP",
    "LLMs",
    "Portfolio",
  ],
  authors: [{ name: "Umair Inayat" }],
  openGraph: {
    title: "Umair Inayat | Computer Vision Engineer & AI Researcher",
    description:
      "Building production AI systems at the edge. 43+ projects in CV, NLP, LLMs, and full-stack AI.",
    url: "https://umairinayat.github.io",
    siteName: "Umair Inayat Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umair Inayat | CV Engineer & AI Researcher",
    description:
      "Building production AI systems at the edge. 43+ projects in CV, NLP, LLMs.",
    creator: "@umairstuff",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Umair Inayat",
  url: "https://umairinayat.github.io",
  jobTitle: "Computer Vision Engineer",
  worksFor: { "@type": "Organization", name: "Startup" },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Management and Technology",
  },
  sameAs: [
    "https://github.com/umairinayat",
    "https://www.linkedin.com/in/umairinayat/",
    "https://x.com/umairstuff",
    "https://www.kaggle.com/umairinayat",
  ],
  knowsAbout: [
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Large Language Models",
    "PyTorch",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
