import React from "react";

function FooterOne() {
  return (
    <div className="px-[10px] py-[20px] md:p-[40px]">
      <div className="flex flex-col gap-7 bg-gradient-to-tr from-[#F14F32] via-[#2F2155] to-[#4847A4] px-[10px] py-[40px] md:rounded-[40px]">
        <div className="text-center  text-[21px] font-bold leading-[30px] text-[#FFFFFF] md:text-[50px] md:leading-[62.85px]">
          2024 Driving Test Effortlessly!
        </div>

        <div className="font-[IBM Plex Sans] text-center text-[15px] font-normal leading-5 text-[#FFC68A] md:text-[18px] md:leading-[27px]">
          As authentic as the actual experience, and surpassing the drivers
          guide in effectiveness.
        </div>

        <div className="flex items-center justify-center">
          <button className="leading-[24px]md:py-[15px] rounded-[100px] bg-[#FFFFFF] px-[18px] py-[20px] text-[18px] text-[#5635AE] md:px-[30px] md:text-[20px]  md:leading-[30px]">
            start with Premium
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterOne;
