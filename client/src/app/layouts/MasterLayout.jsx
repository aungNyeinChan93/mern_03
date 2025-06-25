import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/base/Navbar";

const MasterLayout = () => {
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
