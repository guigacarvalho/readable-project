import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import { Link } from 'react-router-dom'
import PostToolBar from './PostToolBar'
import CommentList from './CommentList'

class PostDetail extends React.Component {
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
    this.props.dispatch(Actions.editPost(postId));
    this.props.history.push(`/editPost/${postId}`);  
  }
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.dispatch(Actions.retrievePost(id));
    this.props.dispatch(Actions.retrieveComments(id));
  }

  
  render(){
    const {posts} = this.props
    const {path} = this.props.match ? this.props.match.params : {path: null};
    console.log(posts)
    return (
      <div>
        {
          Array.isArray(posts) && posts.length > 0 ? posts.map((post, index) => (
          <div key={post.id}>
          <hr/> 
          <h3>= {post.title} =</h3>
            <PostToolBar post={post} history={this.props.history} />
            <br /> by {post.author} | category: {post.category} <br/>
          {post.body} 
          <br />
          <br />
          <CommentList post={post}/>
          </div> )) : 'no posts to show'
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