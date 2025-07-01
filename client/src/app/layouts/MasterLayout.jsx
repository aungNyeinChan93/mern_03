import React, { useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/base/Navbar";
import { AuthContext } from "../contexts/authProvider";

const MasterLayout = () => {
  const { auth } = useLoaderData();
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    setAuth(auth);
  }, [auth, setAuth]);

  return (
    <React.Fragment>
      <div class="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <section className="min-h-screen mx-10 md:mx-[100px] lg:mx-[120px] mt-1">
        <Navbar />
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default MasterLayout;
