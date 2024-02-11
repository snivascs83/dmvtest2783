import React, { useEffect, useState } from "react";
import { STATE_DATA } from "../../../utils/apiUrls";
import axiosApiClient from "../../../utils/axiosClientLibs";
import Link from "next/link";
import Loader from "features/common/Loader";

function StatesCard() {
  const [states, setStates] = useState([]);
  const stateData = async () => {
    const res = await axiosApiClient.get(`${STATE_DATA}`, null, {
      Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
    });
    const data = await res.data;
    setStates(data.data);
  };
  useEffect(() => {
    stateData();
  }, []);
  states.map((i: any) => {
    console.log(i.id);
    console.log(i.attributes);
  });
  return (
    <div>
      {states.length > 0 ? (
        <div className="grid grid-cols-3 gap-[40px] rounded-[20px] bg-white p-[20px] text-[14px] font-medium leading-5">
          {states.map((i: any) => (
            <Link href="#" key={i.id}>
              {i.attributes.Name}
            </Link>
          ))}
        </div>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default StatesCard;
