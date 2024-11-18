"use client";

import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon
          className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${
            theme == "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
        <MoonIcon
          className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 ${
            theme == "dark" ? "dark:opacity-100" : "opacity-0"
          }`}
        />
      </Button>
    </section>
  );
};
