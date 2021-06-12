import React, { useState, useEffect } from 'react'

const comments = (props) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.articleid}/comments`)
            const json = await response.json()
            setComments(json)
        }
        fetchComments()
    }, [props]);

    return (
        <div>
            <h4>Comments:</h4>
            {comments.map((comment,index )=>
                <div key={comment.id} className={`comment${!index ? ' comment--accented':''}`}>
                    <strong>{comment.name}</strong><br />
                    by <a href={`mailto:${comment.email}`} className="comment__email">{comment.email}</a>
                    <p>{comment.body}</p>
                </div>
            )}
        </div>
    )
}

export default comments