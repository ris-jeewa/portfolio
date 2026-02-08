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
      <div className="flex-shrink-0 flex justify-center md:justify-end order-1 md:order-2">
        <div className="relative w-[200px] h-[240px] sm:w-[260px] sm:h-[300px] md:w-[300px] md:h-[360px] rounded-[1.75rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/profile.jpg?alt=media&token=4432f3cb-3830-424d-9845-d30fd93b3016"
            alt="Risni Dheerasekara"
            className="w-full h-full object-cover object-top"
            width={300}
            height={360}
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
