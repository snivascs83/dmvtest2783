import React from "react";
import Image from "next/image";

function SecondSection({ setIsVisiable, isVisiable }) {
  return (
    <div>
      <div className="flex flex-col gap-[20px] px-[20px] pt-[40px] md:flex md:flex-1 md:flex-row md:gap-[80px] md:px-[60px] md:pb-[40px]">
        <div className="flex flex-col gap-[10px] md:flex-1 md:gap-[20px]">
          <div>
            <h1 className="md:tex-[36px]  text-[20px] font-medium leading-[30px] text-[#000925] md:leading-[44px]">
              Driving Test Written Exam Practice
            </h1>
          </div>
          <div>
            {" "}
            <p className=" text-[12px] font-normal leading-[18px] text-[#667085] md:text-[16px] md:font-medium md:leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, whe Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industrys standard dummy text ever since the 1500s, whe
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div>
            <button
              className="rounded-[8px] border-[1px] bg-[#4847A4] px-[30px] py-[14px]  text-[14px] leading-[24px] text-[#FFFFFF] md:font-semibold md:text-[2opx]"
              onClick={() => setIsVisiable(!isVisiable)}
            >
              Practice Now
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] md:flex-1 md:gap-[88px]">
          <div className="flex1 flex gap-[20px] md:gap-[15px]">
            <div className="md:flex1 flex flex-col gap-[15px]">
              <div>
                <Image
                  src="/images/Group 1203.png"
                  alt=""
                  width={100}
                  height={100}
                  className=""
                />
              </div>

              <div className=" text-[18px] font-medium leading-[28px] text-[#000000] md:text-[20px] md:leading-[30px]">
                Car Driving Tests
              </div>
              <div className="w-[49px] border-[3px] border-solid border-[#4847A4]"></div>
              <div className=" text-[12px] font-normal leading-[18px] text-[#667085] md:text-[14px] md:leading-[20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>

              <div>
                <button className=" border-b-[1px] border-[#667085]  text-[12px] font-semibold leading-6 md:text-[16px]">
                  Start Practicing
                </button>
              </div>
            </div>

            <div className="md:flex:1 flex flex-col gap-[15px]">
              <div>
                <Image
                  src="/images/Group 1204.png"
                  alt=""
                  width={100}
                  height={100}
                  className=""
                />
              </div>

              <div className=" text-[18px] font-medium leading-[28px] text-[#000000] md:text-[20px] md:leading-[30px]">
                Bike Driving Tests
              </div>
              <div className="w-[49px] border-[3px] border-solid border-[#4847A4]"></div>
              <div className="t  text-[12px] font-normal leading-[18px] text-[#667085] md:text-[14px] md:leading-[20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div>
                <button className=" border-b-[1px] border-[#667085]  text-[12px] font-semibold leading-6 md:text-[16px]">
                  Start Practicing
                </button>
              </div>
            </div>
          </div>

          <div className="flex1 flex gap-[20px] md:gap-[15px]">
            <div className="md:flex:1 flex flex-col gap-[15px]">
              <div>
                <Image
                  src="/images/Group 1205.png"
                  alt=""
                  width={100}
                  height={100}
                  className=""
                />
              </div>

              <div className=" text-[18px] font-medium leading-[28px] text-[#000000] md:text-[20px] md:leading-[30px]">
                Other Driving Tests
              </div>
              <div className="w-[49px] border-[3px] border-solid border-[#4847A4]"></div>
              <div className=" text-[12px] font-normal leading-[18px] text-[#667085] md:text-[14px] md:leading-[20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div>
                <button className=" border-b-[1px] border-[#667085]  text-[12px] font-semibold leading-6 md:text-[16px]">
                  Start Practicing
                </button>
              </div>
            </div>

            <div className="md:flex:1 flex flex-col gap-[15px]">
              <div>
                <Image
                  src="/images/Group 1206.png"
                  alt=""
                  width={100}
                  height={100}
                  className=""
                />
              </div>

              <div className=" text-[18px] font-medium leading-[28px] text-[#000000] md:text-[20px] md:leading-[30px]">
                Other Driving Tests
              </div>
              <div className="w-[49px] border-[3px] border-solid border-[#4847A4]"></div>
              <div className=" text-[12px] font-normal leading-[18px] text-[#667085] md:text-[14px] md:leading-[20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div>
                <button className=" border-b-[1px] border-[#667085]  text-[12px] font-semibold leading-6 md:text-[16px]">
                  Start Practicing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
