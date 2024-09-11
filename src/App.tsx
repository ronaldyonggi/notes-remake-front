import { useEffect, useState } from 'react';
import './App.css';
import { Note } from './types/types';
import notesService from './services/notes';
import NoteComponent from './components/NoteComponent';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const getAllNotes = async () => {
    try {
      const notes = await notesService.getAllNotes();
      setNotes(notes);
      console.log(notes)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <NoteComponent note={note} />
      ))}
    </div>
  );
}

export default App;
