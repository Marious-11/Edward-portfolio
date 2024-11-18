import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"} className="text-primary font-bold text-3xl">
      {/* <Image src="/vercel.svg" alt="logo" width={50} height={50} priority /> */}
      EDWARD
    </Link>
  );
}

export default Logo;
