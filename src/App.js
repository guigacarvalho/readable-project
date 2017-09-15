import React, { Component } from 'react';
import '../node_modules/milligram/dist/milligram.css';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import PostsList from './components/PostsList'
import PostAdd from './components/PostAdd'
import PostEdit from './components/PostEdit'
import PostDetail from './components/PostDetail'
import CommentAdd from './components/CommentAdd'
import AppMenu from './components/AppMenu'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container align-center spacing-top">
          <h1>= readable =</h1>
          {/* Homepage */}
          <Route path='/' render={({history}) => (
            <div>
              <AppMenu/>
              <Route exact path='/' component={PostsList} history={history}/>
              <Route exact path='/category/:path' component={PostsList} />
            </div>
          )}/>
        
          {/* Post Routes */}
          <Route exact path='/post/:id' component={PostDetail}/>
          <Route exact path='/create' render={({history}) => (
            <PostAdd history={history}/>
          )}/>
          <Route exact path='/editPost/:id' render={({history, match}) => (
            <PostEdit history={history} match={match}/>
          )}/>
          
          {/* Comments Routes */}
          <Route exact path='/post/:id/comment' render={({history, match}) => (
            <CommentAdd history={history} match={match}/>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
