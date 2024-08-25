/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/footer";
import VietAnh from "@/components/vietanh";
import ContactContainer from "@/sections/contact/contact-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Viet Anh",
  description:
    "Please provide your email, some describe about you, and tell me why you contact me. Viet Anh will response soon",
  other: {
    languages: "Javascript, Typescript, Vim, Nodejs, Reactjs, Nextjs",
    roles: "Frontend, Backend",
    email: "anhkun123456@gmail.com, vietanhle188.dev@gmail.com",
    phone: "+84 828030359",
  },
};

export default function Contact() {
  return (
    <main className="mt-16 px-10">
      <VietAnh />
      <ContactContainer />
      <Footer />
    </main>
  );
}
