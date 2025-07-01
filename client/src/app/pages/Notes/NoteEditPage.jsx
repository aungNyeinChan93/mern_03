import React, { useEffect, useState } from "react";
import UpdateNoteForm from "../../components/others/UpdateNoteForm";
import { useParams } from "react-router";
import useGetNote from "../../hooks/useGetNote";
import { VITE_SERVER_URL } from "../../config/env";

const NoteEditPage = () => {
  const { id } = useParams();
  const { getNote } = useGetNote();
  const token = localStorage.getItem("token");
  const [oldNote, setOldNote] = useState(null);

  useEffect(() => {
    (async () => {
      const { result } = await getNote(
        `${VITE_SERVER_URL}/api/v1/notes/${id}`,
        token
      );
      setOldNote(result);
    })();
  }, [id]);

  // console.log(oldNote);

  return (
    <React.Fragment>
      <section className="w-full mt-10">
        <div className="grid grid-cols-3 lg:mt-[150px] ">
          <div className="col-start-2 border border-yellow-300 py-4  px-6 rounded-4xl shadow ">
            {oldNote && <UpdateNoteForm {...oldNote} />}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NoteEditPage;
