import React from 'react'
import moment from 'moment'


const Comment = ({content}) => ( 
  <pre>
    <b>{moment(content.timestamp).fromNow()} | by {content.author}</b><br/>
    {content.body} 
    <br />
  </pre>
);

export default Comment