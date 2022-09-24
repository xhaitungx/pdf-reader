class Book {
  id: string;
  name: string;
  md5: string;
  cover: Buffer;
  constructor(_id: string, name: string, md5: string, cover: Buffer) {
    this.id = _id;
    this.name = name;
    this.md5 = md5;
    this.cover = cover;
  }
}

export default Book;
