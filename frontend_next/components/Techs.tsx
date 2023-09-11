import { techs } from "@/constants";

const Techs = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-10">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className={`bg-white-800 dark:bg-black-300 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[length:25px_25px] bg-center bg-no-repeat p-5 shadow-[10px_10px_26px_0px_#00000014] hover:h-16 hover:w-16 hover:bg-white md:h-[100px] md:w-[100px] md:bg-[length:50px_50px] md:hover:h-[116px] md:hover:w-[116px] ${tech.colorImg} hover:bg-[length:30px_30px] md:hover:bg-[length:62px_62px] ${tech.garyImg} dark:shadow-[8px_0px_26px_0px_#1F2E48]`}
        />
      ))}
    </div>
  );
};

export default Techs;
