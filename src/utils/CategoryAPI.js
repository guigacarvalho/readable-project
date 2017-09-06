import * as APIConstants from './API.js';

const { rootUrl, headers } = APIConstants;

export const getPosts = (categoryId) =>
fetch(`${rootUrl}/${categoryId}/posts/`, { headers })
  .then(res => res.json())

export const getAll = () =>
fetch(`${rootUrl}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories)
