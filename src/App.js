import React, { Component } from 'react';
import '../node_modules/milligram/dist/milligram.css';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter, Route} from 'react-router-dom'
import PostsList from './components/PostsList'
import CategoriesList from './components/CategoriesList'
import * as Actions from './actions/'

class App extends Component {
  state = {
    categories: [], 
    posts:[],
  }

  componentDidMount() {
    // Get all categories
    this.props.dispatch(Actions.fetchCategories());

    // Get posts from all Categories
    this.props.dispatch(Actions.fetchPosts());
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' render={() => (
        <div className="App">
          <h1>= readable =</h1>
          <CategoriesList categories={this.props.categories}></CategoriesList>
          <PostsList posts={this.props.posts} category=""></PostsList>
        </div>
          )}/>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  categories: state.categories
});

export default connect(mapStateToProps)(App);
