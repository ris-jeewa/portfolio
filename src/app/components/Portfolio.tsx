"use client";

import { HoverEffect } from "../components/ui/card-hover-effect";
import { Carousel } from "./ui/apple-cards-carousel";
import Image from "next/image";

export const Portfolio = () => {

  return (
    <div 
    className="justify-center items-center mx-auto max-w-[70%]"
    >
      <HoverEffect items={projects} />
    </div>
  );
};

const projects = [
  {
    title: "MediSeek",
    image:"https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/mediseek.png?alt=media&token=116d21df-ec2e-452b-b79a-7c362fa92d11", 
    description:
      "This ongoing individual project is developing to help patients easily find rare medicines within their country.",
    stack: ["https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fspring-logo.png?alt=media&token=37ffb903-f75d-4f9f-917d-29660d6a2eee",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnext.jpeg?alt=media&token=63069384-b9b4-4c87-834b-b2def273a1e0",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fsql.jpeg?alt=media&token=f402d85c-c0e2-4075-acbb-d0244fd6e4a3"
    ],
    github:{
      frontend:"https://github.com/ris-jeewa/mediseek-frontend",
      backend:"https://github.com/ris-jeewa/mediseek-backend"
    }
    },
  {
    title: "Anothershot",
    image:"https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/anothershot.png?alt=media&token=9440df16-34d9-4a45-831a-ffd842bea1f9",
    description:
      "AnotherShot simplifies booking photographers and showcases their portfolios.2nd year software project.",
      stack: ["https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnext.jpeg?alt=media&token=63069384-b9b4-4c87-834b-b2def273a1e0",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnest.svg?alt=media&token=de7403a8-7451-4ec3-8a98-32555ab198cb",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fcloudinary.svg?alt=media&token=27dbb89c-75dd-4eba-894c-1daba1dce239",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fmongo.png?alt=media&token=9dc32b0d-d77b-4f55-b0ee-807f1b36098c",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fprisma.jpeg?alt=media&token=a3af1df1-3344-4c5f-948e-64e4a61be7f3",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftypescript.svg?alt=media&token=d190a918-c630-4c41-9b4c-5d7e725d99ab",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftailwind.png?alt=media&token=d08c76b0-ca3d-4ff4-b145-2b7b2d16644e",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fvercel.png?alt=media&token=9a6257dd-4b8f-4af9-9dec-8e2aeab07e5a",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fazure.jpeg?alt=media&token=a88c24f9-4f98-40c1-ad98-4bc7e0c8c4ad"
      ],
      github:{
        frontend:"https://github.com/NerdLabs-UoM/anothershot-frontend",
        backend:"https://github.com/NerdLabs-UoM/anothershot-backend"
      }
    },
  {
    title: "Quick Chat",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/quickchat.jpeg?alt=media&token=7e885e3a-2433-4dcd-b6f0-5365f3065120",
    description:"A real-time web chat application for seamless communication. Users can create their own account and chat with other users.",
    stack: ["https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Freact.svg?alt=media&token=dff6fa70-0756-4302-97c3-537331ba3f1b",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ffirebase.png?alt=media&token=dd30cc04-ce6c-4c32-ae27-c763bb988b3b",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fscss.png?alt=media&token=85390ad3-201e-44a6-87f3-cbea69b9f1e1",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fvite.png?alt=media&token=cf90dc05-e323-48e5-8d2c-5826397a54c8"
    ],
    github:{
      frontend:"https://github.com/ris-jeewa/Quick-Chat",
      backend:""
    }
  },

  {
    title: "Photo Gallery",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/Screenshot%202024-10-24%20005007.png?alt=media&token=6c04b4a5-6000-4135-9bc1-a2cd5ef473e9",
    description:"This is a simple photography portfolio website that shows images which is fetched by Unsplash image API.",
    stack: ["https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Fnext.jpeg?alt=media&token=63069384-b9b4-4c87-834b-b2def273a1e0",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftailwind.png?alt=media&token=d08c76b0-ca3d-4ff4-b145-2b7b2d16644e",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/skills%2Ftypescript.svg?alt=media&token=d190a918-c630-4c41-9b4c-5d7e725d99ab",
        ],
    github:{
      frontend:"https://github.com/ris-jeewa/photo-gallery",
      backend:""
    }
  },
  
];
