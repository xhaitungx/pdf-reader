class Note {
  id: string;
  bookId: string;
  bookName: string;
  list: INote[];
  constructor(
    id: string,
    bookId: string,
    bookName: string,
    list: INote[]
  ) {
    this.id = id;
    this.bookId = bookId;
    this.bookName = bookName;
    this.list = list;
  }
}

interface INote {
  id: string;
  text: string;
  note: string;
  color: string;
  cfi: string;
  range: string;
}

export default Note;
