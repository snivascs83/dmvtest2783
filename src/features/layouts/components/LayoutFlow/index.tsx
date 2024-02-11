import { useRouter } from "next/router";
import { useCallback, useEffect, memo } from "react";
import { layoutSliceActions, layoutSliceState } from "../../redux/slice";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Loader from "features/common/Loader";

const LayoutFlow = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loader, isRedirecting } = useAppSelector(layoutSliceState);
  const handleStart = useCallback(
    (url: string, { shallow }: any) => {
      if (typeof url === "string" && !shallow) {
        dispatch(
          layoutSliceActions.setIsRedirecting({
            status: true,
            current: router.asPath,
          })
        );
      }
    },
    [router]
  );

  const handleComplete = (url: string) => {
    if (typeof url === "string") {
      dispatch(
        layoutSliceActions.setIsRedirecting({ status: false, current: url })
      );
    }
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return <>{isRedirecting.status || loader ? <Loader /> : null}</>;
};

export default memo(LayoutFlow);
