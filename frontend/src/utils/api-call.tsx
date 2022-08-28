import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5004/api",
  timeout: 15000,
});
export async function fetchBooks() {
  await Axios.get("/book");
}

export function fetchNotes() {}

export function fetchVocabularies() {}

export function fetchWordTranslation() {}

export function fetchSentenceTranslation() {}
