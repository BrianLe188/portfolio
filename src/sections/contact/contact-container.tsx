/* eslint-disable @next/next/no-img-element */
"use client";

import ContactForm from "./contact-form";
import Image from "next/image";
import { useLayoutEffect } from "react";

export default function ContactContainer() {
  useLayoutEffect(() => {
    const assignHeight = () => {
      const contactContainer = document.getElementById("contact-container");
      const me2 = document.getElementById("me2");

      const containerHeight = contactContainer?.offsetHeight;

      if (me2) me2.style.height = `${containerHeight}px`;
    };

    assignHeight();

    window.addEventListener("resize", assignHeight);

    return () => {
      window.removeEventListener("resize", assignHeight);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-2">
      <ContactForm id="contact-container" />
      <div id="me2" className="relative max-h-[528px] animate-fade-left">
        <Image
          src="/signature.png"
          alt="my-signature"
          width={150}
          height={100}
          className="absolute -top-10 right-0"
        />
        <img
          src="/me2.jpg"
          alt="me2"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
}
