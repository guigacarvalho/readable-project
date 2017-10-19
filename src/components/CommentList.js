import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

class CommentList extends React.Component {
  state = {
    sorting: 'sortTimestampDesc'
  }

  render(){
    const {comments} = this.props
    const filteredComents = comments
      .filter((stateComment)=> stateComment.parentId === this.props.post.id)
      .filter((comment) => !comment.deleted)

    return (
      <div className="strong-border-top">
          <br />
          <label>Comments</label>
        {
          Array.isArray(filteredComents) && filteredComents.length > 0 ? 
            filteredComents.map((comment, index) => (
              <Comment content={comment} key={index}  history={this.props.history}/>
            ))
            : <div>no comments to show</div>
        }
        <br />
      </div>
      )
  }
}

const mapStateToProps = (state, props) => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);