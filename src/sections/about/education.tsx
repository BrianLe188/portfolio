import Web from "@/components/web";
import Image from "next/image";
import Link from "next/link";

export default function Education() {
  return (
    <section className="p-0 md:pb-20 md:pt-10">
      <h1 className="flex flex-wrap justify-between font-semibold">
        <span>EDUCATION</span>
        <Link href={"https://duytan.edu.vn/"}>DUY TAN UNIVERSITY</Link>
        <span>2019-2024</span>
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Image
          src={"/graduate.jpg"}
          alt="Viet Anh graduate"
          width={500}
          height={500}
          className="h-auto w-full animate-fade-right rounded-lg animate-delay-300"
        />
        <div className="animate-fade-left animate-delay-300">
          <p className="text-sm !leading-8 lg:text-base">
            Viet Anh majored in Software Engineering. During his time at school,
            he searched and participated in an internship at a technology
            company without being introduced by the school. He also actively
            contributed to software projects of student groups. This brought him
            a lot of practical experience from a very early age.
          </p>
          <p className="mt-3 text-sm !leading-8 lg:text-base">
            During his two Capstone project defenses, Viet Anh was{" "}
            <strong>highly praised</strong> by the faculty for his exceptional
            presentation skills, project management abilities, and deep
            understanding of technology. His impressive performance earned him
            an <strong>8.8 score</strong> across both Capstone projects.
          </p>
        </div>
      </div>
      <Web />
    </section>
  );
}
