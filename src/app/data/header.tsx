import {
    IconUser,
    IconCode,
    IconBriefcase,
    IconMail,
  } from "@tabler/icons-react";

export const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#aboutme",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#portfolio",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  
  export const words1 = [
    { text: "Hi, " },
    { text: "I'm " },
    {
      text: "Risni Dheerasekara",
      className: "text-[var(--main-color)]",
    },
  ];
  
  export const words2 = [
    { text: "Software " },
    {
      text: "Engineer",
      className: "text-[var(--main-color)]",
    },
  ];
  