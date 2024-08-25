import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export type ExpProps = {
  company: string;
  role: string;
  time: string;
  desc: string[];
  imgs: { path: string; alt: string }[];
};

export default function Exp({ company, role, time, desc, imgs }: ExpProps) {
  return (
    <div className="pb-20">
      <h3 className="flex flex-wrap justify-between font-semibold">
        <Link href="https://www.facebook.com/dinotech.it" className="underline">
          {company}
        </Link>
        <span>{role}</span>
        <span>{time}</span>
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {desc[0] && (
          <p
            className="text-sm !leading-8 lg:text-base"
            dangerouslySetInnerHTML={{
              __html: desc[0],
            }}
          ></p>
        )}
        {desc[1] && (
          <p
            className="text-sm !leading-8 md:mt-0 lg:text-base"
            dangerouslySetInnerHTML={{
              __html: desc[1],
            }}
          ></p>
        )}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {imgs.map((i, index) => (
          <Image
            key={i.alt}
            src={i.path}
            alt={i.alt}
            width={500}
            height={500}
            className={twMerge(
              "col-span-1 h-full w-full rounded-lg object-cover",
              index === 2 && "md:col-span-2 lg:col-span-1",
            )}
          />
        ))}
      </div>
    </div>
  );
}
