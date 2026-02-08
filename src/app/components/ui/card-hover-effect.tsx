import { cn } from "@/app/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Carousel } from "./apple-cards-carousel";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    image: string;
    stack: string[];
    github: { frontend: string; backend: string };
  }[];
  className?: string;
}) => {

  const cards = items.map((item, idx) => (
    <Card
      key={idx}
      className="w-[15rem] h-[22rem] border border-[var(--second-color)]/20 transition duration-200 hover:border-[var(--main-color)]/50 hover:shadow-[0_0_24px_var(--accent-glow)]"
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
              className="rounded-full h-6 w-6 shadow-[0_0_5px_white] relative z-1"
            />
          </div>
        ))}
      </div>
      <CardDescription>{item.description}</CardDescription>
      <div className="absolute right-4 top-80 text-xs text-sky-400 underline-offset-4">
        <Link href={item.github.frontend}>Frontend</Link>
        {item.github.backend == "" ? (
          ""
        ) : (
          <>
            <span> | </span>
            <Link href={item.github.backend}>Backend</Link>
          </>
        )}
      </div>
    </Card>
  ))
  return (
    <div className="" 
    >
      <Carousel items={cards} />
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
        "rounded-2xl h-fit w-[200px] overflow-hidden bg-black border border-transparent dark:border-gray/[0.2] group-hover:border-slate-700 relative z-20 ",
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
