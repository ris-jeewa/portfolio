import React from "react";
import { words1, words2 } from "../data/header";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconArrowRight } from "@tabler/icons-react";

export const HeaderSection = () => {
  const downloadCV = () => {
    const url ="https://drive.google.com/file/d/1ZOVgkIhpNJQpc8bKqzmp3-Hz6D3uPDkc/view?usp=sharing";
    const file = "RisniCV.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="justify-center items-center flex flex-col md:flex-row md:gap-12 gap-8 mt-[4rem]">
      <div className="flex-shrink-0 flex justify-center md:justify-end order-1 md:order-2">
        <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]">
          <img
            src="https://res.cloudinary.com/dcn64hytu/image/upload/v1774342095/portfolio/profile_vqggnm.jpg"
            alt="Risni Dheerasekara"
            className="w-full h-full object-cover object-top"
            width={300}
            height={360}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
      <div className="order-2 md:order-1 min-h-[220px] w-full max-w-lg md:max-w-none md:w-[44%] flex flex-col text-center md:text-left justify-center items-center md:items-start relative bg-[var(--second-bg-color)]/80 backdrop-blur border border-[var(--second-color)]/20 py-6 px-6 md:px-8 rounded-xl">
        <TypewriterEffectSmooth words={words1} delay={1} />
        <TypewriterEffectSmooth words={words2} delay={4} />
        <p className="text-[var(--second-color)] text-sm md:text-base leading-relaxed mb-5 mt-1">
        Building scalable, real-world systems using Java, Spring Boot, and Next.js

        I specialize in backend development, distributed systems, and performance optimization.
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
