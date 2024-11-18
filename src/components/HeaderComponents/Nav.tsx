"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "My Projects" },
  { path: "/contact", name: "Contact" },
];

function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
}: {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}) {
  const pathName = usePathname();
  return (
    <nav className={cn(`${containerStyles}`)}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={cn(`capitalize ${linkStyles}`)}
        >
          {link.name}
          {link.path == pathName && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={cn(`${underlineStyles}`)}
            ></motion.span>
          )}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
