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
      <section className="min-h-screen mx-10 md:mx-[100px] lg:mx-[120px] mt-1">
        <Navbar />
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default MasterLayout;
