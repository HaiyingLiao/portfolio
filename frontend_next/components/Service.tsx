import Image from "next/image";

import { services } from "@/constants";

const Service = () => {
  return (
    <section className="bg-1">
      <h2 className="sectionTitle">
        {" "}
        What <span className="skinInk textDecoration">service</span> do I
        provide
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white-800 dark:bg-black-300 dark:hover:bg-accent-primaryDark hover:bg-accent-primaryLight group w-[287px] rounded-[10px] px-6 py-[30px] shadow-[0px_1px_20px_0px_#E0ECFF] transition-all delay-200 duration-300 ease-linear hover:translate-y-12 hover:shadow-[32px_32px_71px_0px_#0252cd47] dark:shadow-[0px_1px_20px_0px_#1F2E48]"
          >
            <div
              className={`bg-accent-primaryLight dark:bg-accent-primaryDark  mb-9 flex h-[62px] w-[62px] items-center justify-center rounded-[10px] shadow-[10px_10px_26px_0px_#0252cd47] group-hover:bg-white dark:shadow-[10px_10px_26px_0px_#0252cd47] ${service.icon} bg-[length:24px_24px] bg-center bg-no-repeat ${service.iconLight} ${service.iconDark}`}
            />

            <h1 className="base-bold text-black-200 mb-[10px] leading-[130%] group-hover:text-white dark:text-white">
              {service.title}
            </h1>
            <p className="s-regular text-white-500 dark:text-white-800 group-hover:text-white-800 leading-[155%]">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
