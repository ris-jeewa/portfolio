"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconArrowAutofitRight,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconHome,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import "../styles/navbar.css";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Vortex } from "./ui/vortex";
import { Linkedin, Github } from "lucide-react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export const navItems = [
  {
    name: "About Me",
    link: "/aboutme",
    icon: (
      <IconUser className="h-4 w-4 text-neutral-500 dark:text-white inline" />
    ),
  },
  {
    name: "Skills",
    link: "/skills",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const words1 = [
  {
    text: "Hello",
  },
  {
    text: "I'm",
  },
  {
    text: "Risni",
    className: "text-yellow-500 dark:text-blue-500 /n",
  },
  {
    text: "Dheerasekara.",
    className: "text-yellow-500 dark:text-blue-500 /n",
  },
];

export const words2 = [
  {
    text: "An",
  },
  {
    text: "IT",
  },
  {
    text: "Student",
    className: "text-yellow-500 dark:text-blue-500 /n",
  },
];

export function FloatingNavDemo() {
  return (
    <div className="container">
      <Vortex className="z-0">
        <FloatingNav navItems={navItems} />
        <Navbar />
      </Vortex>
    </div>
  );
}
const Navbar = () => {
  return (
    <div className="container h-[30rem] relative mt-8 px-14">
      <div className=" flex justify-between flex-wrap">
        <p className="logo">
          <span>Risni</span> Dheerasekara
        </p>
        <div className="navbar">
          {navItems.map((item, index) => (
            <a key={index} className="navbar">
              {item.name}
            </a>
          ))}
        </div>
        <Image
          src="/images/avatar.png"
          alt="image"
          className="h-10 w-10"
          width={60}
          height={5}
        />
      </div>

      <section className="home" id="home">
        <div className="profile-box">
          <Image
            src="/images/profile-img.png"
            alt="image"
            className="profile-img"
            width={300}
            height={300}
          />
        </div>
        <div className="home-content">
          <TypewriterEffectSmooth words={words1} delay={1} />
          <TypewriterEffectSmooth words={words2} delay={4} />
          <p>
            A highly adaptable individual with a strong aptitude for rapid
            learning and problem-solving. I am enthusiastic and open to
            acquiring new knowledge and skills to thrive in diverse
            environments. I am passionate about full-stack development,
            committed to addressing challenges with a proactive,
            solutionsoriented approach, and possess strong teamwork skills to
            contribute effectively in collaborative environments.
          </p>
          <HoverBorderGradient
            containerClassName="rounded-full absolute bottom-3 right-6 "
            as="button"
            className="bg-black text-white flex items-center space-x-2 "
          >
            More About Me
            <IconArrowAutofitRight />
          </HoverBorderGradient>
        </div>
      </section>
      <div className="border-2 border-white-500">
        <Linkedin />
        <IconBrandGithub />
        <IconBrandFacebook />
        <IconBrandInstagram />
      </div>
    </div>
  );
};
