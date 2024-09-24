/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import CustomerInfo from "./customer-info";

export type ProjectProps = {
  name: string;
  year: number | string;
  description: string;
  images: string[];
  client: string;
  roles: string;
  types: string;
  techStack: string;
};

export default function Project({
  name,
  year,
  description,
  images,
  client,
  roles,
  types,
  techStack,
}: ProjectProps) {
  return (
    <article className="mb-5 md:mb-20">
      <h3 className="flex justify-between font-semibold underline">
        <span>{name}</span>
        <span>[{year}]</span>
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="animation-on-view flex animate-fade-right overflow-auto rounded-md animate-delay-100 animate-ease-in-out">
          {images.map((path, index) => (
            <Image
              key={index}
              src={path}
              alt="typera home"
              className="h-[100vw] w-full flex-shrink-0 bg-gray-50 object-contain object-center lg:h-[50vw]"
              width={1000}
              height={1000}
            />
          ))}
        </div>
        <div className="animation-on-view flex animate-fade-left flex-col justify-between animate-delay-100 animate-ease-in-out">
          <p className="text-sm leading-8">{description}</p>
          <div>
            <CustomerInfo title="Client" value={client} />
            <CustomerInfo title="Roles" value={roles} />
            <CustomerInfo title="Types" value={types} />
            <CustomerInfo title="Tech Stack" value={techStack} />
          </div>
        </div>
      </div>
    </article>
  );
}
