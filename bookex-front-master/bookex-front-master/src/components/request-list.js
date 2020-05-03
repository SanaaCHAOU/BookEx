import React, { useEffect, useState } from 'react';
import { getIncommingRequests, getOutgoingRequests } from '../services/request-api';
import { Card } from 'react-bootstrap';
import Request from './request';

export default function RequestList(props) {
    const { user, type } = props;
    const [requests, setRequests] = useState([]);
    const [isLoadingRequests, setIsLoadingRequests] = useState(true);

    useEffect(() => {
        if(type === 'incomming') {
            getIncommingRequests(user.username)
                .then(resp => {
                    setRequests(resp.data);
                    setIsLoadingRequests(false);
                })
        } else if(type === 'outgoing') {
            getOutgoingRequests(user.username)
                .then(resp => {
                    setRequests(resp.data);
                    setIsLoadingRequests(false);
                })
        }
    }, [user])

    return (
        (isLoadingRequests)? '' : <Card style={{marginBottom: "5px"}}>
            <Card.Header>
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </Card.Header>
            <Card.Body style={{padding: "5px"}}>
                {requests.map(req => <Request request={req} user={user} type={type} isbn={req.isbn} key={req.isbn + req.from + req.to + req.time}></Request>)}
            </Card.Body>
        </Card>
    );
}
