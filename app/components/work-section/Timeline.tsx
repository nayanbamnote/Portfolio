"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "./bluechip.svg",
    jobTitle: "React Developer Intern",
    company: "Plazmacloud Technology",
    jobType: "Internship",
    duration: "Sept 2024 - Nov 2024",
    stuffIDid: [
      "Engineered a dynamic and interactive Resume Builder web application for a client, leveraging React.js and Tailwind CSS to ensure seamless UI/UX design and responsiveness across devices.",
      "Integrated multiple REST APIs including authentication (sign-in, sign-up, logout), user management, and CRUD operations for resume and cover letter templates, significantly improving backend interactions.",
      "Developed and designed 20 professional resume templates and 20 cover letter templates, precisely translating Figma designs into pixel-perfect, reusable React components.",
      "Implemented a modular drag-and-drop (DND Kit) system, enabling users to rearrange resume sections dynamically while maintaining state persistence for an intuitive experience.",
      "Integrated Google Gemini AI to simulate ATS (Applicant Tracking System) analysis, providing users with resume optimization scores and AI-driven keyword suggestions for enhanced job application success.",
      "Optimized the resume structure with an interactive auto-save feature, allowing users to edit sections in real-time while implementing smart toolkits for adding, deleting, and modifying content effortlessly.",
      "Enabled seamless resume PDF generation using the jsPDF library, ensuring high-quality document rendering with custom styling and formatting.",
      "Significantly reduced code redundancy through component reusability and modularization, improving maintainability and overall application efficiency.",
      "Collaborated closely with a senior frontend developer to refine UI elements, debug complex issues, and enhance user experience, ensuring a robust and scalable application architecture.",
    ],
  },
  {
    companyImg: "./nnpc.svg",
    jobTitle: "Frontend Developer Intern",
    company: "DevForge Solutions",
    jobType: "Internship",
    duration: "May 2024 - July 2024",
    stuffIDid: [
      "Developed the frontend for an AI-powered eCommerce dashboard using Next.js, Tailwind CSS, and TypeScript, ensuring a seamless and responsive user experience.",
      "Implemented secure authentication flows with Clerk, integrating Google and phone number login to enhance accessibility and security.",
      "Designed and built an interactive product catalog with features such as filtering, sorting, and pagination, improving user navigation and engagement.",
      "Developed dynamic and reusable UI components to optimize code maintainability and scalability across multiple dashboard sections.",
      "Refined the admin panel UI, allowing vendors to manage products and view analytics through an intuitive and accessible interface.",
      "Worked closely with the design team to translate Figma mockups into pixel-perfect frontend implementations, ensuring UI consistency across devices.",
      "Enhanced user interactions by integrating animations and modal transitions for a more engaging experience.",
      "Fixed multiple UI bugs and improved performance optimizations, reducing load times and improving component re-renders.",
      "Participated in daily stand-ups and sprint planning meetings, gaining hands-on experience in an agile development workflow.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
