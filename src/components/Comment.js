import React from 'react'
// import { Link } from 'react-router-dom'
// import PostToolBar from './PostToolBar'
// import AddButton from './AddButton'
import moment from 'moment'


const Comment = ({id, author, category, body, title, timestamp}) => ( 
  <pre key={id}>
    {/* <PostToolBar post={post} history={this.props.history} /> */}
    <b>{moment(timestamp).fromNow()} | by {author}</b><br/>
    {body} 
    <br />
  </pre>
);

export default Comment