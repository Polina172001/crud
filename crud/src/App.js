import {useEffect, useState} from "react";
import createRequest from "./api/createRequest";
import NoteForm from "./components/NoteForm";

import './App.css';
import NotesList from "./components/NoteList/NoteList";
import NoteTitle from "./components/NoteTitle";


function App() {
  const [notes, setNotes] = useState([]);

  const refresh = async () => {
    const response = await createRequest({method: 'get'});
    setNotes([...response]);
  }

  useEffect(() => {
    const fetchData = async () => {
      refresh()
    }
    fetchData();
  }, []);


  const addNewNotesHandler =  async (note) => {
    try {
      const payload = {
        content: note
      }
      await createRequest({payload, method: 'post'});
      refresh()
    } catch (error) {
      return <p>Error: {error}</p>
    }
  }

  const updateNotesHandler = async () => {
    refresh()
  }

  const deleteNoteHandler = async (id) => {
    await createRequest({id, method: 'delete'});
    refresh()
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
