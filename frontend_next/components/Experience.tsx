import Image from "next/image";

const Experience = () => {
  return (
    <div className="flex gap-7">
      <div className="bg-black-200 dark:bg-white-800 max-w-[670px] rounded-2xl pb-[105px] pl-[105px] pr-[143px] pt-[152px]">
        <h2 className="heading-2 dark:text-black-200 mb-9 leading-[115%] tracking-[-0.48px] text-white">
          Work Experience
        </h2>
        <p className="text-white-800 dark:text-white-500 b-regular mb-16 leading-[160%]">
          Progress and milestones: A simple walkthrough of roles, projects, and
          achievements in my career.
        </p>
        <div className="flex items-center">
          <div className="h-[1px] w-[286px] bg-[#FFFFFF80] dark:bg-[#151e2c66]"></div>
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-[1px] border-[#FFFFFF80] dark:border-[#151e2c66]">
            <div className="dark:bg-black-200 h-[44px] w-[44px] rounded-full bg-white" />
          </div>
        </div>
      </div>

      <div>
        <div className="border-white-800 dark:border-black-300 flex flex-col gap-8 rounded-[10px] border-[1px] p-8 hover:shadow-[-25px_47px_66px_0px_#00000014] md:min-w-[607px] md:flex-row">
          <Image
            src="/assets/slack.svg"
            alt="company image"
            width={0}
            height={0}
            className="h-12 w-12 dark:brightness-0 dark:invert-[100%] md:h-[58px] md:w-[58px]"
          />
          <div>
            <h2 className="text-black-200 base-bold leading-[130%] dark:text-white">
              Slack
            </h2>
            <p className="text-white-500 dark:text-white-800 s-regular leading-[155%]">
              Product Design - 4 Years Experince
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
