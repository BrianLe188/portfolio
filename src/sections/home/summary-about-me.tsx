/* eslint-disable @next/next/no-img-element */

import Web from "@/components/web";
import Image from "next/image";
import Link from "next/link";

export default function SummaryAboutMe() {
  return (
    <section className="relative">
      <div className="flex flex-wrap justify-between gap-2 pt-5 md:p-20">
        <Image
          src="/icons/code/typescript.svg"
          alt="typescript"
          width={50}
          height={50}
          className="animation-on-view animate-jump-in transition-all duration-500 animate-delay-100 hover:scale-125"
        />
        <Image
          src="/icons/code/nodejs.svg"
          alt="nodejs"
          width={50}
          height={50}
          className="animation-on-view animate-jump-in transition-all duration-500 animate-delay-100 hover:scale-125"
        />
        <Image
          src="/icons/code/nestjs.svg"
          alt="nestjs"
          width={50}
          height={50}
          className="animation-on-view animate-jump-in transition-all duration-500 animate-delay-100 hover:scale-125"
        />
        <Image
          src="/icons/code/nextjs.svg"
          alt="nextjs"
          width={50}
          height={50}
          className="animation-on-view animate-jump-in transition-all duration-500 animate-delay-100 hover:scale-125"
        />
        <Image
          src="/icons/code/react.svg"
          alt="react"
          width={50}
          height={50}
          className="animation-on-view animate-jump-in transition-all duration-500 animate-delay-100 hover:scale-125"
        />
        <Image
          src="/icons/code/tailwindcss.svg"
          alt="tailwindcss"
          width={50}
          height={50}
          className="animation-on-view animate-jump-in transition-all duration-500 animate-delay-100 hover:scale-125"
        />
        <Image
          src="/icons/code/graphql.svg"
          alt="graphql"
          width={50}
          height={50}
          className="animation-on-view animate-jump-in transition-all duration-500 animate-delay-100 hover:scale-125"
        />
        <Image
          src="/icons/code/docker.svg"
          alt="docker"
          width={50}
          height={50}
          className="animation-on-view animate-jump-in transition-all duration-500 animate-delay-100 hover:scale-125"
        />
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-5 p-0 py-5 md:grid-cols-2 md:p-20 lg:gap-x-32 lg:gap-y-16">
        <div className="animation-on-view animate-fade-right animate-delay-100 animate-ease-in-out">
          <p className="text-sm !leading-8 lg:text-base">
            Le Viet Anh is a <strong>Website/Mobile developer</strong> from Da
            Nang, Vietnam.
          </p>
          <p className="mt-3 text-sm !leading-8 lg:text-base">
            Viet Anh majored in <strong>Software Engineering</strong>. During
            his time at school, he searched and participated in an internship at
            a technology company without being introduced by the school. He also
            actively contributed to software projects of student groups. This
            brought him a lot of practical experience from a very early age.
          </p>
        </div>
        <div className="animation-on-view animate-fade-left animate-delay-100 animate-ease-in-out">
          <p className="text-sm !leading-8 lg:text-base">
            I aim to be a developer who can adapt well to changes in technology
            and get out of the comfort zone. Technology changes every day, so
            developers must also stay ahead.
          </p>
          <p className="mt-3 text-sm !leading-8 lg:text-base">
            Dance to any music, Play any technology.
          </p>
          <div className="flex justify-center">
            <Image
              src="/signature.png"
              alt="my-signature"
              width={200}
              height={100}
            />
          </div>
        </div>
        <Link
          href={"/about"}
          className="text-center text-xl font-semibold hover:underline md:text-left"
        >
          LEARN MORE ABOUT ME
        </Link>
      </div>
      <Web direction="down" />
    </section>
  );
}
