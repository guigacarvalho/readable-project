import * as APIConstants from './API.js';

const { rootUrl, headers } = APIConstants;

export const getAll = () =>
fetch(`${rootUrl}/posts`, { headers })
  .then(res => res.json())
  