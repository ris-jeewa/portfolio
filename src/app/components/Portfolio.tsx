import { HoverEffect } from "../components/ui/card-hover-effect";

export const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "MediSeek",
    description:
      "This ongoing individual project is developing to target difficulty in finding a particular medicine. This application provides a facility to update available medicines from each pharmacy in Sri Lanka. Then if a patient needs a rare medicine they can search whether that medicine is available anywhere in Sri Lanka.",
  },
  {
    title: "Anothershot",
    description:
      " AnotherShot is a progressive web app revolutionizing photography bookings. It simplifies the process for clients to find and book photographers for various events while providing a stunning platform for photographers to showcase their portfolios",
  },
  {
    title: "Photo-Gallery",
    description:
      "I recently created Photo-Gallery, a responsive website that displays high-quality images sourced from the Unsplash Free HD Photo API. The site offers an engaging and intuitive way to browse a curated selection of stunning photos from around the world, ensuring a visually captivating experience on any device.",
  },
];
