import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="bg-2 pt-6">
      <div className="flex h-full min-h-[400px] flex-col items-center justify-center bg-[url('/assets/bg.svg')] bg-center bg-no-repeat p-5 lg:flex-row lg:justify-around">
        <h1 className="heading-6 md:heading-2 max-w-[520px] leading-[115%] tracking-[-0.48px] text-black-200">
          Have a project in mind that requires technical expertise?
        </h1>

        <Link
          href="/my-work"
          className="primaryBtn b-regular md:b-bold mt-3 w-full gap-3 px-4 sm:max-w-[323px]"
        >
          Get in Touch with Me
          <Image src="/assets/arrow1.svg" alt="arrow" width={16} height={16} />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
