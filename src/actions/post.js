import * as PostAPI from '../utils/PostAPI'
import * as CategoryAPI from '../utils/CategoryAPI'

import {
    ADD_POST, 
    EDIT_POST,
    EDITING_POST, 
    REMOVE_POST, 
    GET_POSTS,
    GET_POST,
    HANDLE_SORTING,
    UPDATE_SORTING,
    GET_POSTS_FROM_CATEGORIES,
    GET_CATEGORIES } from './types'

import { retrieveComments } from './comment'

export function getAllPosts (posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export const fetchPosts = () => dispatch => (
    PostAPI
        .getAll()
        .then(posts => {
            for(let post of posts) {
                if(!post.deleted)
                    dispatch(retrieveComments(post.id));
            }
            return posts;
        })
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

export const voteUpPost = (id) => dispatch => (
    PostAPI
        .upVote(id)
        .then(post => dispatch(updatePost(post)))
);


export const voteDownPost = (postId) => dispatch => (
    PostAPI
        .downVote(postId)
        .then(post => dispatch(updatePost(post)))    
);

export const retrievePost = (postId) => dispatch => (
    PostAPI
        .getPost(postId)
        .then(post => dispatch(getPost(post)))
);

export function getPost (post) {
    return {
        type: GET_POST,
        post,
    }
}
export const modifyPost = (postId) => dispatch => (
    PostAPI
        .getPost(postId)
        .then(post => dispatch(editingPost(post)))
);

export function editingPost (post) {
    return {
        type: EDITING_POST,
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

export const editPost = (post) => dispatch => (
    PostAPI
        .editPost(post)
        .then(post => dispatch(updatePost(post)))
);

export function updatePost (post) {
    return {
        type: EDIT_POST,
        post
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
export function sortPosts (sorting) {
    return {
        type: HANDLE_SORTING,
        sorting
    }
}

export function updateSorting (sorting) {
    return {
        type: UPDATE_SORTING,
        sorting
    }
}