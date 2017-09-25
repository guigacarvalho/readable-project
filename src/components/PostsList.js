import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import Post from './Post'

class PostsList extends React.Component {
  upVote(postId) {
    this.props.dispatch(Actions.voteUp(postId));
  }

  downVote(postId){
    this.props.dispatch(Actions.voteDown(postId));
  }

  deletePost(postId) {
    this.props.dispatch(Actions.deletePost(postId));
  }

  editPost(postId) {
    this.props.history.push(`/editPost/${postId}`);  
  }
  updatePostsList(props) {
    const category = props.match.params.path;
    if(category) {
      // Get posts from specific Category
      this.props.dispatch(Actions.fetchPostsFromCategory(category));
    } else {
      // Get posts from all Categories
      this.props.dispatch(Actions.fetchPosts());
    }
  }
  handleSorting(e) {
    const sorting = e.target.value;
    this.props.dispatch(Actions.updateSorting(sorting));
    this.props.dispatch(Actions.sortPosts(sorting));
  }
  componentDidMount() {
    this.updatePostsList(this.props);
    
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.updatePostsList(nextProps)
    }
    this.props.dispatch(Actions.sortPosts(this.props.sorting));
  }

  
  render(){
    const {posts} = this.props
    const {path} = this.props.match ? this.props.match.params : {path: null};
    return (
      <div>
        <h3 className="spacing-top border-bottom spacing-bottom">{path ? `posts from ${path}` : 'all posts' }</h3>
        {
              Array.isArray(posts) ? (
              <div>
                Sort by:
                <select onChange={(e)=>this.handleSorting(e)} value={this.props.sorting}>
                  <option value="-timestamp">Most Recent</option>
                  <option value="timestamp">Least Recent</option>
                  <option value="-voteScore">Most Popular</option>
                  <option value="voteScore">Least Popular</option>
                </select>
              </div>
              ) : ''
          }
        {
          Array.isArray(posts) && posts.length > 0 ? 
            posts.filter((post) => !post.deleted).map((post, index) => (
              <Post content={post} history={this.props.history} key={index}/> 
            )) 
            : 'no posts to show'
        }
      </div>
      )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  sorting: state.sorting,
});

export default connect(mapStateToProps)(PostsList);