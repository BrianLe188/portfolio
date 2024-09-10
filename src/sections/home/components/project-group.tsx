import Project, { ProjectProps } from "@/components/project";

export default function ProjectGroup() {
  const projects: (ProjectProps & { id: string })[] = [
    {
      id: "typera",
      name: "Typera",
      year: 2023,
      description: `TyperaAI harnesses the power of AI to create high-quality, SEO-optimized content in minutes. With a diverse library of templates, it saves time and delivers industry-specific content for blogs, social media, and email marketing. TyperaAI features an AI Chatbot that offers personalized suggestions based on individual goals, and its AI Document Assistant efficiently extracts information from PDFs and Word files using natural language understanding. This solution enhances productivity and streamlines content creation, making it a time-saving tool for marketers and creators.`,
      images: [
        "/images/typera/home.png",
        "/images/typera/pricing.png",
        "/images/typera/content.png",
        "/images/typera/typeraai.png",
      ],
      client: "ShortcastAI",
      roles: "Frontend, Backend",
      types: "GPT Integration",
      techStack: "Reactjs, Nextjs, Nodejs, Langchain",
    },
    {
      id: "vdiarybook",
      name: "Vdiarybook",
      year: "Present",
      description: `Vdiarybook is a Vietnamese social network that helps individuals, businesses, and socio-political organizations access, share information, and preserve memories. Focus on integrating content to preserve and develop, promote the cultural identity of Vietnamese ethnic groups; educate about traditional history, with the desire to be a place to help the younger generation absorb the history of the Vietnamese people through stories, videos about the resilient, indomitable, heroic, and glorious fighting spirit of many generations of ancestors who have blended with the country so that the people can enjoy independence, freedom and the country can have the position it has today. That value is not only present domestically but also globally.`,
      images: [
        "/images/vdiarybook/vdiarybook.jpeg",
        "/images/vdiarybook/donglichsu.png",
        "/images/vdiarybook/shop.png",
      ],
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
