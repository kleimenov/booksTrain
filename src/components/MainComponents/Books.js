import React from 'react';

const Books = (props) => {
    return (
        <ul>
            <img src={props.image} alt=""/>
            <h4>Title: {props.title} </h4>
            <span>{props.author}</span>
            <p>Published: {props.desc}</p>
        </ul>
    )
}

export default Books;