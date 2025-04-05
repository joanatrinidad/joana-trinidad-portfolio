import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";

import MyImg from "./MyImg";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="flex flex-col xl:flex-row justify-between gap-x-8">
          {/** Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h1 className="h1 mb-4">Hello, I’m Joana Franchesca</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              BS Computer Science Major in Core Science at University of Santo
              Tomas
            </p>

            {/** Buttons and Social Media */}
            <div className="flex justify-center sm:justify-center xl:justify-start items-center gap-x-4 mt-4">
              <Button className="gap-x-2 flex rounded-md h-12 items-center border-2 border-[#1C1423] bg-secondary text-secondary-foreground dark:bg-primary dark:text-primary-foreground">
                DOWNLOAD CV <Download size={18} />
              </Button>

              <SocialMedia
                containerStyles="flex items-center gap-x-4"
                iconsStyles="text-2xl text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>
          </div>

          {/** Image */}
          {/** Fix the 2xl in the ellips **/}
          <div className="hidden xl:flex relative">
            <div className="absolute -top-10 xl:right-[-91px] xl:w-[670px] xl:h-[550px] ">
              <Image
                src="/ellipse.svg"
                alt="Decorative Circle"
                layout="fill"
                objectFit="cover"
              />
              <MyImg imgSrc="/dev.png" />
            </div>
          </div>
        </div>

        {/** Arrow Icon 
        <div className="hidden md:flex absolute bottom-4 left-2/4 transform -translate-x-2/4 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>

        */}
      </div>
    </section>
  );
};

export default Hero;