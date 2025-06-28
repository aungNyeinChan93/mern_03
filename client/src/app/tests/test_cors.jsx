import React, { useState } from "react";
import { useEffect } from "react";
import { VITE_SERVER_URL } from "../config/env";

const Test_cors = () => {
  const [error, setError] = useState();
  const getAllNotes = async () => {
    const res = await fetch(`${VITE_SERVER_URL}/api/v1/tests/err`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setError(data.error);
  };
  useEffect(() => {
    getAllNotes();
  }, []);
  return (
    <React.Fragment>
      <section>
        <p className="text-red-600 text-sm">{error}</p>
      </section>
    </React.Fragment>
  );
};

export default Test_cors;
