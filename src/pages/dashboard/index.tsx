import React from "react";
import Link from "next/link";
import withAuth from "../../app/withAuth";
import { useRouter } from "next/router";
const Dashboard = () => {
  const router = useRouter();
  const logout = () => {
    sessionStorage.removeItem("ff_session_token");
    router.push("/login");
  };
  return (
    <>
      <h1>Dashboard</h1>

      <Link href="#" className="text-red-700" onClick={logout}>
        Logout
      </Link>
    </>
  );
};
export default withAuth(Dashboard);
