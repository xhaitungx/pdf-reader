import React from "react";
import { NoteListProps, NoteListStates } from "./interface";
import { NoteApi } from "../../api";
import "./style.css";
import Loading from "../../components/loading";
import Note from "../../model/Note";
class NoteList extends React.Component<NoteListProps, NoteListStates> {
  constructor(props: NoteListProps) {
    super(props);
  }

  async componentDidMount() {
    if (!this.props.notes) {
      const res = await NoteApi("getNotes");
      if (res && res.status === 200) {
        this.props.handleFetchNotes(res.data.notes);
        console.log(res.data.note);
      }
    }
  }

  renderNoteContainer(noteList: Note) {
    return (
      <>
        <h1>{noteList.bookName}</h1>
        {noteList.list.map((note) => (
          <div id={note._id} className="note">
            <div className="">{note.text}</div>
            <div className="">{note.note}</div>
          </div>
        ))}
      </>
    );
  }

  render() {
    return (
      <>
        {!this.props.notes && <Loading />}
        {this.props.notes && this.props.notes.length > 0 && (
          <div>
            {this.props.notes
              .filter((noteList) => noteList.list.length > 0)
              .map((noteList) => this.renderNoteContainer(noteList))}
          </div>
        )}
        {this.props.notes && this.props.notes.length === 0 && (
          <h1>Hiện chưa có note mới được thêm</h1>
        )}
      </>
    );
  }
}

export default NoteList;
