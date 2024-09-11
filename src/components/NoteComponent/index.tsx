import { Note } from '../../types/types';

interface NoteComponentProps {
  note: Note;
}

export default function NoteComponent({ note }: NoteComponentProps) {
  return (
    <div key={note.id}>
      <p>
        {note.content} {note.important}
      </p>
    </div>
  );
}
