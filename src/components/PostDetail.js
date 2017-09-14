import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import CommentList from './CommentList'
import Post from './Post'

class PostDetail extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.dispatch(Actions.retrievePost(id));
    this.props.dispatch(Actions.retrieveComments(id));
  }

  render(){
    const {posts} = this.props
    const post = posts[0]
    return (
      <div>
        {
          post ?
          <div>
            <Post content={post} history={this.props.history} /> 
            <CommentList post={post}/>
          </div>
            : 'no posts to show'
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