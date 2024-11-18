"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
export const FormContact = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/*  */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/*  */}
      <div className="relative flex items-center">
        <Textarea id="message" placeholder="Type your message here" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px] ">
        Let's Talk <ArrowRightIcon className="" size={20} />
      </Button>
    </form>
  );
};
