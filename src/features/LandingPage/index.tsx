import React from "react";
import BannerSection from "./BannerSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Cards from "./Cards";
import { useState } from "react";

import StatesCard from "features/StatesPage";

function LandingPage() {
  const [isVisiable, setIsVisiable] = useState(false);
  return (
    <div>
      <BannerSection setIsVisiable={setIsVisiable} isVisiable={isVisiable} />
      <SecondSection setIsVisiable={setIsVisiable} isVisiable={isVisiable} />
      <ThirdSection />
      <FourthSection />
      <Cards />

      {isVisiable && (
        <div
          className=" fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-3xl"
          onClick={() => setIsVisiable(!isVisiable)}
        >
          <StatesCard />
        </div>
      )}
    </div>
  );
}

export default LandingPage;
