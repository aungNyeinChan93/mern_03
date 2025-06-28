import React from "react";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <React.Fragment>
      <section>
        <h2 className="p-2 text-lg text-red-500">Home Page</h2>
        <Toaster />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
