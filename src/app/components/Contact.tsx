"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { IconHeart } from "@tabler/icons-react";

const contact = [
  {
    label: "Full Name:",
    id: "name",
    type: "text",
  },
  {
    label: "Email:",
    id: "email",
    type: "email",
  },
  {
    label: "Phone Number:",
    id: "phone",
    type: "text",
  },
  {
    label: "Subject:",
    id: "subject",
    type: "text",
  },
];

export const Contact = () => {
  const [state, handleSubmit] = useForm("xgeggowb");
  if (state.succeeded) {
    return (
      <p className="text-center text-[var(--main-color)] flex justify-center items-center gap-2 rounded-lg py-3 px-4 border border-[var(--main-color)]/30">
        Thanks for your message! <IconHeart size={18} />
      </p>
    );
  }

  return (
    <>
      <form
        className="flex flex-col md:flex-row md:gap-12 gap-6 justify-center text-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
            {contact.map((contact, index) => (<div key={index}>
              <div className="flex justify-center flex-wrap" >
                <input
                  id={contact.id}
                  name={contact.id}
                  placeholder={contact.label}
                  type={contact.type} 
                  className="w-[300px] py-[0.9rem] px-[1rem] text-[0.9rem] rounded-lg bg-[var(--second-bg-color)] border border-[var(--second-color)]/30 focus:border-[var(--main-color)] transition-colors duration-200"
                />
              </div>
              <ValidationError
              prefix={contact.label}
              field={contact.id}
              errors={state.errors}
              className="text-red-500 text-sm"
            />
            </div>
            ))}
            
        </div>

        <div className="flex flex-col items-center gap-4">
            <textarea
              id="message"
              placeholder="Your Message:"
              className="w-[300px] md:w-[400px] rounded-lg h-[200px] text-[0.9rem] bg-[var(--second-bg-color)] border border-[var(--second-color)]/30 focus:border-[var(--main-color)] transition-colors duration-200 py-4 px-4 resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

          <button
            className="mt-6 md:mt-4 w-[200px] bg-[var(--main-color)] text-[var(--bg-color)] py-3 rounded-lg font-semibold text-sm transition hover:opacity-90 duration-200 disabled:opacity-50"
            type="submit"
            disabled={state.submitting}
          >
            Send message &rarr;
          </button>
        </div>
      </form>
    </>
  );
};
