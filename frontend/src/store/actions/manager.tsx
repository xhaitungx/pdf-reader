import BookModel from "../../model/Book";

export function handleFetchBooks(books: BookModel[]) {
  return { type: "HANDLE_FETCH_BOOKS", payload: books };
}

export function handleFetchDeleteBooks(deleteBooks: BookModel[]) {
  return { type: "HANDLE_FETCH_DELETE_BOOKS", payload: deleteBooks };
}

export function handleFetchNotes(notes: BookModel[]) {
  return { type: "HANDLE_FETCH_NOTES", payload: notes };
}

export function handleFetchVocabularies(vocabularies: BookModel[]) {
  return { type: "HANDLE_FETCH_VOCABULARIES", payload: vocabularies };
}

export function handleLoading(isLoading: Boolean) {
  return { type: "HANDLE_LOADING", payload: isLoading };
}
