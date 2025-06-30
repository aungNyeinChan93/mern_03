import React from "react";
import { dateFormat } from "../../utils/helper";

const NoteDetailCard = ({ _id, title, content, createdAt, owner }) => {
  const dropNote = (_id) => {
    console.log(_id);
  };

  return (
    <React.Fragment>
      <div className="card bg-primary text-primary-content w-full min-h-100 my-7">
        <div className="card-body">
          <h2
            className="card-title  text-4xl font-mono font-semibold"
            style={{ letterSpacing: "6px" }}
          >
            {title}
          </h2>
          <div>
            <p
              style={{ letterSpacing: "6px" }}
              className=" font-bold font-mono text-lg text-red-700"
            >
              {owner && owner?.name.toUpperCase()}
            </p>
            <span className="text-red-700 text-md">
              {createdAt && dateFormat(createdAt)}
            </span>
          </div>
          <p className="text-lg ">{content}</p>
          <div className="card-actions justify-end">
            <button type="button" onClick={() => dropNote(_id)} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoteDetailCard;
