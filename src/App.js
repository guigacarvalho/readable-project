import React, { Component } from 'react';
import '../node_modules/milligram/dist/milligram.css';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import PostsList from './components/PostsList'
import PostAdd from './components/PostAdd'
import PostEdit from './components/PostEdit'
import PostDetail from './components/PostDetail'
import AddButton from './components/AddButton'
import CommentAdd from './components/CommentAdd'
import CategoriesList from './components/CategoriesList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <h1>= readable =</h1>
          {/* Homepage */}
          <Route path='/' render={({history}) => (
            <div>
              <CategoriesList/>
              <AddButton type="post" url="/create"/>
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
          <Route exact path='/comment/:id' component={CommentAdd} />
          {/* <Route exact path='/comment/:id' component={CommentAdd} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
