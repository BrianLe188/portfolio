import Footer from "@/components/footer";
import FirstLook from "@/sections/home/first-look";
import ProjectOverview from "@/sections/home/project-overview";
import SummaryAboutMe from "@/sections/home/summary-about-me";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LE VIET ANH",
  description:
    "Le Viet Anh is a Website/Mobile developer from Da Nang, Vietnam.",
  other: {
    languages: "Javascript, Typescript, Vim, Nodejs, Reactjs, Nextjs",
    roles: "Frontend, Backend",
    email: "anhkun123456@gmail.com, vietanhle188.dev@gmail.com",
    phone: "+84 828030359",
    name: "Le Viet Anh, Viet Anh, Việt Anh, Lê Việt Anh",
  },
};

export default function Home() {
  return (
    <main className="px-10">
      <FirstLook />
      <SummaryAboutMe />
      <ProjectOverview />
      <Footer />
    </main>
  );
}
