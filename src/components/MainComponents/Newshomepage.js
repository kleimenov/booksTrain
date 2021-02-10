import React from 'react';

const News = (props) => {


    return (
        <div className="newscontainer">
            <li>{props.news}</li>
        </div>
    )
}

export default News;