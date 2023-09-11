import { techs } from "@/constants";

// const techs = [
//   {
//     name: "ts",
//     garyImg: "bg-[url('/assets/ts-gray.svg')]",
//     colorImg: "hover:bg-[url('/assets/ts.svg')]",
//   },
//   {
//     name: "js",
//     garyImg: "bg-[url('/assets/js-gray.png')]",
//     colorImg: "hover:bg-[url('/assets/js.png')]",
//   },
//   {
//     name: "react",
//     garyImg: "bg-[url('/assets/react-gray.png')]",
//     colorImg: "hover:bg-[url('/assets/react.png')]",
//   },
//   {
//     name: "redux",
//     garyImg: "bg-[url('/assets/redux-gray.png')]",
//     colorImg: "hover:bg-[url('/assets/redux.png')]",
//   },
//   {
//     name: "next",
//     garyImg: "bg-[url('/assets/next-gray.png')]",
//     colorImg: "hover:bg-[url('/assets/next.png')]",
//   },
// ];

const Techs = () => {
  return (
    <div className="flex flex-wrap gap-10 md:mt-10">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className={`bg-white-800 dark:bg-black-300 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[length:50px_50px] bg-center bg-no-repeat p-5 hover:h-[116px] hover:w-[116px] ${tech.colorImg} hover:bg-[length:62px_62px] ${tech.garyImg}`}
        />
      ))}
    </div>
  );
};

export default Techs;
