class Bookmark {
  id: string;
  bookID: string;
  date: { year: number; month: number; day: number };
  cfi: string;
  label: string;
  chapter: string;
  constructor(
    id: string,
    bookID: string,
    cfi: string,
    label: string,
    chapter: string
  ) {
    this.id = id;
    this.bookID = bookID;
    this.date = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };
    this.cfi = cfi;
    this.label = label;
    this.chapter = chapter;
  }
}

export default Bookmark;
