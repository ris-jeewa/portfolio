"use client";
import React from "react";
import { FloatingNav } from "./components/ui/floating-navbar";
import {
  IconArrowAutofitRight,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome,
  IconMessage,
  IconUser,
  IconArrowRight,
} from "@tabler/icons-react";
import Image from "next/image";
import "./styles/home.css";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { Vortex } from "./components/ui/vortex";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import Link from "next/link";
import { motion } from "framer-motion";
import { LampContainer } from "./components/ui/lamp";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { TracingBeam } from "./components/ui/tracing-beam";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import { content } from "./data/services";
import { Contact } from "./components/Contact";
import { navItems, words1, words2 } from "./data/header";
import { HeaderSection } from "./components/Header";
import { media } from "./data/media";
import { About } from "./components/About";


const Home = () => {
  return (
    <div className="container">
      <FloatingNav navItems={navItems} />
      <Page />
    </div>
  );
};


const Page = () => {
  return (
    <div>
      <div className="container h-[30rem] relative mt-8 px-14">
        <Vortex className="z-0">
          <div className=" flex justify-between flex-wrap z-10">
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
            <HeaderSection />
          </section>
        </Vortex>

        <div className="absolute right-5 bottom-[50px] flex flex-col gap-4">
        {media.map((media,index) => (
            <Link href={media.link} key={index}>
                {media.icon}
            </Link>
        ))}
        </div>
      </div>

      <TracingBeam>
        <section className="aboutme" id="aboutme">
        
          <h1 className="mt-3 bg-gradient-to-br from-yellow-300 to-slate-500 py- bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl drop-shadow-lg font-extrabold">
            About Me
          </h1>
          <About />
        </section>
      </TracingBeam>
      <section className="services" id="services">
        <h1 className="mt-3 mb-3 bg-gradient-to-br from-yellow-300 to-slate-500 py- bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl drop-shadow-lg font-extrabold">
          Services
        </h1>
        <StickyScroll content={content} />
      </section>

      <section className="services" id="services">
        <h1 className="mt-3 mb-3 bg-gradient-to-br from-yellow-300 to-slate-500 py- bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl drop-shadow-lg font-extrabold">
          Let's Talk
        </h1>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
