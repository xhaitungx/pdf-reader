import BookModel from "../../model/Book";

export interface BookListProps {
  books: BookModel[];
  handleFetchBooks: (payload: BookModel[]) => void;
}

export interface BookListStates {
  searchInput: string;
  isLoading: boolean;
  bookListMenu: boolean;
  anchorEl: null | HTMLElement;
  open: boolean;
}
