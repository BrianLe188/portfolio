import ProjectGroup from "./components/project-group";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ProjectOverview() {
  const texts = ["My", "Projects", "[2]"];
  return (
    <section className="py-20">
      <div className="mb-10 flex justify-between py-5">
        {texts.map((i) => (
          <p key={i} className="font-semibold">
            {i.toUpperCase()}
          </p>
        ))}
      </div>
      <ProjectGroup />
      <Link
        href={"/projects"}
        className="text-xl font-semibold hover:underline"
      >
        VIEW MORE PROJECTS
      </Link>
    </section>
  );
}
