import { techs } from "@/constants";

const Techs = () => {
  return (
    <div className="flex flex-wrap gap-10 md:mt-10">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className={`bg-white-800 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[length:50px_50px] bg-center bg-no-repeat p-5 hover:h-[116px] hover:w-[116px] ${tech.colorImg} hover:bg-[length:62px_62px] ${tech.garyImg}`}
        />
      ))}
    </div>
  );
};

export default Techs;
