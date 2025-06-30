import React from "react";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import Test from "../../tests/test_getProduct";
import TestCors from "../../tests/test_cors";
import SampleCard from "../../components/daisy/SampleCard";
import TestAxiosClient from "../../tests/test_axiosClient";

const TestPage = () => {
  const notify = () => toast("Here is your toast.");

  return (
    <React.Fragment>
      <div>
        <button
          className="my-2 px-4 py-2 rounded bg-green-300"
          onClick={() => notify()}
        >
          Make me a toast
        </button>
        <button className="btn btn-primary btn-link btn-outline"> Test</button>

        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-secondary ">
          Responsive
        </button>
        <Toaster position="top-right" />

        <section>
          <Test />
          <TestCors />
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-4 gap-10 space-x-3">
            {[1, 2, 3, 4, 5, 6].map((card) => {
              return <SampleCard key={card} />;
            })}
          </div>

          <p
            data-theme={"night"}
            className=" text-white p-2 text-center text-4xl"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
            deleniti molestias ab minima dolore odit necessitatibus quos fugit
            repellat asperiores.
          </p>
        </section>

        <section>
          <TestAxiosClient />
        </section>
      </div>
    </React.Fragment>
  );
};

export default TestPage;
