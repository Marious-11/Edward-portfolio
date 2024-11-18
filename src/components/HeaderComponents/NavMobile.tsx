import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import { Social } from "../Socials/Social";
function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <section className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <Social containerStyles="flex gap-x-4 " iconsStyles="text-2xl" />
        </section>
      </SheetContent>
    </Sheet>
  );
}

export default NavMobile;
