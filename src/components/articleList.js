import React, { Component } from 'react'
import Article from './article'
import Pagination from './pagination'
import { Link } from "react-router-dom"

class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: false,
            articles: [],
            pageCount: 0,
            currentPage: 0
        }
    }

    fetchArticles = () => {
        this.setState({ isFetching: true });
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(result => {
                this.setState({ articles: result, pageCount: Math.ceil(result.length / 10), currentPage: 1, isFetching: false })
            })
            .catch(e => {
                console.log(e)
                this.setState({ ...this.state, isFetching: false })
            })
    }

    componentDidMount() {
        this.fetchArticles()
    }

    selectPage = (pageNumber) => {
        this.setState({currentPage: pageNumber})
    }

    render() {
        if (this.state.isFetching)
            return <span>Loading...</span>

        let currentArticles = this.state.articles.slice((this.state.currentPage - 1) * 10, this.state.currentPage * 10)

        return (
            <div>
                <h1>Article List</h1>
                <hr />
                {currentArticles.map((articleData) =>
                    <Link to={`/article/${articleData.id}`} key={articleData.id} >
                        <Article {...articleData} />
                    </Link>
                )}
                <Pagination currentPage={this.state.currentPage} pageCount={this.state.pageCount} handler={this.selectPage}/>
            </div>
        )
    }
}

export default ArticleList