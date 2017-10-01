import React from 'react'
import moment from 'moment'
import CommentToolBar from './CommentToolBar'

const Comment = ({content, history}) => (
  <pre>
    <CommentToolBar comment={content} history={history}/>
    <b>{moment(content.timestamp).fromNow()} | by {content.author}</b><br/>
    {content.body} 
    <br />
  </pre>
);

export default Comment