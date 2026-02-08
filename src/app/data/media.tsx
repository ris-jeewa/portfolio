import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

const iconClass = "w-5 h-5 text-[var(--second-color)] hover:text-[var(--main-color)] transition-colors";

export const media = [
    {
        name: "LinkedIn",
        link: "http://www.linkedin.com/in/risni-dheerasekara-8b3b04235",
        icon: <IconBrandLinkedin id="media" className={iconClass} size={22} />,
    },
    {
        name: "Github",
        link: "https://github.com/ris-jeewa",
        icon: <IconBrandGithub id="media" className={iconClass} size={22} />,
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/kristina.desilva.338/",
        icon: <IconBrandFacebook id="media" className={iconClass} size={22} />,
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/risn_i23/",
        icon: <IconBrandInstagram id="media" className={iconClass} size={22} />,
    },
];
