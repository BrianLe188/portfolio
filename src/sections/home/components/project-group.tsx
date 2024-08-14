import Project, { ProjectProps } from "@/components/project";

export default function ProjectGroup() {
  const projects: (ProjectProps & { id: string })[] = [
    {
      id: "typera",
      name: "Typera",
      year: 2023,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`,
      images: [],
      client: "ShortcastAI",
      roles: "Frontend, Backend",
      types: "GPT Integration",
      techStack: "Reactjs, Nextjs, Nodejs, Langchain",
    },
    {
      id: "vdiarybook",
      name: "Vdiarybook",
      year: "Present",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`,
      images: [],
      client: "VZone Global",
      roles: "Frontend, Backend",
      types: "Social Network",
      techStack: "Reactjs, Nextjs, Nodejs",
    },
  ];

  return (
    <div>
      {projects.map((i) => (
        <Project key={i.id} {...i} />
      ))}
    </div>
  );
}
