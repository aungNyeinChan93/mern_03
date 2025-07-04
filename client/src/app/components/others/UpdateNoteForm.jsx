import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axiosClient from "../../config/axiosClient";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";

const UpdateNoteForm = ({ _id, title, content }) => {
  const [newtitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const noteUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axiosClient.put(`/api/v1/notes/${_id}`, {
        title: newtitle,
        content: newContent,
      });
      if (data.success) {
        // console.log(data);
        toast.success("Note Update Success");
        setLoading(false);
        return navigate("/notes");
      }
    } catch (error) {
      console.error(error);
      if (error.response.status !== 200) {
        if (error.response.status === 400) {
          toast.error("Some Fields are required! ");
          setError("Some Fields are required! ");
          return;
        }
        toast.error(error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <section className=" ">
        <Toaster />
        {error && <>{error}</>}
        <form onSubmit={noteUpdate}>
          <fieldset className="fieldset lg:ms-6">
            <legend className="fieldset-legend">What is your note?</legend>
            {newtitle}
            <input
              type="text"
              className="input "
              placeholder={"title"}
              value={newtitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset lg:ms-6">
            <legend className="fieldset-legend">Your Content</legend>
            <textarea
              className="textarea h-34"
              placeholder={"text here"}
              onChange={(e) => setNewContent(e.target.value)}
              value={newContent}
            >
              {content}
            </textarea>
          </fieldset>

          <div className="flex justify-between items-center mt-2 card-actions">
            <button
              className={
                isLoading
                  ? "btn btn-dash lg:ms-6 my-2 text-red-300 "
                  : "btn btn-dash lg:ms-6 my-2 text-yellow-300"
              }
              type="submit"
              disabled={isLoading}
            >
              <div className="w-40 flex justify-center items-center">
                <span>
                  {isLoading && (
                    <>
                      <Loader />
                    </>
                  )}
                </span>
                <span>{isLoading ? "Updating ... " : "Update Note"}</span>
              </div>
            </button>
            <Link to={"/notes"} className="btn btn-dash text-yellow-300 me-5">
              ⬅️ Back
            </Link>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default UpdateNoteForm;
