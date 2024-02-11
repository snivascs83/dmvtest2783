import React from "react";
import LoginPage from "../../app/components/LoginPage";
import MetaHead from "../../features/common/MetaHead";
import { withHeaderLayout } from "../../features/layouts/components/DefaultLayout";
const Login = (props: any) => {
  return (
    <>
      <MetaHead {...props.meta} />
      <LoginPage />
    </>
  );
};

export const getStaticProps = async () => {
  const meta = {
    title: "Login",
  };

  return {
    props: {
      meta,
    },
  };
};

export default withHeaderLayout(Login);
