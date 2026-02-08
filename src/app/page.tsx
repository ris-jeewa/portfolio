"use client";
import React from "react";
import { FloatingNav } from "./components/ui/floating-navbar";
import "./styles/home.css";
import { Vortex } from "./components/ui/vortex";
import Link from "next/link";
import { TracingBeam } from "./components/ui/tracing-beam";
import { Contact } from "./components/Contact";
import { navItems, words1, words2 } from "./data/header";
import { HeaderSection } from "./components/Header";
import { media } from "./data/media";
import { AboutMeSection } from "./components/About";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { IconMenu2 } from "@tabler/icons-react";
import { Portfolio } from "./components/Portfolio";

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
            <p className="text-lg md:text-xl font-semibold tracking-tight">
              <span className="text-[var(--main-color)]">Risni</span> Dheerasekara
            </p>

            <div id="avatar">
            <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/avatar.svg?alt=media&token=4ec0b73f-bba6-4c2b-bdc9-a6f63b9d9e4f"
              alt="image"
              className="md:h-13 md:w-13 w-10 h-10 ring-2 ring-[var(--main-color)]/50 rounded-full object-cover"
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

            <div className="md:hidden">
            {isVisible && (
              <div className="flex flex-col gap-4 absolute right-2 top-10 translate ease-in duration-300 ">
              {navItems.map((item, index) => (
                <a href={item.link} key={index} className="hover:text-[var(--main-color)] transition-colors" >
                  {item.name}
                </a>
              ))}
            </div>
            )}
            </div>

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
          <h1 className="section-title mt-1 text-center text-3xl md:text-5xl">
            About Me
          </h1>
          <AboutMeSection />
        </section>
        </TracingBeam>

     <section className="portfolio" id="portfolio">
        <h1 className="section-title mt-1 mb-6 text-center text-3xl md:text-5xl">
          Projects I&apos;ve Built
        </h1>
        <Portfolio />
      </section>


      <section className="contact" id="contact">
        <h1 className="section-title mt-1 mb-10 text-center text-3xl md:text-5xl">
          Get in Touch
        </h1>
        <Contact />
      </section> 

      <section className="footer" id="footer">
        <div className="horizontal"></div>
        <div>
          <h3>Designed & built by <span>Risni Dheerasekara</span></h3>
          <h3>© 2025. All rights reserved.</h3>
        </div>
      </section> 
    </div>
  );
};

export default Home;
