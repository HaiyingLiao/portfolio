"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css";
import { testimonials } from "@/constants";

const Testimonial = () => {
  return (
    <section className="bg-1">
      <h2 className="sectionTitle">
        {" "}
        What <span className="skinInk textDecoration">they say</span> about me
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mt-16">
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name}>
            <div className="flex flex-col gap-6 p-16 md:px-20 lg:flex-row">
              <Image
                src={testimonial.photo}
                alt="arrow"
                width={0}
                height={0}
                className="mx-auto h-[220px] w-[220px] md:h-[328px] md:w-[328px]"
              />
              <div className="flex flex-col justify-center">
                <p className="text-white-500 dark:text-white-800 b-regular md:base-regular mb-8 leading-[160%] md:leading-[130%]">
                  {testimonial.comment}
                </p>

                <h2 className="b-bold text-black-300 leading-[160%] dark:text-white">
                  — {testimonial.name}
                </h2>
                <h3 className="b-regular text-white-500 dark:text-white-800 leading-[160%]">
                  {testimonial.jobTitle}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
