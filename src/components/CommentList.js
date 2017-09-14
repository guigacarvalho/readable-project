import React from 'react'
import { connect } from 'react-redux'
import AddButton from './AddButton'
import Comment from './Comment'
// import * as Actions from '../actions/'
// import PostToolBar from './PostToolBar'

class CommentList extends React.Component {
  state = {
    sorting: 'sortTimestampDesc'
  }

  render(){
    const {comments} = this.props
    const filteredComents = comments.filter((stateComment)=> stateComment.parentId === this.props.post.id) 
    
    return (
      <div className="strong-border-top">
          <br />
          <label>Comments</label>
        {
          Array.isArray(filteredComents) && filteredComents.length > 0 ? 
            filteredComents.filter((comment) => !comment.deleted).map((comment, index) => (
              <Comment content={comment}/>
            )) 
            : 'no comments to show'
        }
        <br />
        <AddButton url={`/post/${this.props.post.id}/comment`} type="comment"/>
      </div>
      )
  }
}

const mapStateToProps = (state, props) => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);