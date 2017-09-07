import React from 'react'

const PostsList = ({posts, category}) => (
    <div>
          <h3>= posts from {category ? category : 'all categories' } =</h3>
          {
            Array.isArray(posts) ? posts.map((post, index) => (
             <div key={post.id}> 
             <hr/> 
             <h4>{post.title}</h4>
              by {post.author} | category: {post.category}
             <br/>
              <button className="button button-small button-clear">{post.voteScore} VoteScore</button> |
              <button className="button button-small button-clear">Upvote</button> |
              <button className="button button-small button-clear">DownVote</button> |
              <button className="button button-small button-clear">Edit️</button> |
              <button className="button button-small button-clear">Delete</button> |
              <button className="button button-small button-clear">Comment</button>
              <br/>
             {post.body} 
             </div> )) : 'no posts to show'
          }
        </div>
)

export default PostsList