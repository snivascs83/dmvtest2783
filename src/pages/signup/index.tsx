import React from "react";
import SignUpPage from "../../app/components/SignupPage";
import { withHeaderLayout } from "../../features/layouts/components/DefaultLayout";

const SignUp = () => {
  return (
    <>
      <SignUpPage />
    </>
  );
};
export default withHeaderLayout(SignUp);
