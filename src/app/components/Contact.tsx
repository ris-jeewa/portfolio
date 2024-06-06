"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/app/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className=" ">

      <form className="my-8 flex flex-row gap-5 " onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Full Name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Phone Number" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Subject" type="text" />
        </LabelInputContainer>
        </div>
        
        <div>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your Message</Label>
          <textarea
            id="twitterpassword"
            placeholder="Your Message"
            className="h-[200px] w-[500] rounded-lg bg-yellow "
          ></textarea>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
        </div>

        

        {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}

        {/* <div className="flex flex-col space-y-4"> */}
          
        {/* </div> */}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
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
