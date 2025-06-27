import React, { useEffect, useRef } from "react";
import useRegister from "../../hooks/useRegister";
import { VITE_SERVER_URL } from "../../config/env";
import { useNavigate } from "react-router";

const RegisterForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { register, isLoading, error } = useRegister();

  const navigate = useNavigate();

  const registerSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const { success } = await register(
      `${VITE_SERVER_URL}/api/v1/auth/register`,
      formData
    );
    if (success) {
      return navigate("/");
    }
  };

  return (
    <React.Fragment>
      {isLoading && (
        <>
          <p>Loading . . . </p>
        </>
      )}

      <form
        className="max-w-md mx-auto space-y-5 mt-4 bg-amber-300 border border-amber-200 p-8 rounded"
        onSubmit={registerSubmit}
      >
        {error && (
          <>
            <p className="text-sm text-red-600 p-2">{error}</p>
          </>
        )}
        <div>
          <label className="mb-2 text-sm text-slate-900 font-medium block">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
            ref={nameRef}
          />
        </div>

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

        <button
          type="submit"
          className="!mt-8 px-6 py-2.5 text-sm font-medium bg-[#333] hover:bg-[#222] text-white rounded-sm cursor-pointer"
          disabled={isLoading}
          style={{ color: isLoading ? "blue" : "red" }}
        >
          Register
        </button>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
