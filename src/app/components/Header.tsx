import React from "react";
import Image from "next/image";
import { words1, words2 } from "../data/header";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconArrowRight } from "@tabler/icons-react";
// import "../styles/header.css";

export const HeaderSection = () => {
  return (
    <div className="justify-center flex flex-col md:flex-row md:gap-0 gap-[2rem] align-center mt-[4rem]">
      <div className="w-[50%] md:w-[40%] justify-center align-center ml-[6rem]">
        <div className="rounded-[5%] border-[2px] border-[var(--main-color)] shadow-[0_0_20px_var(--main-color)] bg-[var(--bg-color)] md:max-w-[250px] max-w-[100px]  ">
          <Image
            src="/images/profile-img.png"
            alt="image"
            className="transform rotate-[-15deg] rounded-[5%] bg-[var(--main-color)] max-w-[250px]"
            width={200}
            height={200}
            layout="responsive"
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
        >
          Download my CV
          <IconArrowRight className="ml-4" size={15}/>
        </HoverBorderGradient>
      </div>
    </div>
  );
};
