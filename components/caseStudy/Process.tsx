import { processes } from "@/constants";

const Process = () => {
  return (
    <section className="bg-2">
      <h2 className="caseSubtitle">Way of work</h2>
      <h3 className="caseTitle">My Process</h3>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-6 md:mt-10">
        {processes.map((process) => (
          <div
            key={process.name}
            className="flex flex-col items-center space-y-2 md:space-y-5"
          >
            <div
              className={`flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white-800 bg-[length:37px_37px] bg-center bg-no-repeat p-4 dark:bg-black-300 md:h-[100px] md:w-[100px] md:bg-[length:50px_50px] md:p-6  ${process.lightImg} ${process.darkImg}`}
            />
            <p className="s-bold md:p-bold leading-[145%] text-black-300 dark:text-white md:leading-[130%]">
              {process.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
