import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../../contexts/authProvider";

const HomePage = () => {
  const { auth } = useContext(AuthContext);
  console.log(
    auth &&
      Object.entries(auth).map(([k, value]) => (auth[k] = value.toUpperCase()))
  );

  return (
    <React.Fragment>
      <section>
        <h2 className="p-2 text-lg text-red-500">
          Home Page || {auth?.name ?? "unknown"}
        </h2>
        <Toaster />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
