import React, { useState } from "react";
import useCreateNote from "../../hooks/useCreateNote";
import { VITE_SERVER_URL } from "../../config/env";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CreateNoteForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { createNote, isLoading, error } = useCreateNote();

  const token = localStorage.getItem("token");

  const noteCreate = async (e) => {
    e.preventDefault();
    const {
      result: note,
      success,
      message,
    } = await createNote(
      `${VITE_SERVER_URL}/api/v1/notes`,
      { title, content },
      token
    );
    if (success) {
      toast.success(`${note._id} -  ${message}`, {
        duration: 3000,
        position: "top-left",
      });
      return navigate("/");
    }
  };
  return (
    <React.Fragment>
      {isLoading && <>Loading ... </>}
      {error && <>{error}</>}
      <form onSubmit={noteCreate}>
        <fieldset className="fieldset lg:ms-6">
          <legend className="fieldset-legend">What is your note?</legend>
          <input
            type="text"
            className="input "
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset lg:ms-6">
          <legend className="fieldset-legend">Your Content</legend>
          <textarea
            className="textarea h-24"
            placeholder="type here!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </fieldset>

        <div>
          <button
            className="btn btn-dash lg:ms-6 my-2 text-green-300"
            type="submit"
          >
            Cretae Note
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreateNoteForm;
