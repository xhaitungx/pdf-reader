import React from "react";
import { NoteListProps, NoteListStates } from "./interface";
import ComponentRoutes from "../../router/ComponentRoutes";
import "./style.css";
class NoteList extends React.Component<NoteListProps, NoteListStates> {
  render() {
    return <h1>NoteList</h1>;
  }
}

export default NoteList;
