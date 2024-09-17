import Image from "next/image";

export const content = [
  {
    title: "UI Design",
    description:
      "I specialize in creating visually stunning and user-friendly interfaces for digital products. My UI design service focuses on crafting layouts that are not only aesthetically pleasing but also intuitive, ensuring users have a seamless and enjoyable experience. By applying modern design principles and utilizing the latest tools, I aim to enhance user satisfaction and engagement through beautifully designed and highly functional interfaces.",
    content: (
      <div className="flex items-center justify-center text-white">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/ui.jpg?alt=media&token=fca6b774-f503-4603-a83f-cf2e709ca133"
          className="h-full w-[800px] object-fill"
          alt="ui"
        />
      </div>
    ),
  },
  {
    title: "Frontend Development",
    description:
      "I specialize in frontend development using popular JavaScript frameworks like React and Next.js. My focus is on building responsive, high-performance web applications that provide a seamless user experience.",
    content: (
      <div className="flex items-center justify-center text-white">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/front.jpg?alt=media&token=196fa482-f2b5-4e36-a448-062ff426e83e"
          className="h-full w-[800px] object-fill"
          alt="ui"
        />
      </div>
    ),
  },
  {
    title: "Backend Development",
    description:
      "I excel in backend development using Node.js, Spring Boot, and NestJS. My expertise ensures robust, scalable, and efficient server-side applications that support seamless functionality and performance.",
    content: (
      <div className="flex items-center justify-center text-white">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-935fd.appspot.com/o/back.jpg?alt=media&token=5adf1975-3521-493e-ad54-eab1448f524d"
          className="h-full w-[800px] object-fill"
          alt="ui"
        />
      </div>
    ),
  },
];
