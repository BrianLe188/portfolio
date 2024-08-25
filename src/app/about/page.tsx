import Footer from "@/components/footer";
import Education from "@/sections/about/education";
import WorkExperience from "@/sections/about/work-experience";

export default function About() {
  return (
    <main className="mt-16 px-10">
      <Education />
      <WorkExperience />
      <Footer />
    </main>
  );
}
