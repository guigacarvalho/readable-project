import React from 'react'
import * as Actions from '../actions/'
import { connect } from 'react-redux'

class PostToolBar extends React.Component {
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

  render(){
    const {post} = this.props
    const [updatedPost] = this.props.posts.filter((postFromState)=> postFromState.id === post.id) 
    return (
      <div>
        <button className="button button-clear button-small controls"># {updatedPost.voteScore}</button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="upvote" onClick={()=>this.upVote(updatedPost.id)}>👍</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="downvote" onClick={()=>this.downVote(updatedPost.id)}>👎</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="edit" onClick={()=>this.editPost(updatedPost.id)}>📝</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="delete" onClick={()=>this.deletePost(updatedPost.id)}>❌</span></button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
});


export default connect(mapStateToProps)(PostToolBar)