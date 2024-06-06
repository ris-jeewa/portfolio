import React from 'react'
import Image from 'next/image'
import { words1, words2 } from '../data/header'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { IconArrowRight } from '@tabler/icons-react'


export const HeaderSection = () => {
  return (
    <>
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
                solutionsoriented approach, and possess strong teamwork skills
                to contribute effectively in collaborative environments.
              </p>
              <HoverBorderGradient
                containerClassName="rounded-full absolute bottom-3 right-6  "
                as="button"
                className="bg-black text-white flex items-center space-x-2 "
              >
                Download my CV
                <IconArrowRight className="ml-4" />
              </HoverBorderGradient>
            </div>
    </>
  )
}
