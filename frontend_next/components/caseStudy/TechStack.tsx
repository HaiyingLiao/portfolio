import { techs } from "@/constants";

const TechStack = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-8">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className={`bg-white-800 dark:bg-black-300 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[length:25px_25px] bg-center bg-no-repeat p-3 md:h-[93px] md:w-[93px] md:bg-[length:46px_46px] ${tech.techSImg}`}
        />
      ))}
    </div>
  );
};

export default TechStack;
