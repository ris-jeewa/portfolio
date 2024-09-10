import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export const skills = [
  {
    name: "Cloudinary",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fcloudinary.svg?alt=media&token=27dbb89c-75dd-4eba-894c-1daba1dce239",
  },
  {
    name: "CSS",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fcss.svg?alt=media&token=90593df9-1bd5-44cd-a57a-2688967d3892",
  },
  {
    name: "React",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Freact.svg?alt=media&token=dff6fa70-0756-4302-97c3-537331ba3f1b",
  },
  {
    name: "Next JS",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnext.jpeg?alt=media&token=63069384-b9b4-4c87-834b-b2def273a1e0",
  },
  {
    name: "HTML",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fhtml.svg?alt=media&token=74c58f6c-24a2-48bd-9ebf-b0dd0e300e33",
  },
  {
    name: "Nest JS",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnest.svg?alt=media&token=de7403a8-7451-4ec3-8a98-32555ab198cb",
  },
  {
    name: "Javascript",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fjs.svg?alt=media&token=a1f58e08-b640-48a8-b6e6-4de7fc4694f8",
  },
  {
    name: "Typescript",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftypescript.svg?alt=media&token=d190a918-c630-4c41-9b4c-5d7e725d99ab",
  },
  {
    name: "Java",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fjava.svg?alt=media&token=8685e585-8b40-4cb9-a97e-0588fa49363c",
  },
  {
    name: "Python",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fpython.svg?alt=media&token=73f47ee1-9d4b-4778-8a6e-f140e5955d23",
  },
  {
    name: "Spring Boot",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fspring-logo.png?alt=media&token=37ffb903-f75d-4f9f-917d-29660d6a2eee",
  },
];
export const AboutMeSection = () => {
  return (
    <div className=" w-[250px] gap-10 md:w-[800px] flex flex-col justify-center max-w-5xl mx-auto h-full max-h-full mt-[4rem] ">
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
        <div className="mb-[1rem] ml-[2rem]">
          <div className="topic">
            University of Moratuwa <span>( 2022 - Present )</span>
          </div>
          <ul className="ml-[2rem] text-xsm md:text-md">
            <li>
              <span className="font-bold text-orange-200">
                Degree Program 
              </span>
              BSc (Hons) in Information Technology
            </li>
            <li>
              <span className="font-bold text-orange-200">CGPA : </span>3.93
            </li>
            <li>
              <span className="font-bold text-orange-200">Focus : </span>
              In-depth knowledge and practical skills in IT
            </li>
          </ul>
        </div>

        <div className="ml-[2rem]">
          <div className="topic">
            Sujatha Vidyalaya Matara <span>( 2005 - 2019 )</span>
          </div>
          <ul className="ml-[2rem] text-base">
            <li>
              <span className="font-bold text-orange-200">
                Duration of Study :
              </span>
              2005 - 2019
            </li>
            <li>
              <span className="font-bold text-orange-200">
                O/L Medium and Results :
              </span>
              English Medium, 9 A's
            </li>
            <li>
              <span className="font-bold text-orange-200">
                A/L Stream and Results :
              </span>
              Mathematics Stream, AAB
            </li>
          </ul>
        </div>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900  ">
        <div className="uppercase md:text-2xl text-yellow-100 ">Experience</div>
        <div className="place-content-center md:gap-20 gap-10 grid md:grid-rows-2 grid-rows-4 grid-flow-col ">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col relative">
              <img
                src={skill.link}
                height={60}
                width={60}
                alt="image"
                className="rounded-md w-12 md-20"
              />
              <p className="whitespace-nowrap  absolute md:top-18 top-14 ">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </BackgroundGradient>
    </div>
  );
};
