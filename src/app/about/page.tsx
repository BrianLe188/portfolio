import Footer from "@/components/footer";
import Education from "@/sections/about/education";
import WorkExperience from "@/sections/about/work-experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Viet Anh",
  description:
    "This is the page that Viet Anh show education and work experiences",
  other: {
    languages: "Javascript, Typescript, Vim, Nodejs, Reactjs, Nextjs",
    roles: "Frontend, Backend",
    email: "anhkun123456@gmail.com, vietanhle188.dev@gmail.com",
    phone: "+84 828030359",
    name: "Le Viet Anh, Viet Anh, Việt Anh, Lê Việt Anh",
  },
};

export default function About() {
  return (
    <main className="mt-16 px-10">
      <Education />
      <WorkExperience />
      <Footer />
    </main>
  );
}
