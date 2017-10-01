import React from 'react'
import emoji from 'react-easy-emoji'
import * as Actions from '../actions/'
import { connect } from 'react-redux'

class PostToolBar extends React.Component {
  upVote(postId) {
    this.props.dispatch(Actions.voteUpPost(postId));
  }

  downVote(postId){
    this.props.dispatch(Actions.voteDownPost(postId));
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
        <button className="button button-clear button-small controls"><span role="img" aria-label="upvote" onClick={()=>this.upVote(updatedPost.id)}>{ emoji('👍') }</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="downvote" onClick={()=>this.downVote(updatedPost.id)}>{ emoji('👎') }</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="edit" onClick={()=>this.editPost(updatedPost.id)}>{ emoji('📝') }</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="delete" onClick={()=>this.deletePost(updatedPost.id)}>{ emoji('❌') }</span></button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
});


export default connect(mapStateToProps)(PostToolBar)