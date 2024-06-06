import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'

export const About = () => {
  return (
    <>
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900 ">
            <div className="uppercase text-2xl text-yellow-100">
              Personal Infos
            </div>
            <div className="grid grid-cols-2 text-xl ml-[5%]">
              <p>
                <span className="font-bold text-slate-400">First Name:</span>{" "}
                Risni
              </p>
              <p>
                <span className="font-bold text-slate-400">Last Name:</span>{" "}
                Dheerasekara
              </p>
              <p>
                <span className="font-bold text-slate-400">Age:</span> 24 Years
              </p>
              <p>
                <span className="font-bold text-slate-400">Languages:</span>{" "}
                English, Sinhala
              </p>
              <p>
                <span className="font-bold text-slate-400">Phone:</span> (+94)
                70 3797 074
              </p>
              <p>
                <span className="font-bold text-slate-400">Email:</span>{" "}
                risni.jeewa@gmail.com
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900 ">
            <div className="uppercase text-2xl text-yellow-100 ">Education</div>
            <div className="mb-[4rem] ml-[2rem]">
              <div className="topic">
                University of Moratuwa <span>( 2022 - Present )</span>
              </div>
              <p className="ml-[2rem]">
                I am currently pursuing a Bachelor of Science (Honours) degree
                in Information Technology at the University of Moratuwa. As a
                student in the IT faculty, I am gaining comprehensive knowledge
                and practical skills in various areas of information technology.
                The rigorous academic environment and state-of-the-art
                facilities at the university are equipping me with the expertise
                needed to excel in the fast-evolving tech industry.
              </p>
            </div>

            <div className="ml-[2rem]">
              <div className="topic">
                Sujatha Vidyalaya Matara <span>( 2022 - Present )</span>
              </div>
              <p className="ml-[2rem]">
                I attended Sujatha Vidyalaya in Matara from 2005 to 2019, where
                I completed my primary and secondary education. During my time
                there, I achieved outstanding results in my Ordinary Level (O/L)
                examinations, securing 9 A's in the English medium. In my
                Advanced Level (A/L) examinations, I attained AAB in the
                Mathematics stream. My education at Sujatha Vidyalaya provided a
                strong foundation in both academic excellence and personal
                development, preparing me well for higher education and future
                challenges.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900 ">
            <div className="uppercase text-2xl text-yellow-100 ">My Skills</div>
            <div className="mb-[4rem] container"></div>
          </BackgroundGradient>
    </>
  )
}
