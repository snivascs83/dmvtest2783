import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="p-[20px]">
      <div></div>

      <div className="flex flex-row gap-[30px]">
        <div className="flex flex-col rounded-[16px] shadow-lg">
          <div>
            <Image
              src="/images/Rectangle 10262.png"
              alt=""
              width={327}
              height={160}
              className="rounded-tr-[20px]"
            />
          </div>
          <div className="flex flex-col gap-[12px] pb-[20px] pl-[22px] pr-[12px] pt-[25px]">
            <div className=" text-[20px] font-bold leading-5 text-[#000000]">
              Car Driving Test 1
            </div>
            <div className=" text-[12px] font-normal leading-[20px] text-[#2F2155]">
              A great place to start as it covers the basics of driving in AL.
              Each question comes with a hint explanation...
            </div>
            <div className="flex justify-between">
              <p className=" text-[12px] font-normal leading-[18px] text-[#343A3F]">
                1/25 Attempted
              </p>
              <p className=" text-[12px] font-normal leading-[18px] text-[#343A3F]">
                4 Mistakes Allowed to Pass
              </p>
            </div>
            <div className="flex justify-between">
              <button className="gap-[8px] rounded-[8px] border border-[#4942BB] bg-[#4942BB] px-[14px] py-[8px]  text-[14px] font-semibold leading-[20px] text-[#FFFFFF]">
                Start Test
              </button>
              <button className="gap-[8px] rounded-[8px] border border-[#4942BB] px-[14px] py-[8px]  text-[14px] font-semibold leading-[20px] text-[#4942BB]">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default index;
