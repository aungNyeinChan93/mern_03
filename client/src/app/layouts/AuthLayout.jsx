import React from "react";
import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <section className="lg:mx-10 bg-amber-100 h-screen px-10">
        <ul className="w-full flex justify-between items-center py-4 mb-[130px]">
          <li className="px-4 py-2 bg-amber-400  ms-1 rounded text-white hover:bg-amber-500">
            <Link to={"/auth/login"}>Login</Link>
          </li>
          <li className="px-4 py-2 bg-amber-400  ms-1 rounded text-white hover:bg-amber-500">
            <Link to={"/auth/register"}>Register</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default AuthLayout;
