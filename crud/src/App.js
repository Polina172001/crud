import {useEffect, useState} from "react";
import createRequest from "./api/createRequest";
import NoteForm from "./components/NoteForm";

import './App.css';
import NotesList from "./components/NoteList/NoteList";
import NoteTitle from "./components/NoteTitle";


function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await createRequest({method: 'get'});
      setNotes([...response]);
    }
    fetchData();
  }, []);


  const addNewNotesHandler =  async (note) => {
    try {
      const payload = {
        content: note
      }
      await createRequest({payload, method: 'post'});
      const response = await createRequest({method: 'get'});
      setNotes([...response])
    } catch (error) {
      return <p>Error: {error}</p>
    }
  }

  const updateNotesHandler = async () => {
    const response = await createRequest({method: 'get'});
    setNotes([...response]);
  }

  const deleteNoteHandler = async (id) => {
    await createRequest({id, method: 'delete'});
    const response = await createRequest({method: 'get'});
    setNotes([...response]);
  }

  return (
    <div>
      <NoteTitle updateNotes={updateNotesHandler}/>
      <div className="container">
        <NoteForm addNewNotes={addNewNotesHandler}/>
        <NotesList notes={notes} deleteNote={deleteNoteHandler}/>
      </div>
    </div>
  );
}

export default App;
