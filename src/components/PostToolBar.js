import React from 'react'
import emoji from 'react-easy-emoji'
import { voteDownPost, voteUpPost, deletePost } from '../actions/post'
import { connect } from 'react-redux'

class PostToolBar extends React.Component {
  upVote(postId) {
    this.props.voteUpPost(postId);
  }

  downVote(postId){
    this.props.voteDownPost(postId);
  }

  deletePost(postId) {
    this.props.deletePost(postId);
  }

  editPost(postId) {
    this.props.history.push(`/editPost/${postId}`);  
  }

  render(){
    const {post} = this.props
    const [updatedPost] = this.props.posts.filter((postFromState)=> postFromState.id === post.id) 
    const commentsLength = this.props.comments.filter((commentFromState)=> commentFromState.parentId === updatedPost.id).length;
    return (
      <div>
        <button className="button button-clear button-small controls"># {updatedPost.voteScore}</button> |
        <button className="button button-clear button-small controls">{ emoji('💬') } { commentsLength }</button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="upvote" onClick={()=>this.upVote(updatedPost.id)}>{ emoji('👍') }</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="downvote" onClick={()=>this.downVote(updatedPost.id)}>{ emoji('👎') }</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="edit" onClick={()=>this.editPost(updatedPost.id)}>{ emoji('📝') }</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="delete" onClick={()=>this.deletePost(updatedPost.id)}>{ emoji('❌') }</span></button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.postsReducer.posts,
  comments: state.commentsReducer.comments,
});


export default connect(mapStateToProps, { voteDownPost, voteUpPost, deletePost })(PostToolBar)