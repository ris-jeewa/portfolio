"use client";
import React from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/app/utils/cn";
// import "../styles/contact.css";
import { InputProps } from './ui/input';
import { CardTitle } from "./ui/card-hover-effect";

export const contact = [
  {
    label: "Full Name:",
    id: "name",
    type: "text"
  },
  {
    label: "Email:",
    id: "email",
    type: "email"
  },
  {
    label: "Phone Number:",
    id: "phone",
    type: "text"
  },
  {
    label: "Subject:",
    id: "subject",
    type: "text"
  },
];

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <form className="flex flex-col md:flex-row md:gap-[5rem] gap-[1rem] bg-black align-center justify-center text-center" onSubmit={handleSubmit}>
        <div className="input-group">
          <LabelInputContainer> 
            {contact.map((contact, index) => (
           
                <div className="flex justify-center flex-wrap" key={index}>
                <Input
                  id={contact.id}
                  placeholder={contact.label}
                  type={contact.type}
                  className="w-[300px] py-[1.7rem] px-[1rem] text-[0.9rem] rounded-lg bg-black transition ease-in-out delay-2 hover:-translate-y-1 hover:scale-110 duration-100 shadow-[0_0_3px_var(--main-color)]" 
                />
                </div>
              
            ))}
          </LabelInputContainer>
        </div>
        
        <div className="ml-[2rem]">
          <LabelInputContainer >
            <textarea
              id="message"
              placeholder="Your Message:"
              className="w-[300px] md:w-[400px] rounded-lg h-[200px] text-[0.9rem] bg-black rounded-lg shadow-[0_0_3px_var(--main-color)] py-[1.7rem] px-[1rem]"
            />
          </LabelInputContainer>

          <button
            className="mt-[3rem] md:mt-[1rem] w-[200px] bg-yellow-500 py-1.3 rounded-full font-bold text-lg transition hover:scale-125 duration-300 shadow-yellow-500 shadow-md "
            type="submit"
          >
            Send  &rarr;
            <BottomGradient />
          </button>
        </div>
      </form>
    </>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
