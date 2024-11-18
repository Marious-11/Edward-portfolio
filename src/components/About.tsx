import Image from "next/image";
import { DevImg } from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneIcon,
  GraduationCap,
  Briefcase,
  Calendar,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    name: "Edward",
  },
  {
    icon: <MailIcon size={20} />,
    name: "phatht2911@gmail.com",
  },
  {
    icon: <PhoneIcon size={20} />,
    name: "+84 916 215 180",
  },
  {
    icon: <Calendar size={20} />,
    name: "Born on 29 Nov, 2003",
  },
  {
    icon: <GraduationCap size={20} />,
    name: "Development Nextjs and Reactjs",
  },
  {
    icon: <Briefcase size={20} />,
    name: "Experience",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "FPT Polytechnic",
        major: "Software Engineering",
        year: "2021-2023",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "CDS Company",
        position: "Junior Frontend Developer",
        year: "2023-now",
      },
      {
        company: "Lavenes Studio",
        position: "Freelance Junior Frontend Developer",
        year: "2023-now",
      },
    ],
  },
  {
    title: "Skills",
    data: [
      {
        name: "HTML,CSS",
      },
      {
        name: "JavaScript",
      },
      { name: "TypeScript" },
      { name: "NextJS" },
      { name: "ReactJS" },
      { name: "TailwindCSS" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Notion" },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        name: "/about/vscode.svg",
      },
      {
        name: "/about/figma.svg",
      },
      { name: "/about/notion.svg" },
      // { name: "/about/github.svg" },
    ],
  },
];

export const About = () => {
  const getData = (array: any[], title: string) => {
    return array?.find((item) => item.title == title);
  };
  return (
    <section className="xl:h-[840px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>

        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex xl:flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              ImgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[126px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[126px] xl:w-auto"
                  value="qualification"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[126px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-18">
                {/* Personal */}
                <TabsContent value="personal">
                  <section className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Huỳnh Tấn Phát - Edward</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      A Front-end Developer with 1 year of experience. I'm
                      passionate about building modern and optimized user
                      interfaces while continuously seeking opportunities to
                      enhance my knowledge and skills. I believe that constant
                      learning will enable me to bring greater value to the
                      projects and teams I contribute to.
                    </p>
                    {/* Icon */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div className="">{item.name}</div>
                        </div>
                      ))}
                    </div>
                    {/* Technical */}
                    <div className="">
                      <div className="">Languages Skills</div>
                      <div className="border-b border-border">
                        Vietnamese, English
                      </div>
                    </div>
                  </section>
                </TabsContent>
                <TabsContent value="qualification">
                  <section className="">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awsome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium">
                            {getData(qualificationData, "Experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience").data.map(
                            (item: any, index: number) => {
                              const { company, position, year } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group mt-4"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="flex flex-col">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="font-semibold text-xl leading-none mb-4 text-muted-foreground">
                                      {position}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="font-medium">
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item: any, index: number) => {
                              const { university, major, year } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group mt-4 "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="flex flex-col">
                                    {" "}
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="font-semibold text-xl leading-none mb-4 text-muted-foreground">
                                      {major}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                </TabsContent>
                <TabsContent value="skills">
                  <section className="text-center xl:text-left">
                    <h3 className="h3 capitalize mb-8">What I use everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill */}
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 items-center">
                        {getData(qualificationData, "Skills")?.data?.map(
                          (item: any, index: number) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div className="">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(qualificationData, "Tools")?.data?.map(
                          (item: any, index: number) => {
                            const { name } = item;
                            return (
                              <div key={index} className="">
                                <Image
                                  src={name}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </section>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
