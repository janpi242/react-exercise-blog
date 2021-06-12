import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ArticleList from './components/articleList'
import ArticleDetails from './components/articleDetails'
import store from './store/users'
import './scss/style.scss';


class App extends Component {

    constructor(props) {
        super(props)
    }

    fetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => {
                store.dispatch({ type: 'ADD_USERS', users: result })
            })
            .catch(e => {
                console.log(e)
            });
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <Switch>
                        <Route path="/article/:articleId">
                            <ArticleDetails />
                        </Route>
                        <Route path="/">
                            <ArticleList />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;