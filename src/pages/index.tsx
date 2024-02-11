// import SliderComponent from "features/TestPage/SliderComponent";
//import PraticeList from "features/PraticeList";
import withDefaultLayout from "features/layouts/components/DefaultLayout";
//import Landing from "../features/Landing";
import React from "react";
import LandingPage from "features/LandingPage";
import FAQ from "features/FAQ";
import axiosApiClient from "../../utils/axiosClientLibs";
import { Landing_Page } from "../../utils/apiUrls";

const Home = (props) => {
  return (
    <>
      {/* <PraticeList /> */}
      {/* <SliderComponent /> */}

      <LandingPage />

      <FAQ />
    </>
  );
};
export default withDefaultLayout(Home);

export async function getStaticProps() {
  const response = await axiosApiClient.get(`${Landing_Page}`, null, {
    Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
  });
  const data = await response.data;

  return {
    props: {
      content: data,
    },
  };
}
