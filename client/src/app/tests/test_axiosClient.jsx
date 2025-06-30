import React, { useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";

const TestAxiosClient = () => {
  const [notes, setNotes] = useState([]);
  const fetchData = async () => {
    try {
      const {
        data: { result: notes },
      } = await axiosClient.get("/api/v1/notes");
      setNotes(notes);
      //   console.log(notes);
    } catch (error) {
      console.log(error.response.status);
      console.error(error);
    }
  };

  console.log(">>>", import.meta.env.VITE_SERVER_URL);

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <React.Fragment>
      <section>
        <h1>Test axios Client</h1>
        {notes &&
          notes.map((n) => {
            return (
              <li className="" key={n._id}>
                {n?.owner?.name}
              </li>
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default TestAxiosClient;
