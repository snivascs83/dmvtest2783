import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import { signupToDashboard } from "./redux/thunks";
import { useRouter } from "next/router";
import { layoutSliceActions } from "../../../features/layouts/redux/slice";
import { useAppDispatch } from "../../hooks";
const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [state, setState] = useState({
    firstName: { value: "", message: "" },
    email: { value: "", message: "" },
    password: { value: "", message: "" },
  });
  const onChange = (e: any) => {
    const { value, name } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: {
        value,
        message: "", // Resetting the message when the input changes
      },
    }));

    switch (name) {
      case "firstName": {
        setState((prevState) => ({
          ...prevState,
          firstName: {
            ...prevState.firstName,
            message: value ? "" : "Enter firstname",
          },
        }));
        break;
      }
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(value);
        setState((prevState) => ({
          ...prevState,
          email: {
            ...prevState.email,
            message: isEmailValid ? "" : "Invalid email format",
          },
        }));
        break;
      }
      case "password": {
        const isPasswordValid = value.length >= 6;
        setState((prevState) => ({
          ...prevState,
          password: {
            ...prevState.password,
            message: isPasswordValid
              ? ""
              : "Password must be at least 6 characters",
          },
        }));
        break;
      }
      default:
        break;
    }
  };
  const Submit = async (e: any) => {
    try {
      e.preventDefault();
      dispatch(layoutSliceActions.setLoader(true));
      const body = {
        username: state.firstName.value,
        email: state.email.value,
        password: state.password.value,
      };
      const response = await dispatch(signupToDashboard(body));
      console.log({ response: response });
      if (response.payload && response.payload?.user) {
        router.push("/dashboard");
      } else {
        toast.error(
          response.payload?.data?.error?.message ??
            "Invalid firstName or password",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
      dispatch(layoutSliceActions.setLoader(false));
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="flex min-h-screen items-center bg-gray-100 p-4 lg:justify-center">
        <div className="max flex flex-col overflow-hidden rounded-[40px] bg-white shadow-lg md:flex-1 md:flex-row lg:max-w-screen-sm">
          <div className="bg-white p-[80px] md:flex-1">
            <h3 className="my-4 text-center text-[36px] font-bold leading-[34px] tracking-[-2px] text-gray-700">
              Sign Up
            </h3>
            <div className="flex flex-col space-y-5">
              <div className="flex gap-[20px]">
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="email"
                    className="my-[10px] text-sm font-bold text-gray-500"
                  >
                    First Name
                  </label>
                  <input
                    type="firstName"
                    id="email"
                    name="firstName"
                    placeholder="First Name"
                    autoFocus
                    value={state.firstName.value}
                    onChange={onChange}
                    className="rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  <span className="text-red-700">
                    {state.firstName.message}
                  </span>
                </div>
                <div className="flex flex-1  flex-col">
                  <label
                    htmlFor="email"
                    className="my-[10px] text-sm font-bold text-gray-500"
                  >
                    Last Name
                  </label>
                  <input
                    type="lastName"
                    id="email"
                    placeholder="Last Name"
                    className="rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="my-[10px] text-sm font-bold text-gray-500"
                >
                  Email / Mobile Number
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email / Mobile Number"
                  autoFocus
                  name="email"
                  value={state.email.value}
                  onChange={onChange}
                  className="rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
                <span className="text-red-700">{state.email.message}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="my-[10px] text-sm font-bold text-gray-500"
                  >
                    Password
                  </label>
                </div>
                <input
                  placeholder="Enter password"
                  type="password"
                  id="password"
                  name="password"
                  value={state.password.value}
                  onChange={onChange}
                  className="rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
                <span className="text-red-700">{state.password.message}</span>
              </div>

              <div>
                <button
                  onClick={(e: any) => Submit(e)}
                  className="w-full rounded-md bg-[#FEC84B] px-4 py-2 text-lg font-semibold text-[#000000] shadow transition-colors duration-300 hover:bg-[#FEC84B] focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  Verify Your Mail ID
                </button>
              </div>
              <div className="border-1 border border-[#DDE1E6]"></div>

              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px w-14 bg-gray-400"></span>
                  <span className="font-normal text-gray-500">
                    or login with
                  </span>
                  <span className="h-px w-14 bg-gray-400"></span>
                </span>
                <div className="flex justify-center gap-[20px] ">
                  <div className="border-1 flex h-[46px] w-[112px] justify-center rounded-[8px] border border-[#D0D5DD]">
                    <Image
                      alt="apple_icon"
                      src="/svg/social/apple_icon.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="border-1 flex h-[46px] w-[112px] justify-center rounded-[8px] border border-[#D0D5DD]">
                    <Image
                      alt="google_icon"
                      src="/svg/social/google_icon.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="border-1 flex h-[46px] w-[112px] justify-center rounded-[8px] border border-[#D0D5DD]">
                    <Image
                      alt="fb_icon"
                      src="/svg/social/fb_icon.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              <div className="border-1 border border-[#DDE1E6]"></div>
              <div className="flex flex-col gap-[10px] text-center">
                <p className="text-[20px] text-[#001D6C]">
                  Already have an account?
                </p>
                <Link
                  href="/login"
                  className="text-sm text-[#000000] underline focus:text-blue-800"
                >
                  Login Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;
