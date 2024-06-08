"use client";
import React from "react";
import { FloatingNav } from "./components/ui/floating-navbar";
import Image from "next/image";
import "./styles/home.css";
import { Vortex } from "./components/ui/vortex";
import Link from "next/link";
import { TracingBeam } from "./components/ui/tracing-beam";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import { content } from "./data/services";
import { Contact } from "./components/Contact";
import { navItems, words1, words2 } from "./data/header";
import { HeaderSection } from "./components/Header";
import { media } from "./data/media";
import { AboutMeSection } from "./components/About";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { IconMenu2 } from "@tabler/icons-react";

export const certificates = [
  "/images/certify/1.jpg",
  "/images/certify/2.jpg",
  "/images/certify/3.jpg",
  "/images/certify/4.jpg",
  "/images/certify/5.jpg",
  "/images/certify/6.jpg",
  "/images/certify/7.jpg",
  "/images/certify/8.jpg",
  "/images/certify/9.jpg",
  "/images/certify/10.jpg",
];
const Home = () => {
  return (
    <div className="container">
      {/* <div className="border-2 border-yellow-500"> */}
      <FloatingNav navItems={navItems} />
      {/* </div> */}
      <Page />
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <div className="container h-[30rem] relative mt-8 px-5 sm:px-14 ">
        <Vortex className="z-0 ">
          <div className=" flex justify-between flex-wrap z-10 text-sm sm:text-lg" id="home">
            <p id="logo" >
              <span>Risni</span> Dheerasekara
            </p>

            <div id="avatar">
            <Image
              src="/images/avatar.svg"
              alt="image"
              className="h-10 w-10 "
              width={60}
              height={5}
            />
            </div>

            <div className="navbar">
              {navItems.map((item, index) => (
                <a href={item.link} key={index} className="navbar">
                  {item.name}
                </a>
              ))}
            </div>

            <div className="h-7 w-7" id="menu-icon">
              <IconMenu2 size={30} />
            </div>

            
          </div>

          <section className="home" id="home">
            <HeaderSection />
          </section>
        </Vortex>

        <div className="absolute right-5 bottom-[200px] sm:bottom-[50px] md:bottom-[50px] flex flex-col gap-4 ">
          {media.map((media, index) => (
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
          <AboutMeSection />
        </section>
      </TracingBeam>

      <section className="portfolio" id="portfolio">
        <h1 className="mt-3 mb-3 bg-gradient-to-br from-yellow-300 to-slate-500 py- bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl drop-shadow-lg font-extrabold">
          Portfolio
        </h1>
      </section>

      <section className="services" id="services">
        <h1 className="mt-3 mb-3 bg-gradient-to-br from-yellow-300 to-slate-500 py- bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl drop-shadow-lg font-extrabold">
          Services
        </h1>
        <StickyScroll content={content} />
      </section>

      <section className="contact" id="contact">
        <h1 className="mt-3 mb-10 bg-gradient-to-br from-yellow-300 to-slate-500 py- bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl drop-shadow-lg font-extrabold">
          Contact Me
        </h1>
        <Contact />
      </section>

      <section className="certify" id="certify">
        <h1 className="mt-3 mb-3 bg-gradient-to-br from-yellow-300 to-slate-500 py- bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl drop-shadow-lg font-extrabold">
          Certificates
        </h1>
        <div className="flex flex-col antialiased py-8 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={certificates}
            direction="right"
            speed="slow"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
