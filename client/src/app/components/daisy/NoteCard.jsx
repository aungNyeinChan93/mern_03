import React from "react";
import { Link } from "react-router";

const NoteCard = ({ _id, title, content, owner }) => {
  return (
    <React.Fragment>
      <div className="card card-border bg-base-100 w-96 shadow-sm hover:shadow-2xl transition-shadow">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <span className="text-sm capitalize text-green-400 rounded flex">
            {owner?.name || "unknown"}
          </span>
          <p>{content}</p>
          <div className="card-actions justify-between">
            <Link to={`/${_id}`} className="btn btn-primary btn-sm mt-2">
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
