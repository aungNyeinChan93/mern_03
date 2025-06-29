import React from "react";
import { Link } from "react-router";
import NoteCard from "../../components/daisy/NoteCard";
import useGetNotes from "../../hooks/useGetNotes";
import { VITE_SERVER_URL } from "../../config/env";
import Loader from "../../components/base/Loader";

const NotePage = () => {
  const token = localStorage.getItem("token");

  const { notes, isLoading, error } = useGetNotes(
    `${VITE_SERVER_URL}/api/v1/notes?fields=content,title&page=1&limit=9`,
    token
  );

  return (
    <React.Fragment>
      <section>
        <div className=" flex justify-end items-center">
          <div className="flex items-center px-[3rem] py-2">
            <Link
              className="btn btn-md border-b-green-300 my-3 hover:btn-primary"
              to={"/notes/create"}
            >
              ➕ Create Note
            </Link>
          </div>
        </div>
        <div className="border border-green-300/30 flex justify-center items-center py-8 rounded-lg my-2 lg:min-h-100">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 ">
            {isLoading && (
              <>
                <Loader />
              </>
            )}
            {notes &&
              notes.length > 0 &&
              notes.map((note) => {
                return <NoteCard key={note._id} {...note} />;
              })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NotePage;
