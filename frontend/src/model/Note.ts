class Note {
  id: string;
  bookID: string;
  date: { year: number; month: number; day: number };
  chapter: string;
  chapterIndex: number;
  text: string;
  cfi: string;
  range: string;
  notes: string;
  color: number;
  tag: string[];
  constructor(
    id: string,
    bookID: string,
    chapter: string,
    chapterIndex: number,
    text: string,
    cfi: string,
    range: string,
    notes: string,
    color: number,
    tag: string[]
  ) {
    this.id = id;
    this.bookID = bookID;
    this.date = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };
    this.chapter = chapter;
    this.chapterIndex = chapterIndex;
    this.text = text;
    this.cfi = cfi;
    this.range = range;
    this.notes = notes || "";
    this.color = color;
    this.tag = tag;
}
}

export default Note;
