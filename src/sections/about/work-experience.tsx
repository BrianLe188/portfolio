import Exp, { ExpProps } from "./exp";

export default function WorkExperience() {
  const exps: ExpProps[] = [
    {
      company: "DINOTECH",
      role: "FULL-STACK WEB DEVELOPER",
      time: "2023-PRESENT",
      desc: [
        "Dinotech, commonly referred to as Dino, is a startup team specializing in web development and project consulting. The company has successfully handled a wide range of projects, varying in scale and complexity, often involving challenging technologies. The core skills required for developers in the team include expertise in React.js, Next.js, and Node.js. Additionally, team members must demonstrate a strong sense of responsibility and the ability to thrive under high pressure.",
        "Currently, I am a Fullstack Developer at the company. My responsibilities include programming, client communication, and managing a team of interns. I've worked on numerous projects, including those involving the <strong>integration of AI models like GPT</strong>. One notable project led to <strong>over 1000 registrations</strong> within the first few hours of launch and significantly boosted the client’s revenue.",
      ],
      imgs: [
        {
          path: "/images/dino/me-dino.png",
          alt: "Viet Anh at DINOTECH",
        },
        {
          path: "/images/dino/team-dino.jpg",
          alt: "Dinotech Team",
        },
        {
          path: "/images/dino/travel-dino.jpg",
          alt: "Dinotech Travel at Ly Son Island",
        },
      ],
    },
    {
      company: "BIZVERSE",
      role: "NODEJS INTERNSHIP",
      time: "8/2022-11/2022",
      desc: [
        "BIZVERSE is a Metaverse world combined with a complete Digital Twin for business and life. Build - Shop - Watch - Connect - Share - Play - Earn, all at Bizverse World.<br/>BIZVERSE aims to build a virtual reality environment, a complete Metaverse for business activities, where every user can easily bring their business activities to the network environment, conduct comprehensive digital transformation of business activities, and increase efficiency in a superior way with maximum support from technology.",
        "Viet Anh had the opportunity to intern as a Node.js intern, where he was involved in developing backends for RentAll project. During this process, Viet Anh got acquainted with how Node.js works and modern API design patterns like GraphQL. He was involved in writing basic code, building and testing small APIs, and working with other team members to solve problems that arose.",
      ],
      imgs: [
        {
          path: "",
          alt: "",
        },
        {
          path: "/images/bizverse/bizverse.png",
          alt: "Bizverse Logo",
        },
        {
          path: "",
          alt: "",
        },
      ],
    },
  ];
  return (
    <section className="py-20">
      <h1 className="mb-10 py-5 font-semibold">WORK EXPERIENCES</h1>
      {exps.map((i) => (
        <Exp key={i.company} {...i} />
      ))}
    </section>
  );
}
