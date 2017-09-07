import uuid from '../utils/uuid';
import * as PostAPI from '../utils/PostAPI'
import * as CategoryAPI from '../utils/CategoryAPI'

export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const GET_POSTS = 'GET_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_POST = 'EDIT_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const GET_CATEGORIES = 'GET_CATEGORIES';


export function getPosts (posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export const fetchPosts = () => dispatch => (
    PostAPI
        .getAll()
        .then(posts => dispatch(getPosts(posts)))
    
);

export function getCategories (categories) {
    return {
        type: GET_CATEGORIES,
        categories
    }
}

export const fetchCategories = () => dispatch => (
    CategoryAPI
        .getAll()
        .then(categories => dispatch(getCategories(categories)))
    
);


export function getPost ({postId}) {
    return {
        type: GET_POST,
        postId,
    }
}

export function addPost ({title, body, category, owner}) {
    return {
        type: ADD_POST,
        id: uuid(),
        title,
        timestamp: new Date.now(),
        owner,
        body,
        category
    }
}

export function editPost ({id, title, body, category}) {
    return {
        type: EDIT_POST,
        id,
        title,
        body,
        category
    }
}

export function removePost ({postId, comment}) {
    return {
        type: REMOVE_POST,
        postId
    }
}

export function addComment ({postId, comment}) {
    return {
        type: ADD_COMMENT,
        postId,
        comment
    }
}