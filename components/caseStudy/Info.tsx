import { caseInfo } from "@/constants";

const Info = () => {
  return (
    <section className="bg-2 flex flex-col justify-between gap-9 py-10 md:flex-row md:py-[53px]">
      {caseInfo.map((info) => (
        <div key={info.title} className="space-y-2">
          <h3 className="s-bold md:b-bold leading-[145%] text-black-400 dark:text-white-500 md:leading-[160%]">
            {info.title}
          </h3>
          <p className="p-bold md:base-bold leading-[130%] text-black-200 dark:text-white">
            {info.content}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Info;
