import * as APIConstants from './API.js';

const { rootUrl, headers } = APIConstants;

export const getAll = () =>
fetch(`${rootUrl}/posts`, { headers })
    .then((res) => res.json())
  
export const getComments = (postId) =>
fetch(`${rootUrl}/posts/`, { headers })
    .then(res => res.json())
    
export const addPost = (data) =>
fetch(`${rootUrl}/posts/`, { 
    headers,
    method: 'POST',
    body: data,
})
.then(res => res.json())

export const editPost = (postId, data) =>
fetch(`${rootUrl}/posts/`, { 
    headers,
    method: 'POST',
    body: data,
})
    .then(res => res.json())
        
export const deletePost = (postId) =>
fetch(`${rootUrl}/posts/`, { 
    headers,
 })
    .then(res => res.json())

export const upVote = (postId) =>
fetch(`${rootUrl}/posts/${postId}`, { 
    headers,
    method: 'POST',
    body: { option: 'upVote' },
    })
    .then(res => res.json())
        
export const downVote = (postId) =>
fetch(`${rootUrl}/posts/${postId}`, { 
    headers,
    method: 'POST',
    body: { option: 'downVote' },
    })
    .then(res => res.json())
        
    