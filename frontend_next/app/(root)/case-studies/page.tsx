import Image from "next/image";

import { caseStudies } from "@/constants";

export default function CaseStudies() {
  return (
    <>
      <section className="bg-1 text-center">
        <h1 className="pageTitle">
          Recent{" "}
          <span className="skinInk textDecorationLarge">Case Studies</span>
        </h1>
        <p className="pageSubTitle mx-auto max-w-[658px]">
          Dive into my recent success stories and discover how I have helpe
          clients overcome challenges, innovate, and achieve their goals
        </p>
      </section>

      <section className="bg-2 flex flex-wrap justify-center gap-5 md:gap-9">
        {caseStudies.map((project) => (
          <div key={project.title}>
            <div
              className={`flex min-h-[205px] items-end rounded-[16px] ${project.bgColor} sm:min-h-[327px] `}
            >
              <Image
                src={project.imagePath}
                alt="project image"
                width={0}
                height={0}
                className="mx-auto w-[80%] md:w-[85%]"
              />
            </div>
            <div className="mt-5 pl-11 md:mt-8">
              <h2 className="p-bold md:heading-7 leading-[130%] dark:text-white md:leading-[105%] md:tracking-[-0.16px]">
                {project.title}
              </h2>
              <p className="s-regular text-white-500 md:p-regular leading-[155%] md:leading-[150%]">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
