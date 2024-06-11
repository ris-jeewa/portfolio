import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { link } from "fs";

export const skills = [
  {
    name: "Cloudinary",
    link: "/images/skills/cloudinary.svg",
  },
  {
    name: "CSS",
    link: "/images/skills/css.svg",
  },
  {
    name: "React",
    link: "/images/skills/react.svg",
  },
  {
    name: "Next JS",
    link: "/images/skills/next.jpeg",
  },
  {
    name: "HTML",
    link: "/images/skills/html.svg",
  },
  {
    name: "Nest JS",
    link: "/images/skills/nest.svg",
  },
  {
    name: "Javascript",
    link: "/images/skills/js.svg",
  },
  {
    name: "Typescript",
    link: "/images/skills/typescript.svg",
  },
  {
    name: "Java",
    link: "/images/skills/java.svg",
  },
  {
    name: "Python",
    link: "/images/skills/python.svg",
  },
];
export const AboutMeSection = () => {
  return (
    <div className="ml-[50px] w-[250px] md:ml-0 flex flex-col gap-10 md:w-[800px]">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900 ">
        <div className="uppercase md:text-2xl text-yellow-100 ">
          Personal Infos
        </div>
        <div className="grid md:grid-cols-2 text-xsm md:text-md ml-[5%]">
          <p>
            <span className="font-bold text-slate-400">First Name:</span> Risni
          </p>
          <p>
            <span className="font-bold text-slate-400">Last Name:</span>{" "}
            Dheerasekara
          </p>
          <p>
            <span className="font-bold text-slate-400">Age:</span> 24 Years
          </p>
          <p>
            <span className="font-bold text-slate-400">Languages:</span>{" "}
            English, Sinhala
          </p>
          <p>
            <span className="font-bold text-slate-400">Phone:</span> (+94) 70
            3797 074
          </p>
          <p>
            <span className="font-bold text-slate-400">Email:</span>{" "}
            risni.jeewa@gmail.com
          </p>
        </div>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900 ">
        <div className="uppercase md:text-2xl  text-yellow-100 ">Education</div>
        <div className="mb-[4rem] ml-[2rem]">
          <div className="topic">
            University of Moratuwa <span>( 2022 - Present )</span>
          </div>
          <p className="ml-[2rem] text-xsm md:text-md">
            Pursuing a BSc (Hons) in Information Technology at the University of
            Moratuwa, I&apos;m acquiring in-depth knowledge and practical skills
            in IT. The university&apos;s rigorous academics and advanced
            facilities prepare me to thrive in the rapidly evolving tech
            industry.
          </p>
        </div>

        <div className="ml-[2rem]">
          <div className="topic">
            Sujatha Vidyalaya Matara <span>( 2005 - 2019 )</span>
          </div>
          <p className="ml-[2rem]">
            I attended Sujatha Vidyalaya in Matara from 2005 to 2019, excelling
            in my Ordinary Level exams with 9 A&apos;s in English and achieving
            AAB in the Mathematics stream for Advanced Levels. My education
            there laid a solid foundation in academics and personal growth,
            well-preparing me for higher education and future challenges.
          </p>
        </div>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900  ">
        <div className="uppercase md:text-2xl text-yellow-100 ">Experience</div>
        <div className="place-content-center md:gap-20 gap-10 grid md:grid-rows-2 grid-rows-4 grid-flow-col ">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col relative">
              <Image
                src={skill.link}
                height={60}
                width={60}
                alt="image"
                className="rounded-md w-12 md-20"
              />
              <p className="whitespace-nowrap  absolute md:top-18 top-14 mb-8">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </BackgroundGradient>
    </div>
  );
};
