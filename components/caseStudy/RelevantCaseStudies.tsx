import Image from "next/image";
import Link from "next/link";

import { caseStudyCard } from "@/constants";

const RelevantCaseStudies = () => {
  return (
    <section className="bg-1">
      <h2 className="caseSubtitle">Projects</h2>
      <h3 className="caseTitle">Other Case Studies</h3>

      {/* card */}
      <div className="mt-9 flex flex-wrap gap-6 md:mt-10">
        {caseStudyCard.map((item) => (
          <div
            key={item.title}
            className="dark:bg-black-300 rounded-[20px] bg-white shadow-[0px_1px_20px_0px_#E0ECFF] dark:shadow-[0px_3px_30px_0px_#1F2C41]  md:max-w-[430px]"
          >
            <Image
              src={item.image}
              alt="project image"
              width={429}
              height={232}
              className="w-full rounded-t-[20px]"
            />

            <div className="space-y-3 p-3 md:space-y-5 md:p-7">
              <h2 className="p-bold text-accent-primaryLight dark:text-accent-primaryDark md:base-bold leading-[130%]">
                {item.title}
              </h2>
              <p className="text-white-500 s-regular md:b-regular dark:text-white-800 leading-[155%] md:leading-[160%]">
                {item.content}
              </p>
              <Link
                href="/"
                className="primaryBtn xs-bold md:s-bold mx-auto leading-[145%]"
              >
                See Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelevantCaseStudies;
