import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import { Link } from 'react-router-dom'
import PostToolBar from './PostToolBar'

class PostsList extends React.Component {
  state = {
    sorting: '-timestamp'
  }

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
      // Get posts from all Categories
      this.props.dispatch(Actions.fetchPostsFromCategory(category));
    } else {
      // Get posts from all Categories
      this.props.dispatch(Actions.fetchPosts());
    }
  }
  handleSorting(e) {
    const sorting = e.target.value;
    this.setState({sorting});
    this.props.dispatch(Actions.sortPosts(sorting));
  }
  componentDidMount() {
    this.updatePostsList(this.props);
    
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.updatePostsList(nextProps)
    }
    this.props.dispatch(Actions.sortPosts(this.state.sorting));
  }

  
  render(){
    const {posts} = this.props
    const {path} = this.props.match ? this.props.match.params : {path: null};
    return (
      <div>
        <h3>= {path ? `posts from ${path}` : 'all posts' } =</h3>
        {
              Array.isArray(posts) ? (
              <div>
                Sort by:
                <select onChange={(e)=>this.handleSorting(e)} value={this.state.sorting}>
                  <option value="-timestamp">Most Recent</option>
                  <option value="timestamp">Least Recent</option>
                  <option value="-voteScore">Most Popular</option>
                  <option value="voteScore">Least Popular</option>
                </select>
              </div>
              ) : ''
          }
        {
          Array.isArray(posts) && posts.length > 0 ? posts.filter((post) => !post.deleted).map((post, index) => (
          <div key={post.id}>
          <hr/> 
          <h4><Link to={`/post/${post.id}`} className="">{post.title}</Link></h4>
            <PostToolBar post={post} history={this.props.history} />
            <br />{new Date(post.timestamp).toDateString()} | by {post.author} | category: {post.category} <br/>
          {post.body} 
          <br /><br /><Link to={`/comment/${post.id}`} className="button button-small">Add a Comment</Link>
          </div> )) : 'no posts to show'
        }
      </div>
      )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(PostsList);