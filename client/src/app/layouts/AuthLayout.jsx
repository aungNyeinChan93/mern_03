import React from "react";
import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <section className="lg:mx-10 h-screen px-10">
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
      </div>
    </React.Fragment>
  );
};

export default AuthLayout;
