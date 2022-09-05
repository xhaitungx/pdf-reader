class Book {
  id: string;
  name: string;
  md5: string;
  cover: Buffer;
  constructor(id: string, name: string, md5: string, cover: Buffer) {
    this.id = id;
    this.name = name;
    this.md5 = md5;
    this.cover = cover;
  }
}

export default Book;
