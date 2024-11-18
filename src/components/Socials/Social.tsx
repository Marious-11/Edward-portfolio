"use client";

import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiFacebookFill,
} from "react-icons/ri";

const icons = [
  {
    path: "/",
    name: <RiYoutubeFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
];

export const Social = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles?: string;
  iconsStyles?: string;
}) => {
  return (
    <section className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={`${icon.path}`} key={index} className={`${iconsStyles}`}>
          {icon.name}
        </Link>
      ))}
    </section>
  );
};
