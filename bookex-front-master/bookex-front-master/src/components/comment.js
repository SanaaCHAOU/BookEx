import React from 'react'

export function Comment(props){
    const { comment } = props;

    return (
            <div className="comment" style={styles}>
                <span className="username" style={{fontWeight: "bold", color: "gray"}}>@{comment.username}</span><br/>
                <span className="stars" style={{fontWeight: "bold", fontSize: "0.9em"}}>Quotation : {comment.stars}/5</span>
                <p className="text" style={{fontSize: "0.9em"}}>{comment.text}</p>
            </div>
        );
}

const styles = {
    borderRadius: "5px",
    border: "1px solid rgb(227, 225, 218)",
    margin: "0 0",
    textAlign: "left",
    padding: "5px"
}

export default Comment;