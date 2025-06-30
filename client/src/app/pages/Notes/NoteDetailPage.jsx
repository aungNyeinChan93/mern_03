import React, { useEffect, useState } from "react";

import NoteDetailCard from "../../components/daisy/NoteDetailCard";
import useGetNote from "../../hooks/useGetNote";
import { VITE_SERVER_URL } from "../../config/env";
import { useParams } from "react-router";
import Loader from "../../components/base/Loader";
import Alert from "../../components/base/Alert";
import { Link } from "react-router";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const { getNote, isLoading, error } = useGetNote();

  const token = localStorage.getItem("token");

  const call = async () => {
    const { result } = await getNote(
      `${VITE_SERVER_URL}/api/v1/notes/${id}`,
      token
    );
    result && setNote(result);
  };

  useEffect(() => {
    call();
  }, [id]);

  return (
    <React.Fragment>
      {isLoading && (
        <>
          <Loader />
        </>
      )}
      {error && (
        <>
          <Alert />
        </>
      )}
      {!error && !isLoading && note && Object.keys(note).length > 0 && (
        <>
          <section className=" relative  min-h-screen ">
            <Link
              to={"/notes"}
              className="btn btn-lg btn-outline btn-primary mt-6"
            >
              ⬅️ Back
            </Link>
            <NoteDetailCard {...note} />
          </section>
        </>
      )}
    </React.Fragment>
  );
};

export default NoteDetailPage;
