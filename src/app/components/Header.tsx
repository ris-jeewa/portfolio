import React from "react";
import Image from "next/image";
import { words1, words2 } from "../data/header";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconArrowRight } from "@tabler/icons-react";

export const HeaderSection = () => {
  const downloadCV = () => {
    const url="https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/Risni%20Dheerasekara.pdf?alt=media&token=a10f17d3-c521-4c9b-bca2-d8b3fb4455ba";
    const file = "RisniCV.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="justify-center flex flex-col md:flex-row md:gap-0 gap-[2rem] align-center mt-[4rem]">
      <div className="w-[50%] md:w-[40%] justify-center align-center ml-[6rem]">
        <div className="rounded-[5%] border-[2px] border-[var(--main-color)] shadow-[0_0_20px_var(--main-color)] bg-[var(--bg-color)] w-[150px] h-[150px] md:w-[250px] md:h-[280px] ">
          <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/profile-img.png?alt=media&token=9bfa43cb-f29e-4235-afdc-93e81f59081e"
            alt="image"
            className="transform rotate-[-15deg] rounded-[5%] bg-[var(--main-color)] max-w-[250px] w-[150px] h-[160px] md:w-[310px] md:h-[280px]"
          
          />
        </div>
      </div>
      <div className="h-[250px] w-[90%] md:w-[40%] flex flex-col text-left justify-center relative bg-[rgba(145,147,149,0.4)] py-0 px-[3rem] rounded-2xl ">
        <TypewriterEffectSmooth words={words1} delay={1} />
        <TypewriterEffectSmooth words={words2} delay={4} />
        <p className="mb-4">
          A quick learner and problem-solver, passionate about full-stack
          development, proactive in facing challenges, and fostering teamwork
          for effective collaboration.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full absolute bottom-3 right-6 w-[180px] md:w-[200px] md:h-[50px] h-[40px] "
          as="button"
          className="bg-black text-white flex items-center md:space-x-2 "
          onClick={downloadCV}
        >
          Download my CV
          <IconArrowRight className="ml-4" size={15}/>
        </HoverBorderGradient>
      </div>
    </div>
  );
};
