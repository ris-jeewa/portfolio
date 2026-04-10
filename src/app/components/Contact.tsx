"use client";
import React, { useState, FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { IconHeart } from "@tabler/icons-react";

const contactFields = [
  {
    label: "Name:",
    id: "name",
    name: "name" as const,
    type: "text",
    autoComplete: "name" as const,
  },
  {
    label: "Email:",
    id: "email",
    name: "email" as const,
    type: "email",
    autoComplete: "email" as const,
  },
  {
    label: "Phone Number:",
    id: "phone",
    name: "phone" as const,
    type: "tel",
    autoComplete: "tel" as const,
  },
  {
    label: "Subject:",
    id: "subject",
    name: "subject" as const,
    type: "text",
    autoComplete: "off" as const,
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\d\s+().\-]{7,20}$/;

function validateContactForm(form: HTMLFormElement): Record<string, string> {
  const errors: Record<string, string> = {};
  const fd = new FormData(form);

  const name = String(fd.get("name") ?? "").trim();
  if (!name) errors.name = "Name is required.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";

  const email = String(fd.get("email") ?? "").trim();
  if (!email) errors.email = "Email is required.";
  else if (!emailRegex.test(email)) errors.email = "Enter a valid email address.";

  const phone = String(fd.get("phone") ?? "").trim();
  if (phone && !phoneRegex.test(phone)) {
    errors.phone = "Enter a valid phone number (7–20 digits/symbols).";
  }

  const subject = String(fd.get("subject") ?? "").trim();
  if (!subject) errors.subject = "Subject is required.";
  else if (subject.length < 2) errors.subject = "Subject must be at least 2 characters.";

  const message = String(fd.get("message") ?? "").trim();
  if (!message) errors.message = "Message is required.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";

  return errors;
}

export const Contact = () => {
  const [state, handleSubmit] = useForm("xgeggowb");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateContactForm(e.currentTarget);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <p className="text-center text-[var(--main-color)] flex justify-center items-center gap-2 rounded-lg py-3 px-4 border border-[var(--main-color)]/30">
        Thanks for your message! <IconHeart size={18} />
      </p>
    );
  }

  const inputClass = (fieldName: string) =>
    `w-[300px] py-[0.9rem] px-[1rem] text-[0.9rem] rounded-lg bg-[var(--second-bg-color)] border transition-colors duration-200 focus:outline-none focus:ring-1 ${
      fieldErrors[fieldName]
        ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/40"
        : "border-[var(--second-color)]/30 focus:border-[var(--main-color)] focus:ring-[var(--main-color)]"
    }`;

  return (
    <>
      <form
        className="flex flex-col md:flex-row md:gap-12 gap-6 justify-center text-center"
        onSubmit={onSubmit}
        noValidate
      >
        <div className="flex flex-col gap-4">
          {contactFields.map((field) => (
            <div key={field.id}>
              <div className="flex justify-center flex-wrap">
                <input
                  id={field.id}
                  name={field.name}
                  placeholder={field.label}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  aria-invalid={!!fieldErrors[field.name]}
                  aria-describedby={
                    fieldErrors[field.name] ? `${field.id}-error` : undefined
                  }
                  className={inputClass(field.name)}
                />
              </div>
              {fieldErrors[field.name] && (
                <p
                  id={`${field.id}-error`}
                  role="alert"
                  className="text-red-400 text-sm mt-1 text-left max-w-[300px] mx-auto"
                >
                  {fieldErrors[field.name]}
                </p>
              )}
              <ValidationError
                prefix={field.label}
                field={field.name}
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message:"
            rows={8}
            aria-invalid={!!fieldErrors.message}
            aria-describedby={
              fieldErrors.message ? "message-error" : undefined
            }
            className={`w-[300px] md:w-[400px] rounded-lg text-[0.9rem] py-4 px-4 resize-none transition-colors duration-200 focus:outline-none focus:ring-1 ${
              fieldErrors.message
                ? "bg-[var(--second-bg-color)] border border-red-500/80 focus:border-red-500 focus:ring-red-500/40"
                : "bg-[var(--second-bg-color)] border border-[var(--second-color)]/30 focus:border-[var(--main-color)] focus:ring-[var(--main-color)]"
            }`}
          />
          {fieldErrors.message && (
            <p
              id="message-error"
              role="alert"
              className="text-red-400 text-sm max-w-[400px] w-full text-left"
            >
              {fieldErrors.message}
            </p>
          )}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm"
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
