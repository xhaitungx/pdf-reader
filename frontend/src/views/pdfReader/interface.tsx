// import BookModel from "../../model/Book";
import NoteModel from "../../model/Note";
export interface ViewerProps {
  bookNotes: NoteModel | null;
  handleFetchBookNotes: (payload: NoteModel | null) => void;
}
export interface ViewerState {
  noteText: string;
  isOpenNote: boolean;
  loading: boolean;
  pageX: number;
  pageY: number;
}
