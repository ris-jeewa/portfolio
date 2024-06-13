"use client";
import React from "react";
import { FloatingNav } from "./components/ui/floating-navbar";
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
import { Portfolio } from "./components/Portfolio";

const certificates = [
  "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/certify%2F1.jpg?alt=media&token=76d902a5-4ead-441b-91f9-2cc1c40fab2c",
  "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/certify%2F10.jpg?alt=media&token=d58bc4e9-ca93-41fd-8795-7f27e35ccb9e",
  "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/certify%2F2.jpg?alt=media&token=78aa45f4-e6a7-48e6-a44e-80d13016e33f",
  "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/certify%2F3.jpg?alt=media&token=35cc26f6-c794-45c6-bea1-b1ea4fb8f5fb",
  "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/certify%2F4.jpg?alt=media&token=efe70d9c-f3bd-42e1-ae78-51f661212bdf",
  "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/certify%2F5.jpg?alt=media&token=2ae84b6c-43fe-4082-a4a2-c5d0308ed07e",
  "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/certify%2F6.jpg?alt=media&token=bb79bf58-0a4c-4756-bc89-389909702bd4",
  "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/certify%2F7.jpg?alt=media&token=d9032cfa-63ac-4264-bd66-7e3318a5afb1",
  "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/certify%2F8.jpg?alt=media&token=714bdff2-131c-45c0-b515-be6098240acc",
];
const Home = () => {
  return (
    <div className="container">
      <FloatingNav navItems={navItems} />
      <Page />
    </div>
  );
};


const Page = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const displayNav = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div>
      <div className="h-[30rem] relative mt-8 px-5 sm:px-14 ">
        <Vortex className="z-0 ">
          <div className=" flex justify-between z-10 text-sm sm:text-lg" id="home">
            <p className="font-[1.5rem] md:font-[2rem]">
              <span className="text-[var(--main-color)] [text-shadow:0_0_18px_var(--main-color)]">Risni</span> Dheerasekara
            </p>

            <div id="avatar">
            <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/avatar.svg?alt=media&token=4ec0b73f-bba6-4c2b-bdc9-a6f63b9d9e4f"
              alt="image"
              className="md:h-13 md:w-13 w-10 h-10 shadow-[0_0_20px_var(--main-color)] rounded-full"
              width={60}
              height={5}
            />
            </div>

            <div className="navbar">
              {navItems.map((item, index) => (
                <a href={item.link} key={index} >
                  {item.name}
                </a>
              ))}
            </div>

            {isVisible && (
              <div className="flex flex-col gap-4 absolute right-2 top-10 translate ease-in duration-300 ">
              {navItems.map((item, index) => (
                <a href={item.link} key={index} className="hover:text-yellow-500" >
                  {item.name}
                </a>
              ))}
            </div>
            )}

            <div className="h-7 w-7 cursor-pointer" id="menu-icon">
              <IconMenu2 size={30} onClick={displayNav}/>
            </div>

            
          </div>

          <section className="home">
            <HeaderSection />
          </section>
        </Vortex>

        <div className={`${isVisible ?"bottom-0":"bottom-[200px]"} absolute right-5 sm:bottom-[50px] md:bottom-[50px] flex flex-col md:gap-4 `}>
          {media.map((media, index) => (
            <Link href={media.link} key={index} >
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
        <Portfolio />
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

       <section className="" id="certify">
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
