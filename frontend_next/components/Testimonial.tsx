"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css";
import { testimonials } from "@/constants";

const Testimonial = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mt-16">
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <div className="flex flex-col gap-6 p-10 lg:flex-row">
            <Image
              src={testimonial.photo}
              alt="arrow"
              width={328}
              height={328}
              className="mx-auto "
            />
            <div className="">
              <p className="text-white-500 b-regular md:base-regular mb-8 leading-[160%] md:leading-[130%]">
                {testimonial.comment}
              </p>

              <h2 className="b-bold text-black-300 leading-[160%]">
                — {testimonial.name}
              </h2>
              <h3 className="b-regular text-white-500 leading-[160%]">
                {testimonial.jobTitle}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
