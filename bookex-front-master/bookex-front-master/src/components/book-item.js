import React, { useState } from 'react'
import { votesAverage } from './util';
import "./book-item.css";
import "holderjs";

export function BookItem(props) {
    const { onClick, active } = props;
    const [book, setBook] = useState(props.book);
    const votesAvg = votesAverage(book);

    return (
        <div className={active? "book-item-box selected": "book-item-box"} onClick={onClick} style={{border: ""}}>
                <img src="http://www.allitebooks.org/wp-content/uploads/2020/05/PCI-DSS.jpg" width={100} height={140} className="book-img"></img>
                <p className="book-desc">
                    <span style={{fontWeight: "bold"}}>{book.title}</span><br/>
                    <span>Quotation : {votesAvg}/5</span><br/>
                    <span>ISBN      : {book.isbn}</span><br/>
                    <span>Language  : {book.language}</span><br/>
                    <span>Edition   : {book.edition}</span>
                </p>
        </div>);
}