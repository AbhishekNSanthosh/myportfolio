import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Santhosh | Full Stack Developer",
  description:
    "Portfolio of Abhishek Santhosh, a passionate full-stack developer with a backend focus, strong UI/UX sense, and cybersecurity experience.",
  keywords: [
    "Abhishek Santhosh",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
    "Kerala",
    "Software Developer",
  ],
  openGraph: {
    title: "Abhishek Santhosh | Full Stack Developer",
    description:
      "Passionate full-stack developer with a backend focus, strong UI/UX sense, and cybersecurity experience.",
    url: "https://abhisheksanthosh.com",
    siteName: "Abhishek Santhosh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Santhosh - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-zinc-950 text-slate-50 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black"></div>
        {children}
      </body>
    </html>
  );
}
