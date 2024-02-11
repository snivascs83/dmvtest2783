import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { loginToDashboard } from "./redux/thunks";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { layoutSliceActions } from "../../../features/layouts/redux/slice";
import { useAppDispatch } from "../../hooks";
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Check if there is a remember me token in local storage
  const rememberMeToken =
    typeof sessionStorage !== "undefined" &&
    sessionStorage.getItem("rememberMeToken");
  const [rememberMe, setRememberMe] = useState(!!rememberMeToken);

  const [state, setState] = useState({
    email: { value: "", message: "" },
    password: { value: "", message: "" },
  });

  useEffect(() => {
    // If there is a remember me token, automatically check the checkbox
    if (rememberMeToken) {
      setRememberMe(true);
    }
  }, []);

  const onChange = (e: any) => {
    const { value, name } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: {
        value,
        message: "", // Resetting the message when the input changes
      },
    }));
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const submit = async (e: any) => {
    try {
      e.preventDefault();
      dispatch(layoutSliceActions.setLoader(true));

      const body = {
        identifier: state.email.value,
        password: state.password.value,
      };

      const response = await dispatch(loginToDashboard(body));

      if (response.payload) {
        // Save or remove remember me token based on user's choice
        if (rememberMe) {
          sessionStorage.setItem("rememberMeToken", "tokenValueHere");
        } else {
          sessionStorage.removeItem("rememberMeToken");
        }

        router.push("/dashboard");
      } else {
        toast.error("Invalid username or password", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
            <h3 className="font-Poppins-Bold my-4 text-center text-[36px] text-gray-700">
              Welcome
            </h3>
            <p className="font-Regular text-center text-[20px] text-gray-700">
              Please log in to continue
            </p>
            <div className="flex flex-col space-y-5">
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
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="mr-[10px] h-4 w-4 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-0"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Remember me
                  </label>
                </div>

                <span className="text-sm text-[#000000] underline focus:text-blue-800">
                  Forget Password
                </span>
              </div>
              <div>
                <button
                  onClick={(e: any) => submit(e)}
                  className="w-full rounded-md bg-[#FEC84B] px-4 py-2 text-lg font-semibold text-[#000000] shadow transition-colors duration-300 hover:bg-[#FEC84B] focus:outline-none focus:ring-4 focus:ring-[#FEC84B]"
                >
                  Log in
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
                  No account yet? Sign Up
                </p>
                <Link
                  href="/signup"
                  className="text-sm text-[#000000] underline focus:text-blue-800"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
