import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nayan Bamnote — Full-Stack Software Developer",
  description:
    "A Full-Stack Developer passionate about transforming ideas into seamless digital solutions. I craft user experiences that balance aesthetics and functionality, leveraging modern tools and frameworks. From building personal projects to solving real-world problems, I thrive on creating impactful web applications.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "UI/UX Design",
    "Creative Web Developer",
    "Frontend Engineer",
    "Full-Stack Developer",
    "Developer Portfolio",
    "Modern Web Development",
    "Creative Solutions",
    "Nigeria Tech Community",
    "Software Engineer",
    "Software Developer",
    "Tech Enthusiast",
    "Interactive UI Development",
    "Web Development Portfolio",
    "JavaScript Frameworks",
    "Next.js",
    "Tailwind CSS",
    "TypeScript Developer",
    "Innovative Web Solutions"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
