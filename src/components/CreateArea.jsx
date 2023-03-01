import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          name="title"
          placeholder="Title"
          value={props.noteTitle}
          onChange={props.onChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.noteContent}
          onChange={props.onChange}
        />
        <button onClick={props.onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
