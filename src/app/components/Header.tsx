import React from "react";
import Image from "next/image";
import { words1, words2 } from "../data/header";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconArrowRight } from "@tabler/icons-react";

export const HeaderSection = () => {
  const downloadCV = () => {
    const url ="https://drive.google.com/file/d/11XlXtx47x8djLeHi0iWDsEK2tMTpyIZ4/view?usp=sharing"
    const file = "RisniCV.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="justify-center flex flex-col md:flex-row md:gap-12 gap-8 align-center mt-[4rem]">
      <div className="w-[50%] md:w-[36%] justify-center align-center ml-[6rem]">
        <div className="transform rotate-[6deg] rounded-xl border border-[var(--main-color)]/40 bg-[var(--second-bg-color)] w-[150px] h-[150px] md:w-[240px] md:h-[260px] overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/profile.jpg?alt=media&token=4432f3cb-3830-424d-9845-d30fd93b3016"
            alt="Risni Dheerasekara"
            className="transform rotate-[-6deg] scale-110 rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="min-h-[220px] w-[90%] md:w-[44%] flex flex-col text-left justify-center relative bg-[var(--second-bg-color)]/80 backdrop-blur border border-[var(--second-color)]/20 py-6 px-6 md:px-8 rounded-xl">
        <TypewriterEffectSmooth words={words1} delay={1} />
        <TypewriterEffectSmooth words={words2} delay={4} />
        <p className="text-[var(--second-color)] text-sm md:text-base leading-relaxed mb-5 mt-1">
          Full-stack developer focused on building scalable web applications. I enjoy turning complex problems into simple solutions and collaborating with teams to ship quality software.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full w-[200px] h-[48px]"
          as="button"
          className="bg-gradient-to-r from-[var(--main-color)] to-rose-500 text-white flex items-center justify-center gap-2 text-sm font-semibold border-0"
          onClick={downloadCV}
        >
          Download my CV
          <IconArrowRight size={18} />
        </HoverBorderGradient>
      </div>
    </div>
  );
};
