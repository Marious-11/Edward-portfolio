"use client";
import { Icon as Icons } from "@iconify/react";

export const Iconify = ({
  icon,
  className,
  width,
}: {
  icon: string;
  className?: string;
  width?: string;
}) => {
  return <Icons icon={icon} className={className} width={width} />;
};
