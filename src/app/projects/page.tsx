"use client";
import { Template } from "@/components/motion/template";
import { ProjectCard } from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsData } from "@/data";
import { IProject } from "@/model/Work";
import { useState } from "react";

const uniqueCategory = [
  "all projects",
  ...new Set(ProjectsData.map((item) => item.category)),
];

const ProjectsPage = () => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = ProjectsData.filter((item) => {
    return category === "all projects" ? item : item.category === category;
  });

  return (
    <Template>
      {" "}
      <section className="min-h-screen pt-12">
        <div className="container mx-auto">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Projects
          </h2>
          {/* Tabs */}
          <Tabs defaultValue="all projects" className="mb-24 xl:mb-48">
            <TabsList className="w-full grid md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((item, index) => {
                return (
                  <TabsTrigger
                    onClick={() => {
                      setCategory(item);
                    }}
                    key={index}
                    value={item}
                    className="capitalize w-[126px] md:w-auto"
                  >
                    {item.split(", ")[0]}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((item, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard data={item} />
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </div>
      </section>
    </Template>
  );
};

export default ProjectsPage;
