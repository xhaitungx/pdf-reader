class Note {
  _id: string;
  date: { year: number; month: number; day: number };
  text: string;
  meaning: string;
  example: string[];
  constructor(id: string, text: string, meaning: string, example: string[]) {
    this._id = id;
    this.date = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };
    this.text = text;
    this.meaning = meaning;
    this.example = example;
  }
}

export default Note;
