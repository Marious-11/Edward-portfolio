"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const ReviewData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Tuấn",
    job: "Designer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat veniam quibusdam quo tempora, deleniti officia. Maxime quod, possimus unde aliquam deserunt pariatur ex nisi!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Đạo",
    job: "Leader Frontend",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat veniam quibusdam quo tempora, deleniti officia. Maxime quod, possimus unde aliquam deserunt pariatur ex nisi!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Oanh",
    job: "Leader CMS",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat veniam quibusdam quo tempora, deleniti officia. Maxime quod, possimus unde aliquam deserunt pariatur ex nisi!",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "Nhật",
    job: "CEO Lavenes Studio",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat veniam quibusdam quo tempora, deleniti officia. Maxime quod, possimus unde aliquam deserunt pariatur ex nisi!",
  },
];

export const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/*  */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {ReviewData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* Image */}
                      <Image
                        src={item.avatar}
                        alt="avatar"
                        width={70}
                        height={70}
                        priority
                      />
                      {/* Name */}
                      <div className="flex flex-col">
                        <CardTitle>{item.name}</CardTitle>
                        <p>{item.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {item.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
