import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import { Link } from 'react-router-dom'

class PostDetail extends React.Component {
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
    this.props.dispatch(Actions.editPost(postId));
    this.props.history.push(`/editPost/${postId}`);  
  }
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.dispatch(Actions.retrievePost(id));
    this.props.dispatch(Actions.retrieveComments(id));
  }

  
  render(){
    const {posts} = this.props
    const {path} = this.props.match ? this.props.match.params : {path: null};
    console.log(posts)
    return (
      <div>
        <h3>= {path ? `posts from ${path}` : 'all posts' } =</h3>
        {
          Array.isArray(posts) && posts.length > 0 ? posts.map((post, index) => (
          <div key={post.id}>
          <hr/> 
          <h4>{post.title}</h4>
          <div className="ToolBar">
            <button className="button button-clear button-small controls"># {post.voteScore}</button> |
            <button className="button button-clear button-small controls"><span role="img" aria-label="upvote" onClick={()=>this.upVote(post.id)}>👍</span></button> |
            <button className="button button-clear button-small controls"><span role="img" aria-label="downvote" onClick={()=>this.downVote(post.id)}>👎</span></button> |
            <button className="button button-clear button-small controls"><span role="img" aria-label="edit" onClick={()=>this.editPost(post.id)}>📝</span></button> |
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
  comments: state.comments,
});

export default connect(mapStateToProps)(PostDetail);