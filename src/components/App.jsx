import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNote() {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });

    setNote({
      title: "",
      content: "",
    });
  }

  function deleteNode(id) {
    setNotes((prevNotes) => {
        return prevNotes.filter((note, index) => {
            return index !== id;
        })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        noteTitle={note.title}
        noteContent={note.content}
        onChange={handleChange}
        onAdd={addNote}
      />
      {notes.map((noteObj, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteObj.title}
            content={noteObj.content}
            onDelete={deleteNode}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
