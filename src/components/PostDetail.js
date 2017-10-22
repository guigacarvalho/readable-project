import React from 'react'
import { connect } from 'react-redux'
import { retrievePost } from '../actions/post'
import { retrieveComments} from '../actions/comment'
import CommentList from './CommentList'
import Post from './Post'
import NotFound from './NotFound'

class PostDetail extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.retrievePost(id)
    this.props.retrieveComments(id)
  }

  render(){
    const {posts} = this.props
    const post = posts ? posts[0] : null;

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
  posts: state.postsReducer.posts,
  comments: state.commentsReducer.comments,
})

export default connect(mapStateToProps, { retrieveComments, retrievePost })(PostDetail)