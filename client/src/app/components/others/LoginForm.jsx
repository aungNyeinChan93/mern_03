import React, { useEffect, useRef, useState } from "react";
import useLogin from "../../hooks/useLogin";
import { VITE_SERVER_URL } from "../../config/env";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { login, isLoading, error } = useLogin();
  const [authData, setAuthData] = useState(null);

  const loginSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const loginData = await login(
      `${VITE_SERVER_URL}/api/v1/auth/login`,
      formdata
    );
    if (loginData?.success) {
      setAuthData(loginData?.result ?? null);
      toast.success(
        `Login Success : ${
          loginData && (loginData?.result.name ?? "unknown")
        } `,
        {
          duration: 4000,
        }
      );
      const token = loginData && loginData?.result?.token;
      token && localStorage.setItem("token", token);
      return navigate("/");
    }
  };

  useEffect(() => {
    error &&
      Object.keys(error).length > 0 &&
      toast.error(error, { position: "top-center" });
  }, [error]);
  return (
    <React.Fragment>
      {isLoading && <>Loading . . .</>}
      {/* {error && <>{error}</>} */}
      <section className="">
        <form
          className="max-w-md mx-auto space-y-5 mt-4 bg-amber-300 border border-amber-200 p-8 rounded"
          onSubmit={loginSubmit}
        >
          <div>
            <label className="mb-2 text-sm text-slate-900 font-medium block">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
              ref={emailRef}
            />
          </div>

          <div>
            <label className="mb-2 text-sm text-slate-900 font-medium block">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
              ref={passwordRef}
            />
          </div>

          <div className="flex">
            <input type="checkbox" className="w-4" />
            <label className="text-sm ml-4 text-slate-900">Remember me</label>
          </div>

          <button
            type="submit"
            className="!mt-8 px-6 py-2.5 text-sm font-medium bg-[#333] hover:bg-[#222] text-white rounded-sm cursor-pointer"
          >
            Login
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default LoginForm;
