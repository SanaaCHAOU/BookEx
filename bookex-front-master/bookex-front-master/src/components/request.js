import React, { useState, useEffect } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { getBook } from '../services/book-api';

export default function Request(props) {
    const { type, isbn, request } = props;
    const [book, setBook] = useState();
    const [isLoadingBook, setIsLoadingBook] = useState(true);

    useEffect(() => {
        getBook(isbn)
            .then(resp => {
                setBook(resp.data);
                setIsLoadingBook(false);
            })
    }, [isbn])

    return (isLoadingBook)? '' : (<Card style={{fontSize: "0.7em", textAlign: "left", marginBottom: "5px"}}>
        <Card.Body style={{padding: "5px"}}>
            <Card.Title>{book.title}</Card.Title>
            <span>{((type !== "incomming")? 'To @'+request.to : 'By @'+request.from)}</span><br/>
            <span>From {request.startDate} To {request.endDate}</span><br/>
            <span>{request.time}</span><br/>
            <Badge variant={statusColorMap[request.status]} style={{float: "right"}}>{request.status}</Badge>
        </Card.Body>
    </Card>);
}

const statusColorMap = {
    Pending: 'info',
    Accepted: 'success',
    Refused: 'danger',
    Started: 'primary',
    Returned: 'secondary'
}