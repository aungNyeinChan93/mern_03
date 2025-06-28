import React from "react";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import Test from "../../tests/test_getProduct";
import TestCors from "../../tests/test_cors";

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
        <Toaster position="top-right" />

        <section>
          <Test />
          <TestCors />
        </section>
      </div>
    </React.Fragment>
  );
};

export default TestPage;
