const noteArray = [{ title: "abcd", content: "alkdj" }];

function addNote(note) {
  noteArray.push(note);
}

function deleteNote(note, id) {
  noteArray.filter((note, index) => {
    return index !== id;
  });
}

export default noteArray;
export { addNote, deleteNote, noteArray };
