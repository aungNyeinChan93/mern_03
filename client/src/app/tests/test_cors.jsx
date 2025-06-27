import React from "react";
import { useEffect } from "react";
import { VITE_SERVER_URL } from "../config/env";

const Test_cors = () => {
  const getAllNotes = async () => {
    const res = await fetch(`${VITE_SERVER_URL}/api/v1/tests/err`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    getAllNotes();
  }, []);
  return (
    <React.Fragment>
      <section>CORS</section>
    </React.Fragment>
  );
};

export default Test_cors;
