import { FormContact } from "@/components/Form/FormContact";
import { Template } from "@/components/motion/template";
import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";
const ContactPage = () => {
  return (
    <Template>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-12">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              animi blanditiis delectus culpa quod autem dicta minus aliquam
              accusamus temporibus ipsum, nostrum, rem quia distinctio quaerat
              soluta, incidunt voluptatum maxime.
            </p>
          </div>
          {/* Illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat "></div>
        </div>
        {/*  */}
        <div className=" grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg ">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div className="">phatht2911@gmail.com</div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div className="">
                221 Trương Văn Bàng, Thạnh Mỹ Lợi, Q2, TP.HCM
              </div>
            </div>
            {/*  */}
            <div className="flex items-center gap-x-8">
              <PhoneIcon size={18} className="text-primary" />
              <div className="">+84 916 215 180</div>
            </div>
          </div>
          {/* form */}
          <FormContact />
        </div>
      </div>
    </Template>
  );
};

export default ContactPage;
