import Image from "next/image";
import Link from "next/link";

import { TechStack, Info, Process, Gains } from "@/components/index";

export default function CaseStudy() {
  return (
    <>
      <section className="bg-1 space-y-6 text-center">
        <h2 className="uppcase text-accent-primaryLight md:p-bold dark:text-accent-primaryDark s-bold leading-[130%] tracking-[4.2px] md:tracking-[6px]">
          Web Dev Project
        </h2>

        <h1 className="pageTitle">Morrent - A Car Rental Website</h1>

        <Image
          src="/assets/morent.svg"
          alt="project image"
          width={0}
          height={0}
          className="mx-auto w-[45%] md:w-[55%]"
        />

        <div className="flex justify-center">
          <Link
            href="/"
            className="s-bold md:p-bold text-accent-primaryLight dark:text-accent-primaryDark mt-16 flex gap-1 leading-[145%] md:leading-[130%]"
          >
            <Image
              src="/assets/dashicons.svg"
              alt="arrow"
              width={20}
              height={20}
            />
            Demo Site
            <Image
              src="/assets/arrow-case.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </section>

      <Info />
      <TechStack />

      <section className="bg-1 caseParagraph space-y-4 md:space-y-6">
        <p>
          Morent, a cutting-edge car rental application that was developed using
          the MERN stack. The app boasts a dynamic homepage that showcases
          featured vehicles, along with convenient pickup & drop-off location
          options & a comprehensive list of available cars.
        </p>
        <p>
          My team and I also developed the car listing page which offers a
          search bar and various filtering options for users to find the perfect
          vehicle. Additionally, it has a car details page which provides users
          with detailed information along with suggestions for other recommended
          vehicles.
        </p>
        <p>
          Car owners are also able to list their cars for rent through our Add
          Car page, while users can easily track their rented and rented-out
          cars through their profile page. Overall, we've created an intuitive
          and user-friendly MVP version of the platform that will make renting a
          car a breeze.
        </p>
      </section>

      <section className="bg-1">
        <h2 className="caseSubtitle">Problem</h2>
        <h3 className="caseTitle">Problem Statement</h3>
        <p className="caseParagraph my-4">
          One of the main problems that people face when looking to rent a car
          is the hassle of finding a reliable and user-friendly platform to
          search for and book rental cars. In addition, car owners who want to
          rent out their vehicles often struggle to find a suitable platform to
          list their cars and manage their rentals.
        </p>
        <Image
          src="/assets/car.svg"
          alt="car image"
          width={0}
          height={0}
          className="w-full"
        />
      </section>

      <section>
        <h2 className="s-bold md:heading-7 bg-accent-primaryLight dark:bg-accent-primaryDark py-2 text-center uppercase leading-[145%] tracking-[-0.16px] text-white md:py-9 md:leading-[105%]">
          High-Fidelity Figma Design
        </h2>
        <Image
          src="/assets/figma-morent.svg"
          alt="car image"
          width={0}
          height={0}
          className="w-full"
        />
      </section>

      <Process />
      <Gains />
    </>
  );
}
