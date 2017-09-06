import React, { Component } from 'react';
import './App.css';
import * as CategoryAPI from './utils/CategoryAPI.js';
import * as PostAPI from './utils/PostAPI.js';


class App extends Component {
  state = {
    categories: [],
    posts: [],
    reduxPosts: [],
  }

  componentDidMount() {
    // Get all categories
    CategoryAPI.getAll().then(categories => {
      this.setState({categories});
    })
    
    // Get posts from all Categories
    PostAPI.getAll().then(posts => {
      console.log(posts);
      this.setState({posts});
    })

    // Get posts from the redux Categories
    CategoryAPI.getPosts('redux').then(reduxPosts => {
      this.setState({reduxPosts});
    })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Readable</h2>
        </div>
        <div>
          <h3>categories</h3>
          {
            Array.isArray(this.state.categories) ? this.state.categories.map((category, index) => (
             <li key={category.path}> <b>{category.name}</b> / {category.path} </li> )) : 'state is empty'
          }
        </div>
        <div>
          <h3>posts from all categories</h3>
          {
            Array.isArray(this.state.posts) ? this.state.posts.map((post, index) => (
             <li key={post.id}> <b>{post.title}</b> / {post.body} </li> )) : 'state is empty'
          }
        </div>
        <div>
          <h3>posts from the react category</h3>
          {
            Array.isArray(this.state.reduxPosts) ? this.state.reduxPosts.map((post, index) => (
             <li key={post.id}> <b>{post.title}</b> / {post.body} </li> )) : 'state is empty'
          }
        </div>
      </div>
    );
  }
}

export default App;
