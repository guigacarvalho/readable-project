import * as APIConstants from './API.js';

const { rootUrl, headers } = APIConstants;

export const getComments = (postId) =>
fetch(`${rootUrl}/posts/${postId}/comments/`, { headers })
  .then(res => res.json())
