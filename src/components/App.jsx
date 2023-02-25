import React from "react";
import Header from "./Header";
import Note from "./Note"
import Footer from "./Footer";
import Notes from "../notes";

// function createNote(note) {
//     return (
//         <Note 
//             key={note.key}
//             title={note.title}
//             content={note.content}
//         />
//     );
// }

function App() {
    return (
        <div>
            <Header />
            {/* {Notes.map(createNote)} */}
            {Notes.map( note => (
                <Note 
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;