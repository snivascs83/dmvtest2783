import React, { useEffect, useState } from "react";
import PraticeCard from "./PraticeCard";
import { useRouter } from "next/router";
import { TEST_PAGE } from "../../../utils/apiUrls";
import axiosApiClient from "../../../utils/axiosClientLibs";
import { layoutSliceActions } from "features/layouts/redux/slice";
import { useAppDispatch } from "app/hooks";
const PraticeList = () => {
  const [testList, setTestListData] = useState<any>();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const fetchData = async () => {
    dispatch(layoutSliceActions.setLoader(true));
    try {
      const response = await axiosApiClient.get(
        `${TEST_PAGE}?populate[questions][fields][0]=id&populate[category][fields][0]=id&populate[states][fields][0]=id&populate[tag][fields][0]=id`
      );
      setTestListData(response.data);
      dispatch(layoutSliceActions.setLoader(false));
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(layoutSliceActions.setLoader(false));
    }
  };
  useEffect(() => {
    fetchData();
  }, [router.isReady]);
  return (
    <>
      <PraticeCard {...testList} />
    </>
  );
};
export default PraticeList;
