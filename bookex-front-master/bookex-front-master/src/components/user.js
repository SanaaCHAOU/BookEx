import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Comment from './comment';

export function User(props){
    // const [user, setUser] = useState(() => props.user);
    const [votesAvg, setVotesAvg] = useState(0);
    

    useEffect(() => {
        if(props.user){
            const commentsCount = props.user.comments.length;
            const votesSum = props.user.comments
                .map(comment => comment.stars)
                .reduce((previous, currentValue) => previous + currentValue);
            const votesAvg = votesSum / commentsCount;
            const roundedVotesAvg = Math.round((votesAvg + Number.EPSILON) * 10) / 10;
            setVotesAvg(roundedVotesAvg);
        }
    }, [props.user])

    return (
        (props.user)? <Card className="user-box" style={{width: "100%", height: "500px", overflowX: 'scroll'}}>
            <Card.Header>@{props.user.username}</Card.Header>
            <Card.Body>
                <Card.Title>
                    Quotation : {votesAvg}/5
                </Card.Title>
                <ListGroup className="list-group-flush">
                    {props.user.comments.map(comment =>   <ListGroupItem key={comment.username + '_' + comment.time} style={{border: "none", padding:"5px 0"}}>
                                                        <Comment comment={comment}></Comment>
                                                    </ListGroupItem>)}
                </ListGroup>
            </Card.Body>
        </Card> : '');
}

export default User;