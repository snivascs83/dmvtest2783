import Link from "next/link";
import React from "react";
const PraticeCard = (testList) => {
  return (
    <>
      <div>
        {/* <h4>Free Practice Tests</h4> */}
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          {testList?.data?.length > 0 &&
            testList.data.map((testInfo: any) => {
              const { attributes, id } = testInfo;
              return (
                <>
                  <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                    <Link href={`/testpage/${id}`}>
                      <img
                        className="rounded-t-lg"
                        src={
                          attributes.imageUrl ||
                          "https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                        }
                        alt="Skyscrapers"
                      />
                      <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          {attributes.title}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          {attributes.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default PraticeCard;
