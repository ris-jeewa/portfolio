import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const profileSummary = 
"Full Stack Developer and final year IT undergraduate at the University of Moratuwa, with over a year of experience in building scalable web applications. Skilled in modern backend and frontend technologies, with experience in cloud platforms and distributed systems. Passionate about solving real-world problems and building efficient, impactful software."
const personalInfo = [
  { label: "Name", value: "Risni Dheerasekara" },
  { label: "Email", value: "risni.jeewa@gmail.com" },
  { label: "Phone", value: "+94 70 3797 074" },
  { label: "Languages", value: "English | Sinhala" },
];



const workExperience = [
  {
    period: "Jul 2025 – Present",
    title: "Associate Full Stack Developer",
    company: "iVedha Inc.",
    tech: "Rust · React · TypeScript · Node.js · Spring Boot · MySQL · Docker · Azure · GCP · Pulumi · Grafana · Kubernetes · REST APIs",
  },
  {
    period: "Dec 2024 – Jun 2025",
    title: "Intern Full Stack Developer",
    company: "iVedha Inc.",
    tech: "Rust · Node.js · React · TypeScript · PostgreSQL · Docker · GCP · Apigee · Airflow · RBAC · REST APIs",
  },
];

const education = [
  {
    period: "2022 – Present",
    title: "B.Sc. (Hons) in Information Technology",
    institution: "University of Moratuwa",
    details: [
      "CGPA: 3.93 out of 4.0",
      "Dean's list in all semesters",
      "4.0 SGPA in semester 3 and 4",
    ],
  },
  {
    period: "2020",
    title: "G.C.E. Advanced Level",
    institution: "Sujatha Vidyalaya Matara",
    details: [
      "Stream: Physical Science (Index No: 2033679)",
      "Combined Mathematics: A, Chemistry: A, Physics: B",
    ],
  },
  {
    period: "2016",
    title: "G.C.E. Ordinary Level",
    institution: "Sujatha Vidyalaya Matara",
    details: ["9 A's (English Medium)", "Index No: 61034363"],
  },
];


export const AboutMeSection = () => {
  return (
    <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 mt-10 flex flex-col gap-10">
      {/* About Me / Profile */}
      <BackgroundGradient className="rounded-xl p-6 sm:p-10 bg-[var(--second-bg-color)] border border-[var(--second-color)]/20">
        <div className="uppercase md:text-lg font-medium tracking-wider text-[var(--main-color)] mb-4">
          About Me
        </div>
        <p className="text-[var(--text-color)] text-sm md:text-base leading-relaxed mb-6">
          {profileSummary}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-base mb-6">
          {personalInfo.map((item, i) => (
            <p key={i}>
              <span className="font-medium text-[var(--second-color)]">{item.label}:</span>{" "}
              <span className="text-[var(--text-color)]">{item.value}</span>
            </p>
          ))}
        </div>

      </BackgroundGradient>

      {/* Job Experience */}
      <BackgroundGradient className="rounded-xl p-6 sm:p-10 bg-[var(--second-bg-color)] border border-[var(--second-color)]/20">
        <div className="uppercase md:text-lg font-medium tracking-wider text-[var(--main-color)] mb-6">
          Work Experience
        </div>
        <div className="relative pl-8 border-l-2 border-[var(--main-color)]/30 space-y-8">
          {workExperience.map((job, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-[var(--main-color)] ring-4 ring-[var(--second-bg-color)]" />
              <div className="text-xs font-medium text-[var(--main-color)] mb-1">
                {job.period}
              </div>
              <h3 className="text-[var(--text-color)] font-semibold text-lg">
                {job.title}
              </h3>
              <p className="text-[var(--second-color)] text-sm mb-2">{job.company}</p>
              <p className="text-xs text-[var(--second-color)]">{job.tech}</p>
            </div>
          ))}
        </div>
      </BackgroundGradient>

      {/* Academic Qualification */}
      <BackgroundGradient className="rounded-xl p-6 sm:p-10 bg-[var(--second-bg-color)] border border-[var(--second-color)]/20">
        <div className="uppercase md:text-lg font-medium tracking-wider text-[var(--main-color)] mb-6">
          Education
        </div>
        <div className="relative pl-8 border-l-2 border-[var(--main-color)]/30 space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-[var(--main-color)] ring-4 ring-[var(--second-bg-color)]" />
              <div className="text-xs font-medium text-[var(--main-color)] mb-1">
                {edu.period}
              </div>
              <h3 className="text-[var(--text-color)] font-semibold text-lg">
                {edu.title}
              </h3>
              <p className="text-[var(--second-color)] text-sm mb-2">{edu.institution}</p>
              <ul className="list-disc list-inside text-sm text-[var(--text-color)] space-y-0.5">
                {edu.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BackgroundGradient>

    </div>
  );
};
