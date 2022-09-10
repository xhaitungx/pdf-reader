class Vocabulary {
  _id: string;
  text: string;
  meaning: string;
  example: string[];
  constructor(id: string, text: string, meaning: string, example: string[]) {
    this._id = id;
    this.text = text;
    this.meaning = meaning;
    this.example = example;
  }
}

export default Vocabulary;
