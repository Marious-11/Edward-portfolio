"use client";

import React from "react";
import CountUp from "react-countup";

interface IBadgeProps {
  containerStyles?: string;
  icon?: React.ReactNode;
  endCountNum?: number;
  endCountText?: string;
  badgeText?: string;
}
export const Badge = ({
  badgeText,
  endCountNum,
  endCountText,
  containerStyles,
  icon,
}: IBadgeProps) => {
  return (
    <section className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex gap-x-2 items-center">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum ?? 0} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </section>
  );
};
