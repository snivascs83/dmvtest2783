import TestPage from "features/TestPage";
import MetaHead from "features/common/MetaHead";
import { withHeaderLayout } from "features/layouts/components/DefaultLayout";
import React from "react";

const Test = (props: any) => {
  return (
    <>
      <MetaHead {...props.meta} />
      <TestPage />
    </>
  );
};
export default withHeaderLayout(Test);
