"use client";
import React from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/app/utils/cn";
import "../styles/contact.css";
import { InputProps } from './ui/input';

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
      <form className="flex flex:col md:flex-row gap-5 " onSubmit={handleSubmit}>
        <div className="input-group">
          <LabelInputContainer>
            {contact.map((contact, index) => (
           
                <div className="input-box">
                <Input
                  id={contact.id}
                  placeholder={contact.label}
                  type={contact.type}
                  className="bg-black border-2 border-white" 
                />
                </div>
              
            ))}
          </LabelInputContainer>
        </div>

        <div className="textarea">
          <LabelInputContainer className="mb-4">
            <textarea
              id="twitterpassword"
              placeholder="Your Message"
              className="h-[200px] w-[500] rounded-lg bg-yellow "
            />
          </LabelInputContainer>

          <button
            className="bg-yellow-500 py-1.3 rounded-full font-bold text-lg transition hover:scale-125 duration-300 shadow-yellow-500 shadow-md "
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
