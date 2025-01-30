import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "CaseCobra",
      gitLink: "https://github.com/nayanbamnote/casecobra.git",
      liveLink: "https://casecobra-two-drab.vercel.app/",
      about:
        "CaseCobra is a custom phone case ordering platform that allows users to design their own phone cases with personalized images and styles. The application integrates secure authentication via Clerk and payment processing via Stripe, providing a seamless user experience for creating and purchasing custom phone cases.",
      stack: ["next.js", "react", "supabase", "prisma", "clerk", "stripe"],
      img: "./casecobraimage.png",
    },
    {
      title: "BDCOE Student Portal",
      gitLink: "https://github.com/nayanbamnote/bdcoe.git",
      liveLink: "https://bdcoe.vercel.app/",
      about:
        "BDCOE Student Portal is a sophisticated web application built to digitalize the traditional mentor-mentee form system for the Computer Department. The platform streamlines the process of collecting and managing student information, replacing paper-based forms with a modern digital solution.",
      stack: ["next.js", "react", "typescript", "tailwindcss", "clerk", "prisma", "edgestore", "shadcn/ui", "framer-motion"],
      img: "./bdcoeimage.png",
    },
    {
      title: "AI Resume Builder",
      gitLink: "https://github.com/nayanbamnote/AI_Resume_Builder.git",
      liveLink: "https://ai-resume-builder-alpha.vercel.app/",
      about:
        "AI Resume Builder is a modern web application that helps users create professional resumes with AI assistance. The platform offers an intuitive interface for building customized resumes with features like AI-powered content generation, real-time preview, and multiple resume management.",
      stack: ["vite", "react", "clerk", "google-generative-ai", "shadcn/ui", "react-to-pdf"],
      img: "./aibuilder.png",
    },
    {
      title: "VidConnect",
      gitLink: "https://github.com/nayanbamnote/VidConnect.git",
      liveLink: "https://vid-connect-three.vercel.app/",
      about:
        "VidConnect is a versatile video conferencing and management application designed for seamless communication and collaboration. It provides robust functionality for managing meetings and recordings with secure authentication via Clerk, and integrates advanced chat, video, and feeds features using Stream.",
      stack: ["next.js", "react", "clerk", "stream"],
      img: "./vidconnectimage.png",
    },    
    {
      title: "TrendyMart",
      gitLink: "https://github.com/nayanbamnote/TrendyMart.git",
      liveLink: "https://trendy-mart-pi.vercel.app/",
      about:
        "This is a modern eCommerce website built with Next.js and TypeScript. The site provides a seamless shopping experience with user authentication and a user-friendly interface for browsing products, managing a shopping cart, and more.",
      stack: ["next.js", "react", "clerk", "tailwindcss", "shadcn/ui"],
      img: "./trendymart.png",
    },    
    {
      title: "Birthday Website",
      gitLink: "https://github.com/nayanbamnote/toshita_birthday.git",
      liveLink: "https://toshita-birthday.vercel.app/",
      about:
        "A heartfelt birthday celebration website built for Toshita, featuring an interactive starry night theme with animated elements, video messages from family members, and a real-time message wall where visitors can leave birthday wishes. The site combines stunning visuals with personal touches to create a memorable digital birthday experience.",
      stack: ["next.js", "react", "typescript", "MongoDB", "tailwindcss", "framer-motion", "Prisma", "canvas-confetti", "TSParticles"],
      img: "./download.jpg",
    },
    {
      title: "User Registration Form",
      gitLink: "https://github.com/nayanbamnote/Bilateral-Solution-Assignment.git",
      liveLink: "https://bilateral-solution-assignment.vercel.app/",
      about:
        "This is a user registration form built with Next.js and TypeScript. This project was completed as part of an assignment to create a form with data binding and submission handling. It demonstrates proper implementation of reactive forms, two-way data binding, form validation, and submission handling.",
      stack: ["next.js", "react", "React Hook Form", "Zod", "Shadcn UI components", "Aceternity UI"],
      img: "./Form.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
