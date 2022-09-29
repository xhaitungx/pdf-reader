// import BookModel from "../../model/Book";
import Note from "../../model/Note";
export interface ViewerProps {
  handleFetchNotes: (payload) => void;
}
export interface ViewerState {
  loading: boolean;
  noteList: Note | null;
}
