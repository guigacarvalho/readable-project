import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import CommentList from './CommentList'
import Post from './Post'
import NotFound from './NotFound'

class PostDetail extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.dispatch(Actions.retrievePost(id));
    this.props.dispatch(Actions.retrieveComments(id));
  }

  render(){
    const {posts} = this.props
    const post = posts[0]
    // debugger;
    return (
      <div>
        {
          post && post.hasOwnProperty('id')
            ? <div>
                <Post content={post} history={this.props.history} /> 
                <CommentList post={post} history={this.props.history}/>
              </div>
            : <div>
                <NotFound />
              </div>
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