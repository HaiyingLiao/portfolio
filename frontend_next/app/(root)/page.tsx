import Link from "next/link";
import Image from "next/image";

import {
  Techs,
  Service,
  Experience,
  ProjectCard,
  Testimonial,
} from "@/components/index";
import { projects } from "@/constants";

export default function Home() {
  return (
    <>
      <section className="bg-1 flex flex-col items-center justify-between gap-8 pb-8 pt-12 md:flex-row md:pb-24 md:pt-20">
        <div className="md:max-w-[500px]">
          <h1 className="text-accent-primaryLight s-bold md:p-bold dark:text-accent-primaryDark mb-5 uppercase leading-[130%] tracking-[4.2px] md:mb-7 md:tracking-[6px]">
            Hi, I am Haiying Liao
          </h1>
          <h1 className="text-black-200 heading-3 md:heading-1 mb-3.5 leading-[115%] tracking-[-0.42px] dark:text-white md:mb-2.5 md:leading-[130%] md:tracking-[-0.64px]">
            Professional Web Developer based in UK
          </h1>
          <p className="xs-regular text-white-500 md:b-regular dark:text-white-800 mb-5 leading-[155%] md:mb-9 md:leading-[160%]">
            Transforming the web one line of code at a time: Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence
          </p>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <Link
              href="#mywork"
              className="primaryBtn s-bold md:b-bold w-full leading-[160%] md:max-w-[186px]"
            >
              My Work
            </Link>
            <div className="text-white-500 md:b-bold s-bold dark:bg-black-200 flex w-full items-center justify-center gap-2 rounded-[50px] bg-white px-3 py-2 dark:text-white md:py-3">
              haiying.liao@outlook.com
              <Image
                src="/assets/frame.svg"
                alt="hero image"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <Image
          src="/assets/hero.svg"
          alt="hero image"
          width={0}
          height={0}
          className="h-auto w-full md:w-[50%]"
        />
      </section>

      <Techs />
      <Service />
      <Experience />

      {/* Projects section */}
      <section id="mywork" className="bg-2">
        <h2 className="sectionTitle"> Featured Projects</h2>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        <Link
          href="/case-studies"
          className="primaryBtn b-regular md:b-bold mx-auto mt-10 max-w-[323px] gap-3 md:mt-12"
        >
          See more case studies
          <Image src="/assets/arrow1.svg" alt="arrow" width={16} height={16} />
        </Link>
      </section>

      <Testimonial />
    </>
  );
}
