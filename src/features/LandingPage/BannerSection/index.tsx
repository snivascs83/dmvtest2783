import Image from "next/image";

const Home = ({ setIsVisiable, isVisiable }) => {
  return (
    <div>
      <div className="bg-[#F9F3F0] md:p-[40px]">
        <div className="flex flex-col gap-[30px] px-[20px] py-0 md:flex-row md:justify-between md:py-4 md:pl-[50px] md:pr-[100px]">
          <div className="flex flex-col gap-[15px] md:flex-col md:gap-[40px]">
            <div className="  text-[24px] font-bold leading-8 text-[#1D1D1B]  md:text-[60px] md:font-semibold md:leading-[79px] md:-tracking-[2]">
              <h1>
                Master Your <span className="text-[#4942BB]">2024 Driving</span>
                Test Effortlessly!
              </h1>
            </div>
            <div className=" text-[14px] font-normal leading-5 text-[#1D1D1B] md:text-[24px] md:leading-8">
              As authentic as the actual experience, and surpassing the drivers
              guide in effectiveness.
            </div>
            <div>
              <button
                className="rounded-[8px] border-[1px] bg-[#4847A4] px-[14px] py-[8px] text-[14px] font-semibold leading-5 text-[#FFFFFF] md:px-[35px] md:py-4 md:text-[20px] md:leading-[30px]"
                onClick={() => setIsVisiable(!isVisiable)}
              >
                Take free practice tests
              </button>
            </div>
            <div className="flex  text-[14px] font-normal leading-5 text-[#1D1D1B] md:flex-col md:gap-[4px] md:text-[24px] md:leading-8">
              <p>Or pass the first time, </p>
              <p>
                {" "}
                Guaranteed{" "}
                <span className="font-semibold text-[#4942BB] underline md:font-bold">
                  with Premium
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:w-[630px] md:pl-[6px]">
            <Image
              src="/images/Rectangle 102677.png"
              alt=""
              width={298}
              height={312}
              className="md:h-[542px] md:w-[483px] "
            />
          </div>
        </div>

        <div className="flex flex-col gap-[30px] pb-[0px] pl-[20px] pr-[20px] pt-[40px] md:flex-row md:gap-[40px] md:py-4 md:pl-[50px] md:pr-[100px]">
          <div className="flex gap-[10px] ">
            <div className="flex flex-col gap-[20px] md:flex md:items-center md:gap-[33px] md:px-[11px] md:py-[30px] md:text-center">
              <div></div>
              <div className=" ">
                <Image
                  src="/images/Group 1182.png"
                  alt="png"
                  width={42}
                  height={32.15}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className=" text-[16px] font-medium leading-6 text-[#000925] md:text-center md:text-[20px] md:leading-[30px]">
                  Start with engaging tests
                </h1>
                <p className=" text-[12px] font-normal leading-[18px] text-[#667085] md:text-center md:text-[14px] md:leading-[20px]">
                  As authentic as the actual experience, and surpassing the
                  drivers guide in effectiveness.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] md:flex md:items-center md:gap-[28px] md:px-[11px] md:py-[30px] md:text-center">
              <div></div>
              <div className=" ">
                <Image
                  src="/images/Group 1183.png"
                  alt="png"
                  width={42}
                  height={32.15}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className=" text-[16px] font-medium leading-6 text-[#000925]  md:text-center md:text-[20px] md:leading-[30px]">
                  Learn as you go
                </h1>
                <p className=" text-[12px] font-normal leading-[18px] text-[#667085] md:text-center md:text-[14px] md:leading-[20px]">
                  Just the stuff you need to know. No boring lectures and no
                  wasted time.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-[10px]">
            <div className="flex flex-col gap-[20px] md:flex md:items-center md:gap-[23px] md:px-[11px] md:py-[30px] md:text-center">
              <div></div>
              <div className=" ">
                <Image
                  src="/images/Group 1184.png"
                  alt="png"
                  width={44}
                  height={45.23}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className=" text-[16px] font-medium leading-6 text-[#000925] md:text-center md:text-[20px] md:leading-[30px]">
                  Take the Exam Simulator
                </h1>
                <p className=" text-[12px] font-normal leading-[18px] text-[#667085] md:text-center md:text-[14px] md:leading-[20px]">
                  Powerful Passing Probability algorithm predicts your results
                  in real time.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] md:flex md:items-center md:gap-[26px] md:px-[11px] md:py-[30px] md:text-center ">
              <div></div>
              <div className=" ">
                <Image
                  src="/images/Group 1185.png"
                  alt="png"
                  width={44}
                  height={44}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className=" text-[16px] font-medium leading-6 text-[#000925] md:text-center md:text-[20px] md:leading-[30px]">
                  Pass your exam
                </h1>
                <p className=" text-[12px] font-normal leading-[18px] text-[#667085]  md:text-center md:text-[14px] md:leading-[20px]">
                  By the time you take the exam, you will breeze through the
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
