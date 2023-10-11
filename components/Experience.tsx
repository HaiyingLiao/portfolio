import Image from "next/image";

const Experience = () => {
  return (
    <section className="bg-2 flex flex-col  gap-7 xl:flex-row">
      <div className="max-w-full rounded-2xl bg-black-200 px-[38px] pb-[38px] pt-[58px] dark:bg-white-800 lg:max-w-[670px] lg:pb-[105px] lg:pl-[105px] lg:pr-[143px] lg:pt-[152px]">
        <h2 className="heading-4 lg:heading-2 mb-9 leading-[115%] tracking-[-0.48px] text-white dark:text-black-200">
          Work Experience
        </h2>
        <p className="s-regular lg:b-regular mb-10 max-w-[400px] leading-[160%] text-white-800 dark:text-white-500 lg:mb-16">
          Progress and milestones: A simple walkthrough of roles, projects, and
          achievements in my career.
        </p>
        <div className="flex items-center">
          <div className="h-[1px] w-[201px] bg-[#FFFFFF80] dark:bg-[#151e2c66] lg:w-[286px]"></div>
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-[1px] border-[#FFFFFF80] dark:border-[#151e2c66] lg:h-[70px] lg:w-[70px]">
            <div className="h-[34px] w-[34px] rounded-full bg-white dark:bg-black-200 lg:h-[44px] lg:w-[44px]" />
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex w-full flex-col gap-8 rounded-[10px] border-[1px] border-white-800 bg-white p-8 transition-all delay-100 duration-300 ease-in hover:translate-x-6 hover:translate-y-9 hover:shadow-[-25px_47px_66px_0px_#00000014] dark:border-black-200 dark:bg-black-200 dark:hover:bg-black-300 md:flex-row">
          <Image
            src="/assets/slack.svg"
            alt="company image"
            width={48}
            height={48}
            className="h-12 w-12 dark:brightness-0 dark:invert-[100%] md:h-[58px] md:w-[58px]"
          />
          <div>
            <h2 className="base-bold leading-[130%] text-black-200 dark:text-white">
              Slack
            </h2>
            <p className="s-regular leading-[155%] text-white-500 dark:text-white-800">
              Product Design - 4 Years Experince
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;