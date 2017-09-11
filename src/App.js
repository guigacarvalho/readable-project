import React, { Component } from 'react';
import '../node_modules/milligram/dist/milligram.css';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import PostsList from './components/PostsList'
import CreatePost from './components/CreatePost'
import AddPostButton from './components/AddPostButton'
import LeaveComment from './components/LeaveComment'
import CategoriesList from './components/CategoriesList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <h1>= readable =</h1>
        <Route path='/' render={({history, location}) => (
          <div>
            <CategoriesList/>
            <AddPostButton/>
            <Route exact path='/' component={PostsList} />
            <Route exact path='/category/:path' component={PostsList} />
          </div>
          )}/>
        
        <Route exact path='/create' component={CreatePost} />
        <Route exact path='/comment/:id' component={LeaveComment} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
