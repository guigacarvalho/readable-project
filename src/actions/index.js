import * as PostAPI from '../utils/PostAPI'
import * as CategoryAPI from '../utils/CategoryAPI'

export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const GET_POSTS = 'GET_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_POST = 'EDIT_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const UPDATE_POST_VOTE_SCORE = 'UPDATE_POST_VOTE_SCORE';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS_FROM_CATEGORIES = 'GET_POSTS_FROM_CATEGORIES';


export function getAllPosts (posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export const fetchPosts = () => dispatch => (
    PostAPI
        .getAll()
        .then(posts => dispatch(getAllPosts(posts)))
    
);

export function getPostsFromCategories (posts) {
    return {
        type: GET_POSTS_FROM_CATEGORIES,
        posts
    }
}

export const fetchPostsFromCategory = (category) => dispatch => (
    CategoryAPI
        .getPosts(category)
        .then(posts => dispatch(getPostsFromCategories(posts)))
);

export const fetchCategories = () => dispatch => (
    CategoryAPI
        .getAll()
        .then(categories => dispatch(getCategories(categories)))    
);

export function getCategories (categories) {
    return {
        type: GET_CATEGORIES,
        categories
    }
}

export const voteUp = (postId) => dispatch => (
    PostAPI
        .upVote(postId)
        .then(post => dispatch(upVotePost(post)))    
);

export function upVotePost (post) {
    return {
        type: UPDATE_POST_VOTE_SCORE,
        post
    }
}

export const voteDown = (postId) => dispatch => (
    PostAPI
        .downVote(postId)
        .then(post => dispatch(downVotePost(post)))    
);

export function downVotePost (post) {
    return {
        type: UPDATE_POST_VOTE_SCORE,
        post
    }
}

export const retrievePost = (postId) => dispatch => (
    PostAPI
        .getPost(postId)
        .then(post => dispatch(getPost(post)))
);

export function getPost ({post}) {
    return {
        type: GET_POST,
        post,
    }
}


export const addPost = (post) => dispatch => (
    PostAPI
        .addPost(post)
        .then(post => dispatch(insertPost(post)))    
);

export function insertPost (post) {
    return {
        type: ADD_POST,
        post
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

export const deletePost = (postId) => dispatch => {
    PostAPI.deletePost(postId);
    dispatch(removePost(postId));
}

export function removePost (postId) {
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