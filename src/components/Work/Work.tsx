"use client";

import Link from "next/link";
import { Button } from "../ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "../ProjectCard";
import { IProject } from "@/model/Work";
import { ProjectsData } from "@/data";

export const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
          {" "}
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
            atque et eius aliquam fugit alias quaerat officiis sed facere
            repellat maxime placeat aperiam, obcaecati odit, sit consequatur
            incidunt quis? Blanditiis?
          </p>
          <Link href={"/projects"}>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* Slide */}
        <div className="xl:max-w-[1000px] xl:absolute  right-0 top-0">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[580px] "
          >
            {ProjectsData.slice(0, 4).map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
