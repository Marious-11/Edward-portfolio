import { Card, CardHeader, CardContent } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { IProject } from "@/model/Work";
import Image from "next/image";
import Link from "next/link";
export const ProjectCard = ({ data }: { data: IProject }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dar:bg-secondary/40 xl:bg-work_project_bg_light dark:xl:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            width={247}
            height={250}
            priority
            className="absolute rounded-t-lg bottom-0 shadow-2xl"
          />
          <div className="flex  gap-x-4">
            <Link
              target="_blank"
              href={data.link}
              className="bg-secondary size-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              target="_blank"
              href={data.github}
              className="bg-secondary size-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium  mb-2 absolute top-4 left-5">
          {data.category}
        </Badge>
        <h4 className="h4 mb-1">{data.name}</h4>
        <p className="text-muted-foreground text-lg h-[140px]">
          {data.description}
        </p>
      </div>
    </Card>
  );
};
