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
  