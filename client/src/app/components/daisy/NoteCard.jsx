import React from "react";
import { Link } from "react-router";
import { dateFormat } from "../../utils/helper";

const NoteCard = ({ _id, title, content, owner, createdAt }) => {
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
          <div className="card-actions justify-between">
            <Link
              to={`/notes/detail/${_id}`}
              className="btn btn-primary btn-sm mt-2"
            >
              Detail
            </Link>
            {/* <Link to={`/notes`} className="btn btn-link btn-sm">
              Back
            </Link> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoteCard;
