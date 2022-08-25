import React from "react";
import BookList from "../containers/book-list";
import NoteList from "../containers/note-list";
import VocabularyList from "../containers/vocabulary-list";
import { Routes, Route } from "react-router-dom";
const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/notes" element={<NoteList />} />
      <Route path="/vocabularies" element={<VocabularyList />} />
      <Route path="/deletes" element={<BookList />} />
    </Routes>
  );
};

export default ComponentRoutes;
