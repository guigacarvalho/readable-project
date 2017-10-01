import * as APIConstants from './API.js';

const { rootUrl, headers } = APIConstants;

export const getComments = (postId) =>
  fetch(`${rootUrl}/posts/${postId}/comments/`, { headers })
    .then(res => res.json())

export const addComment = (data) =>
  fetch(`${rootUrl}/comments/`, { 
    headers,
    method: 'POST',
    body: JSON.stringify(data),
    })
    .then(res => res.json())

export const deleteComment = (commentId) =>
  fetch(`${rootUrl}/comments/${commentId}`, { 
      headers,
      method: 'DELETE',
      })
                      
export const upVote = (commentId) =>     
  fetch(`${rootUrl}/comments/${commentId}`, { 
      headers,
      method: 'POST',
      body: JSON.stringify({ option: 'upVote' }),
      })
      .then(res => res.json())
        
export const downVote = (commentId) =>
fetch(`${rootUrl}/comments/${commentId}`, { 
    headers,
    method: 'POST',
    body: JSON.stringify({ option: 'downVote' }),
    })
    .then(res => res.json())
        
export const getComment = (commentId) =>
fetch(`${rootUrl}/comments/${commentId}`, { 
    headers,
    method: 'GET',
    })
    .then(res => res.json())
  
export const editComment = (data) =>
fetch(`${rootUrl}/comments/${data.id}`, { 
    headers,
    method: 'PUT',
    body: JSON.stringify(data),
    })
    .then(res => res.json())
  