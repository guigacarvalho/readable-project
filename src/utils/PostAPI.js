import * as APIConstants from './API.js';

const { rootUrl, headers } = APIConstants;

export const getAll = () =>
fetch(`${rootUrl}/posts`, { 
    headers 
    })
    .then((res) => res.json())
  
export const getComments = (postId) =>
fetch(`${rootUrl}/posts/`, { headers })
    .then(res => res.json())
    
export const addPost = (data) =>
fetch(`${rootUrl}/posts/`, { 
    headers,
    method: 'POST',
    body: JSON.stringify(data),
    })
    .then(res => res.json())

export const editPost = (postId, data) =>
fetch(`${rootUrl}/posts/${postId}`, { 
    headers,
    method: 'PUT',
    body: JSON.stringify(data),
    })
    .then(res => res.json())
        
export const getPost = (postId) =>
fetch(`${rootUrl}/posts/${postId}`, { 
    headers,
    method: 'GET',
    })
    .then(res => res.json())

export const deletePost = (postId) =>
fetch(`${rootUrl}/posts/${postId}`, { 
    headers,
    method: 'DELETE',
    })
            
export const upVote = (postId) =>     
fetch(`${rootUrl}/posts/${postId}`, { 
    headers,
    method: 'POST',
    body: JSON.stringify({ option: 'upVote' }),
    })
    .then(res => res.json())
        
export const downVote = (postId) =>
fetch(`${rootUrl}/posts/${postId}`, { 
    headers,
    method: 'POST',
    body: JSON.stringify({ option: 'downVote' }),
    })
    .then(res => res.json())
        
    