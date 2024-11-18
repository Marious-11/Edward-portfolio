import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download, Send } from "lucide-react";
import { Social } from "../Socials/Social";
import { DevImg } from "../DevImg";
import { Badge } from "../Badge";
export const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-bottom bg-no-repeat dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[800px] flex-col justify-between mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web developer
            </div>
            <h1 className="h1">Hello, my name is Edward</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 ">
              Hi, I'm Huỳnh Tấn Phát (or Edward), a Front-end Developer with 1
              year of experience. I'm passionate about creating modern user
              interfaces and constantly improving my skills to deliver better
              value to my projects.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 ">
              <Link href={"/contact"}>
                <Button variant={"default"} className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant={"secondary"} className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Social */}
            <div className="">
              <Social
                containerStyles="flex gap-x-6 mx-auto justify-center xl:justify-start xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>
          </div>
          {/* Image */}
          <div className="hidden xl:flex  relative">
            {/* Badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]  "
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Year Of Experience"
            />
            {/* Badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]  "
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText="+"
              badgeText="Finished Projects"
            />
            {/* Badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8  "
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText="+"
              badgeText="Happy Clients"
            />
            {/*  */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark  w-[500px] h-[500px] bg-no-repeat  -top-1 -right-2 rounded-full">
              <DevImg
                containerStyles={`bg-hero_shape bg-no-repeat relative bg-bottom  w-[510px] h-[462px]`}
                ImgSrc="/hero/developer.png"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};
