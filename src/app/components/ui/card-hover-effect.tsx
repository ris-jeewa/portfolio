import { cn } from "@/app/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    image: string;
    stack: string[];
  }[];
  className?: string;
}) => {
  const stack = ["/anothershot.png", "/anothershot.png", "/anothershot.png"];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 gap-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Card
          key={idx}
          className="h-[20rem] shadow-[0_0_10px_var(--main-color)] transition ease-in-out delay-2 hover:-translate-x-1 md:hover:-translate-y-1 hover:scale-110 hover:border-yellow-500 duration-100"
        >
          <img
            src={item.image}
            alt="image"
            className="w-full h-40 object-cover"
          />
          <CardTitle>{item.title}</CardTitle>
          <div className="ml-4 flex flex-row -space-x-1">
            {item.stack.map((tech, index) => (
              <div key={index} className="">
                <img
                  height={20}
                  width={20}
                  src={tech}
                  alt={tech}
                  className="rounded-full h-6 w-6 shadow-[0_0_5px_white] relative z-1" />
              </div>
            ))}
          </div>
          <CardDescription>{item.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-fit w-[250px] md:w-full overflow-hidden bg-black border border-transparent dark:border-gray/[0.2] group-hover:border-slate-700 relative z-20 ",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "bg-gradient-to-br from-white to-slate-500 py- bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm px-4 text-justify",
        className
      )}
    >
      {children}
    </p>
  );
};
