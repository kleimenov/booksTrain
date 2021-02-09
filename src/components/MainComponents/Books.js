import React from 'react';

const Books = (props) => {
    return (
        <ul>
            <h4>Title: {props.title} </h4>
            <span>{props.author}</span>
            <p>Description: {props.desc}</p>
        </ul>
    )
}

export default Books;