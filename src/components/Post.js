import React from 'react'
import { Link } from 'react-router-dom'
import PostToolBar from './PostToolBar'
import AddButton from './AddButton'

const Post = ({content, history}) => ( 
    <div key={content.id} className="border-top spacing-top">
          <h4 className="post-title top-spacing bottom-spacing"><Link to={`/post/${content.id}`} className="">{content.title}</Link></h4>
            <PostToolBar post={content} history={history} />
            <br />{new Date(content.timestamp).toDateString()} | by {content.author} | category: {content.category} <br/>
          {content.body} 
          <br /><br /><AddButton url={`/post/${content.id}/comment`} type="comment" />
    </div>
);

export default Post