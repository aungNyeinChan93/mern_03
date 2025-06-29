import React from "react";

const NoteDetailCard = ({ _id, title, content }) => {
  const dropNote = (_id) => {
    console.log(_id);
  };

  return (
    <React.Fragment>
      <div className="card bg-primary text-primary-content w-full min-h-100 my-7">
        <div className="card-body">
          <h2 className="card-title  text-4xl">{title}</h2>
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
