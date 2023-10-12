import { techs } from "@/constants";

const Techs = () => {
  return (
    <section className="bg-2">
      <h2 className="sectionTitle skinInk textDecoration">My Skills</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className={`flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white-800 bg-[length:25px_25px] bg-center bg-no-repeat p-5 shadow-[10px_10px_26px_0px_#00000014] hover:h-16 hover:w-16 hover:bg-white dark:bg-black-300 md:h-[100px] md:w-[100px] md:bg-[length:50px_50px] md:hover:h-[116px] md:hover:w-[116px] ${tech.colorImg} hover:bg-[length:30px_30px] md:hover:bg-[length:62px_62px] ${tech.garyImg} transition-all delay-100 duration-100 ease-linear dark:shadow-[8px_0px_26px_0px_#1F2E48]`}
          />
        ))}
      </div>
    </section>
  );
};

export default Techs;
