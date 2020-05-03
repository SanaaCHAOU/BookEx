import { books } from "./data";
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:5000`
});

export function getAllBooks() {
    return new Promise((resolve, reject) => {
        resolve({ data: books });
    });
}

export function getBook(isbn) {
    const book = books.filter(b => b.isbn === isbn)[0];
    return new Promise((resolve, reject) => {
        resolve({ data: book });
    });
}