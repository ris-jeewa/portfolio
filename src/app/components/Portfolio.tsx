import { HoverEffect } from "../components/ui/card-hover-effect";

export const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto md:max-w-[70%]">
      <HoverEffect items={projects} />
    </div>
  );
};
export const projects = [
  {
    title: "MediSeek",
    image:"https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/mediseek.png?alt=media&token=116d21df-ec2e-452b-b79a-7c362fa92d11", 
    description:
      "This ongoing individual project is developing to help patients easily find rare medicines within their country.",
    
  },
  {
    title: "Anothershot",
    image:"https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/anothershot.png?alt=media&token=9440df16-34d9-4a45-831a-ffd842bea1f9",
    description:
      "AnotherShot simplifies booking photographers and showcases their portfolios.This is the 2nd year software project."
  },
  {
    title: "Quick Chat",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/quickchat.jpeg?alt=media&token=7e885e3a-2433-4dcd-b6f0-5365f3065120",
    description:"A real-time chat application for seamless communication."
  },
  
];
