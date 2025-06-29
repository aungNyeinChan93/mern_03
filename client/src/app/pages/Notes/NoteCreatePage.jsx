import React from "react";
import CreateNoteForm from "../../components/others/CreateNoteForm";

const NoteCreatePage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="grid grid-cols-3 lg:mt-[150px] ">
          <div className="col-start-2 border border-green-300 py-4  px-6 rounded-4xl shadow ">
            <CreateNoteForm />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NoteCreatePage;
