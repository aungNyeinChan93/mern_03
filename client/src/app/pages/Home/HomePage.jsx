import React, { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../../contexts/authProvider";
import RateLimit from "../../components/base/RateLimit";
import Banner from "../../components/others/Banner";

const HomePage = () => {
  const [isRateLimit, setIsRateLimt] = useState(true);
  // const { auth } = useContext(AuthContext);
  // console.log(
  //   auth &&
  //     Object.entries(auth).map(([k, value]) => (auth[k] = value.toUpperCase()))
  // );

  return (
    <React.Fragment>
      <Toaster />
      <section>
        <h2 className="p-2 text-lg text-red-500">
          {/* Home Page || {auth?.name ?? "unknown"} */}
        </h2>
        {/* {isRateLimit && <RateLimit />} */}
      </section>

      <section>
        <Banner />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
