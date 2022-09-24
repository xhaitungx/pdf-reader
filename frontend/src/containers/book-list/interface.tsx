import BookModel from "../../model/Book";

export interface BookListProps {
  books: BookModel[];
  handleFetchBooks: (payload: BookModel[] | null) => void;
}

export interface BookListStates {
  searchInput: string;
  isLoading: boolean;
  bookListMenu: boolean;
}
