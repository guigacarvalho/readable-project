import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
          Array.isArray(filteredComents) && filteredComents.length > 0 ? filteredComents.filter((comment) => !comment.deleted).map((comment, index) => (
          <pre key={comment.id}>
            {/* <PostToolBar post={post} history={this.props.history} /> */}
            {new Date(comment.timestamp).toDateString()} | by {comment.author}<br/>
          {comment.body} 
          <br />
          </pre> )) : 'no comments to show'
        }
        <br /><Link to={`/comment/${this.props.post.id}`} className="button button-small">Add a Comment</Link>
      </div>
      )
  }
}

const mapStateToProps = (state, props) => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);