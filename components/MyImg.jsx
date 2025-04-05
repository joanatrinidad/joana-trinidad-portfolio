import Image from "next/image";

const MyImg = ({ imgSrc }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative xl:right-[-56px] w-full object-contain h-[590px]">
        <Image 
          src={imgSrc} 
          fill 
          priority 
          alt="devImage" 
         // Adjust based on how you want the image to fit
        />
      </div>
    </div>
  );
};

export default MyImg;
