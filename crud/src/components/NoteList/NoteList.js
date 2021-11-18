import NoteItem from "./NoteItem/NoteItem";

const NotesList = ({notes, deleteNote}) => {
  console.log(notes)
  return (
    <div className="row">
        {notes.map(note => <NoteItem key={note.id} id={note.id} text={note.content} deleteNote={deleteNote}/>)}
    </div>
  );
};

export default NotesList;