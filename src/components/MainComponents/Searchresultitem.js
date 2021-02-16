import React from 'react';

const Searchresultitem =({ bookName, bookAuthor })=>{

    return (
    <li>
       <h5>{ bookName } / { bookAuthor } </h5> 
    </li>
    )
}

export default Searchresultitem;
