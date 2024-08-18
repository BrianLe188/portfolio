import Footer from "@/components/footer";
import FirstLook from "@/sections/home/first-look";
import ProjectOverview from "@/sections/home/project-overview";
import SummaryAboutMe from "@/sections/home/summary-about-me";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LE VIET ANH",
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
