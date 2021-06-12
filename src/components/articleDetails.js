import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Comments from './comments.js'


const ArticleDetails = () => {
    let { articleId } = useParams();
    const [article, setArticle] = useState({})
    const [author, setAuthor] = useState("")

    const users = useSelector(state => state.users)
    const findUserById = id => users.length ? users.find(user => user.id == id).name : ''

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
            const json = await response.json()
            setArticle(json)
            setAuthor(findUserById(json.userId))
        }
        fetchArticle()
    }, [users]);

    return (
        <div>
            <h3>{article.title}</h3>
            <div>
                Author: <strong>{author}</strong>
            </div>
            <div>
                <p>{article.body}</p>
            </div>
            <hr />
            <Comments articleid={article.id} />
        </div>
    )
}

export default ArticleDetails