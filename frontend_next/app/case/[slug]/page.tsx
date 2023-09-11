import Image from "next/image";
import Link from "next/link";

import TechStack from "@/components/caseStudy/TechStack";

export default function CaseStudy() {
  return (
    <>
      <section className="bg-1 space-y-6 py-[72px] text-center">
        <p className="uppcase text-accent-primaryLight md:p-bold dark:text-accent-primaryDark s-bold leading-[130%] tracking-[4.2px] md:tracking-[6px]">
          Web Dev Project
        </p>

        <h1 className="pageTitle">Morrent - A Car Rental Website</h1>

        <Image
          src="/assets/morent.svg"
          alt="project image"
          width={0}
          height={0}
          className="mx-auto w-[45%] md:w-[55%]"
        />

        <div className=" flex justify-center">
          <Link
            href="/"
            className="s-bold md:p-bold text-accent-primaryLight dark:text-accent-primaryDark mt-16 flex gap-2 leading-[145%] md:leading-[130%]"
          >
            <Image src="/assets/arrow.svg" alt="arrow" width={35} height={20} />
            Demo Site
            <Image src="/assets/arrow.svg" alt="arrow" width={35} height={20} />
          </Link>
        </div>
      </section>

      <section className="bg-2 px-[280px] py-[72px]">
        <h3 className="caseSubtitle">Technologies used</h3>
        <h2 className="caseTitle">Tech Stack</h2>
        <TechStack />
      </section>
    </>
  );
}
