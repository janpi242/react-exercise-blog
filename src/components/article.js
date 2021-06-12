import React from 'react'

function Article(props) {
    return (
        <div className="article-snippet">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default Article