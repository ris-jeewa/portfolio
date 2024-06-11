import Image from "next/image";

export const content = [
  {
    title: "UI Design",
    description:
      "I specialize in creating visually stunning and user-friendly interfaces for digital products. My UI design service focuses on crafting layouts that are not only aesthetically pleasing but also intuitive, ensuring users have a seamless and enjoyable experience. By applying modern design principles and utilizing the latest tools, I aim to enhance user satisfaction and engagement through beautifully designed and highly functional interfaces.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/ui.jpg"
          width={400}
          height={400}
          className="h-full w-full object-fill"
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
      <div className="h-500 w-500  flex items-center justify-center text-white">
        <Image
          src="images/front.jpg"
          width={400}
          height={400}
          className="h-full w-full object-fill"
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
      <div className="h-500 w-500  flex items-center justify-center text-white">
        <Image
          src="images/back.jpg"
          width={400}
          height={400}
          className="h-full w-full object-fill"
          alt="ui"
        />
      </div>
    ),
  },
  {
    title: "Testing & Debugging",
    description:
      "I provide thorough testing and debugging services to ensure your applications are reliable and error-free. By utilizing advanced tools and methodologies, I identify and fix issues promptly, ensuring optimal performance and a seamless user experience.",
    content: (
        <div className="h-500 w-500  flex items-center justify-center text-white">
        <Image
          src="images/test.jpg"
          width={400}
          height={400}
          className="h-full w-full object-fill"
          alt="ui"
        />
      </div>
    ),
  },
];
