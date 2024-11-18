import Image from "next/image";

export const DevImg = ({
  ImgSrc,
  containerStyles,
}: {
  containerStyles?: string;
  ImgSrc?: string;
}) => {
  return (
    <section className={`${containerStyles}`}>
      <Image src={ImgSrc ?? "/"} alt="dev image" className=" " fill priority />
    </section>
  );
};
