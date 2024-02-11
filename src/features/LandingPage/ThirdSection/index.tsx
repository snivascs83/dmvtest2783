import React from "react";
import Image from "next/image";

function ThirdSection() {
  return (
    <div>
      <div className="flex flex-col gap-[30px] p-[20px] md:flex md:flex-1 md:flex-row md:justify-between md:gap-[80px] md:px-[60px] md:pb-[40px]">
        <div>
          <Image
            src="/images/Group 1187.png"
            alt=""
            width={370.75}
            height={212.23}
            className="md:h-[379.77.56px] md:w-[542.35px]"
          />
        </div>
        <div className="md: flex flex-1 flex-col gap-[10px] md:justify-center">
          <h1 className="leading:[44px]  text-[20px] font-medium leading-[30px] text-[#000000] md:text-[36px]">
            Driving Test Written Exam Practice
          </h1>
          <p className=" text-[12px] font-medium leading-[18px] text-[#667085] md:text-[16px] md:leading-[24px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industryies standard dummy text
            ever since the 1500s, whe Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industries standard dummy text ever since the 1500s, whe
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
