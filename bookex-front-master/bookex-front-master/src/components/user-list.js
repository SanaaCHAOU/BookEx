import React, { useState, useEffect } from 'react';
import { ListGroup, Button, Badge } from 'react-bootstrap';
import { votesAverage } from './util';
import { getUsersHavingBook } from '../services/user-api';
import User from './user';

export default function UserList(props) {
    const { onUserSelected } = props;
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setIsLoadingUsers(true);
        getUsersHavingBook(props.isbn)
            .then(resp => {
                setUsers(resp.data)
                // onUserSelected(users[0]);
                setIsLoadingUsers(false);
            });
    }, [props.isbn])

    let onItemClick = index => event => {
        event.preventDefault();
        setSelectedIndex(index);
        // onUserSelected(users[index]);
    };


    return (
        <>
        <ListGroup style={{ marginBottom: "5px", fontSize: "0.9em"}}>
            {users.map((user, index) => 
                <ListGroup.Item 
                    key={user.username} 
                    style={{ padding: "3px 3px"}} 
                    active={(index === selectedIndex)}
                    onClick={onItemClick(index)}>

                    <span className="username" style={{float: "left"}}>@{user.username}</span>
                    <Badge variant="info">{votesAverage(user) + '/5'}</Badge>
                    <Button variant="success" size="sm" className="request-btn" style={{float: "right", fontSize: "0.9em", padding: "2px 2px"}}>Request</Button>
                </ListGroup.Item>)
                
            }
        </ListGroup>
        {(isLoadingUsers)? '' : <User user={users[selectedIndex]}></User>}
        </>
    );
}
