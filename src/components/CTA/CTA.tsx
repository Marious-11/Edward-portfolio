import Link from "next/link";
import { Button } from "../ui/button";

export const CTA = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepared turn your ideas into reality? I'm here to help.
          </h2>
          <Link className="" href={"/contact"}>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
