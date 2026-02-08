import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const profileSummary =
  "Professional Full Stack Engineer with over a year of experience and proficiency in developing scalable web applications. Skilled in both backend and frontend technologies, cloud platforms, and workflow automation. Strong problem-solving abilities with a background in R&D and collaborative team projects. Motivated to contribute to innovative solutions while continuously expanding technical expertise.";

const personalInfo = [
  { label: "First Name", value: "Risni" },
  { label: "Last Name", value: "Dheerasekara" },
  { label: "Email", value: "risni.jeewa@gmail.com" },
  { label: "Phone", value: "+94 70 3797 074" },
  { label: "Languages", value: "English (Fluent), Sinhala (Native)" },
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
    title: "Software Engineer Intern – Full Stack Developer",
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

export const skills = [
  { name: "Cloudinary", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fcloudinary.svg?alt=media&token=27dbb89c-75dd-4eba-894c-1daba1dce239" },
  { name: "CSS", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fcss.svg?alt=media&token=90593df9-1bd5-44cd-a57a-2688967d3892" },
  { name: "React", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Freact.svg?alt=media&token=dff6fa70-0756-4302-97c3-537331ba3f1b" },
  { name: "Next JS", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnext.jpeg?alt=media&token=63069384-b9b4-4c87-834b-b2def273a1e0" },
  { name: "HTML", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fhtml.svg?alt=media&token=74c58f6c-24a2-48bd-9ebf-b0dd0e300e33" },
  { name: "Nest JS", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnest.svg?alt=media&token=de7403a8-7451-4ec3-8a98-32555ab198cb" },
  { name: "Javascript", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fjs.svg?alt=media&token=a1f58e08-b640-48a8-b6e6-4de7fc4694f8" },
  { name: "Typescript", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftypescript.svg?alt=media&token=d190a918-c630-4c41-9b4c-5d7e725d99ab" },
  { name: "Java", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fjava.svg?alt=media&token=8685e585-8b40-4cb9-a97e-0588fa49363c" },
  { name: "Python", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fpython.svg?alt=media&token=73f47ee1-9d4b-4778-8a6e-f140e5955d23" },
  { name: "Spring Boot", link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fspring-logo.png?alt=media&token=37ffb903-f75d-4f9f-917d-29660d6a2eee" },
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
          Academic Qualification
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

      {/* Tech Stack */}
      <BackgroundGradient className="rounded-xl p-6 sm:p-10 bg-[var(--second-bg-color)] border border-[var(--second-color)]/20">
        <div className="uppercase md:text-lg font-medium tracking-wider text-[var(--main-color)] mb-6">
          Tech Stack
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img
                src={skill.link}
                height={48}
                width={48}
                alt={skill.name}
                className="rounded-lg w-12 h-12 object-contain"
              />
              <span className="text-xs text-[var(--text-color)] text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </BackgroundGradient>
    </div>
  );
};
