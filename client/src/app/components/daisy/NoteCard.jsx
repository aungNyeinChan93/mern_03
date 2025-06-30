import React from "react";
import { Link, useNavigate } from "react-router";
import { dateFormat } from "../../utils/helper";
import { ListCollapse, Delete } from "lucide-react";
import useDropNote from "../../hooks/useDropNote";
import toast from "react-hot-toast";

const NoteCard = ({ _id, title, content, owner, createdAt, setNotes }) => {
  const navigate = useNavigate();
  const { dropNote } = useDropNote();

  const deleteNote = async (id) => {
    const success = await dropNote(id);
    if (success) {
      setNotes((pre) => pre.filter((n) => n._id !== id));
      toast.success("Delete success");
      return navigate("/notes");
    }
  };

  return (
    <React.Fragment>
      <div className="card card-border border border-t-green-400  hover:border-b-red-400 hover:border-t-0 bg-base-100 w-96 shadow-sm hover:shadow-2xl transition-shadow">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className=" flex justify-between items-center py-1">
            <span className="text-sm capitalize text-green-400 rounded">
              {owner?.name || "unknown"}{" "}
            </span>
            <span className="text-xs text-red-400 ms-3">
              {/* {createdAt &&
                new Date(createdAt).toLocaleDateString("yangon", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })} */}
              {createdAt && dateFormat(createdAt)}
            </span>
          </div>
          <p>
            {content && content?.length > 200
              ? content?.substring(0, 200) + "  . . . "
              : content}
          </p>
          <div className="card-actions justify-end items-center">
            <Link
              to={`/notes/detail/${_id}`}
              className="text-green-400 btn border border-b-green-600 btn-sm mt-2"
            >
              <ListCollapse size={14} />
            </Link>
            <button
              type="button"
              to={`/notes`}
              className="text-red-400 btn border border-b-red-600 btn-sm mt-2"
              onClick={() => deleteNote(_id)}
            >
              <Delete size={14} />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoteCard;
