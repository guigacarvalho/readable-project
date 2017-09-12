import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import { Link } from 'react-router-dom'

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
  componentDidMount() {
    this.updatePostsList(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      // navigated!
      this.updatePostsList(nextProps)
    }
  }

  
  render(){
    const {posts} = this.props
    const {path} = this.props.match ? this.props.match.params : {path: null};
    return (
      <div>
        <h3>= {path ? `posts from ${path}` : 'all posts' } =</h3>
        {
          Array.isArray(posts) && posts.length > 0 ? posts.filter((post) => !post.deleted).map((post, index) => (
          <div key={post.id}>
          <hr/> 
          <h4>{post.title}</h4>
          <div className="ToolBar">
            <button className="button button-clear button-small controls"># {post.voteScore}</button> |
            <button className="button button-clear button-small controls"><span role="img" aria-label="upvote" onClick={()=>this.upVote(post.id)}>👍</span></button> |
            <button className="button button-clear button-small controls"><span role="img" aria-label="downvote" onClick={()=>this.downVote(post.id)}>👎</span></button> |
            <button className="button button-clear button-small controls"><span role="img" aria-label="edit">📝</span></button> |
            <button className="button button-clear button-small controls"><span role="img" aria-label="delete" onClick={()=>this.deletePost(post.id)}>❌</span></button>
          </div>
            <br /> by {post.author} | category: {post.category} <br/>
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