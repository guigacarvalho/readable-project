import React from 'react'
// import { Link } from 'react-router-dom'
// import PostToolBar from './PostToolBar'
// import AddButton from './AddButton'
import moment from 'moment'


const Comment = ({content}) => ( 
  <pre>
    {/* <PostToolBar post={post} history={history} /> */}
    <b>{moment(content.timestamp).fromNow()} | by {content.author}</b><br/>
    {content.body} 
    <br />
  </pre>
);

export default Comment