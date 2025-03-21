"use client";
import { ThemeToggler } from "@/provider/ThemeToggler";
import NavMobile from "./NavMobile";
import Logo from "./Logo";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const HeaderComponent = () => {
  const [header, setHeader] = useState<boolean>(false);

  const pathName = usePathname();

  //
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos as any);
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent "
      } sticky top-0 z-30 transition-all ${pathName == "/" && "bg-[#fef9f5]"}`}
    >
      <section className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-0.5 bg-primary  w-full"
            />
            {/* <ThemeToggler /> */}
            {/* Nav mobile */}
            <div className="xl:hidden ">
              <NavMobile />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
