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
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    title: "Photo-Gallery",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
  },
];
