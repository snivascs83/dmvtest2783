import React from "react";
import Image from "next/image";

function FooterTwo() {
  return (
    <div>
      <div className="flex flex-col gap-[40px] p-[20px] md:gap-[64px] md:px-[40px] md:py-[40px]">
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[32px] md:flex md:flex-row md:justify-between md:gap-[48px]">
            <div className="flex flex-col gap-[22px] md:gap-[32px]">
              <div>
                <Image src="/images/Frame.png" alt="" width={140} height={56} />
              </div>
              <div className=" text-[16px] font-normal leading-6 text-[#393434]"></div>
              <div className=" text-[16px] font-normal leading-6 text-[#393434] md:text-[#2F2155]">
                Design amazing digital experiences that create more happy in the
                world.
              </div>
              <div className=" grid grid-cols-3  gap-x-[8px] gap-y-[32px]  md:flex md:flex-row md:gap-[32px]">
                <button className=" text-[16px]  font-semibold leading-[24px] text-[#4942BB]">
                  Practics Tests
                </button>

                <button className=" text-[16px]  font-semibold leading-[24px] text-[#4942BB]">
                  Resources
                </button>

                <button className=" text-[16px]  font-semibold leading-[24px] text-[#4942BB]">
                  Premium Plans
                </button>

                <button className=" text-[16px]  font-semibold leading-[24px] text-[#4942BB]">
                  Helpful tools
                </button>

                <button className=" text-[16px]  font-semibold leading-[24px] text-[#4942BB]">
                  Privacy
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className=" text-[16px] font-medium leading-[24px] text-[#393434]">
                Get the app
              </div>
              <div className="flex flex-row gap-[16px] md:flex md:flex-col">
                <div>
                  <Image
                    src="/images/Mobile app store badge.png"
                    alt=""
                    width={186.5}
                    height={40}
                    className="rounded-[7px] md:h-[40] md:w-[135]"
                  />
                </div>
                <div>
                  <Image
                    src="/images/Mobile app store badge1.png"
                    alt=""
                    width={186.5}
                    height={40}
                    className="rounded-[7px] md:h-[40] md:w-[135]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] ">
          <div className="border border-[#151515]"></div>
          <div className="flex flex-col gap-[32px] md:flex-row md:justify-between">
            <div className=" text-center text-[16px] font-normal leading-[24px]">
              © 2024 DMV Permit Test.All rights reserved.
            </div>
            <div className="flex flex-row justify-center gap-[24px]">
              <Image
                src="/images/Social icon.png"
                alt=""
                width={24}
                height={24}
              />

              <Image
                src="/images/LinkedIn icon.png"
                alt=""
                width={24}
                height={24}
              />

              <Image src="/images/facebook.png" alt="" width={24} height={24} />

              <Image src="/images/git.png" alt="" width={24} height={24} />

              <Image src="/images/angel.png" alt="" width={24} height={24} />

              <Image src="/images/Dribble.png" alt="" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTwo;
