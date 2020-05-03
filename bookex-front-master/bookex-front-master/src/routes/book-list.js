import React, { useState, useEffect } from 'react'
import { BookItem } from '../components/book-item';
import { getAllBooks } from '../services/book-api';
import { getUsersHavingBook } from '../services/user-api';
import UserList from '../components/user-list';
import User from '../components/user';
import './book-list.css';
import RequestList from '../components/request-list';

export function BookList(props) {
    const { currentUser } = props;
    const [selectedUser, setSelectedUser] = useState({});
    const [selectedBookIndex, setSelectedBookIndex] = useState(0)
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);
    const [isLoadingBooks, setIsLoadingBooks] = useState(true);
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);

    // loading books
    useEffect(() => {
        setIsLoadingBooks(true);
        getAllBooks()
            .then(resp => {
                setBooks(resp.data);
                setIsLoadingBooks(false);
            })
    }, [])

    let onSelectBook = (index) => (event) => {
        setSelectedBookIndex(index);
    }

    return (
        <div className="page">
            <div className="requestsDisplay" >
                <RequestList user={currentUser} type="incomming"></RequestList>
                <RequestList user={currentUser} type="outgoing"></RequestList>
            </div>
            <div className="booksDisplay">
                {books.map((book, index) => <BookItem book={book} key={book.isbn} onClick={onSelectBook(index)} active={index === selectedBookIndex}></BookItem>)}
            </div>
            <div className="userDisplay">
                { (isLoadingBooks)? '':
                        <UserList isbn={books[selectedBookIndex].isbn}></UserList>
                }
            </div>
        </div>  
    );
}

export default BookList;