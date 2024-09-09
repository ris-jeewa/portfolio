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
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/profile-img.png?alt=media&token=fe9696cf-6f97-431f-936d-36841f2a7e3c",
    description:
      "This ongoing individual project is developing to target difficulty in finding a particular medicine. This application provides a facility to update available medicines from each pharmacy in Sri Lanka. Then if a patient needs a rare medicine they can search whether that medicine is available anywhere in Sri Lanka.",
  },
  {
    title: "Anothershot",
    image: "",
    description:
      " AnotherShot is a progressive web app revolutionizing photography bookings. It simplifies the process for clients to find and book photographers for various events while providing a stunning platform for photographers to showcase their portfolios",
  },
  {
    title: "Quick Chat",
    image: "",
    description:"Developed a modern, real-time chat application using React JS and Firebase. This project demonstrates my proficiency in front-end development and working with cloud services."
  },
  
];
