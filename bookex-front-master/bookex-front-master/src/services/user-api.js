import { users } from "./data";

export function getUser(username) {
    return new Promise((resolve, reject) => {
        let user = users.filter(u => u.username === username)[0];
        resolve({ data: user });
    });
}

export function getUsersHavingBook(isbn) {
    return new Promise((resolve, reject) => {
        let filteredUsers = users.filter(u => u.books.map(b => b.isbn).includes(isbn));
        resolve({ data: filteredUsers });
    });
}