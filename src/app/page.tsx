import { About } from "@/components/About";
import { CTA } from "@/components/CTA/CTA";
import { Hero } from "@/components/Hero/Hero";
import { Template } from "@/components/motion/template";
import { Reviews } from "@/components/Reviews/Reviews";
import { Service } from "@/components/ServiceComponents/Service";
import { Work } from "@/components/Work/Work";

export default function Home() {
  return (
    <Template>
      <Hero />
      <About />
      {/* <Service /> */}
      <Work />
      {/* <Reviews /> */}
      <CTA />
    </Template>
  );
}
