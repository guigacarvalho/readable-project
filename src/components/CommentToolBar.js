import React from 'react'
import emoji from 'react-easy-emoji'
import * as Actions from '../actions/'
import { connect } from 'react-redux'

class CommentToolBar extends React.Component {
  upVote(commentId) {
    this.props.dispatch(Actions.voteUpComment(commentId));
  }

  downVote(commentId){
    this.props.dispatch(Actions.voteDownComment(commentId));
  }

  deleteComment(commentId) {
    this.props.dispatch(Actions.deleteComment(commentId));
  }

  editComment(commentId) {
    this.props.history.push(`/editComment/${commentId}`);  
  }

  render(){
    const {comment} = this.props
    const [updatedComment] = this.props.comments.filter((commentFromState)=> commentFromState.id === comment.id) 
    return (
      <div className="CommentToolBar">
        <button className="button button-clear button-small controls"># {updatedComment.voteScore}</button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="upvote" onClick={()=>this.upVote(updatedComment.id)}>{ emoji('👍') }</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="downvote" onClick={()=>this.downVote(updatedComment.id)}>{ emoji('👎') }</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="edit" onClick={()=>this.editComment(updatedComment.id)}>{ emoji('📝') }</span></button> |
        <button className="button button-clear button-small controls"><span role="img" aria-label="delete" onClick={()=>this.deleteComment(updatedComment.id)}>{ emoji('❌') }</span></button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  comments: state.comments,
});


export default connect(mapStateToProps)(CommentToolBar)