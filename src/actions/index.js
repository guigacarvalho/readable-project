import * as PostAPI from '../utils/PostAPI'
import * as CategoryAPI from '../utils/CategoryAPI'
import * as CommentAPI from '../utils/CommentAPI'

export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const GET_POSTS = 'GET_POSTS';
export const HANDLE_SORTING = 'HANDLE_SORTING';
export const EDITING_POST = 'EDITING_POST';
export const EDIT_POST = 'EDIT_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS_FROM_CATEGORIES = 'GET_POSTS_FROM_CATEGORIES';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const EDITING_COMMENT = 'EDITING_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';

export const UPDATE_SORTING = 'UPDATE_SORTING';

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

export const voteUpPost = (id) => dispatch => (
    PostAPI
        .upVote(id)
        .then(post => dispatch(updatePost(post)))
);

export const voteUpComment = (id) =>  dispatch => (    
    CommentAPI
        .upVote(id)
        .then(comment => dispatch(updateComment(comment)))    
);

export const editComment = (comment) => dispatch => (
    CommentAPI
        .editComment(comment)
        .then(comment => dispatch(updateComment(comment)))
);


export function updateComment (comment) {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

export const voteDownPost = (postId) => dispatch => (
    PostAPI
        .downVote(postId)
        .then(post => dispatch(updatePost(post)))    
);

export const voteDownComment = (commentId) => dispatch => (
    CommentAPI
        .downVote(commentId)
        .then(comment => dispatch(updateComment(comment)))    
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

export const retrieveComments = (postId) => dispatch => (
    CommentAPI
        .getComments(postId)
        .then(comments => dispatch(getComments(comments)))
);

export function getComments (comments) {
    return {
        type: GET_COMMENTS,
        comments,
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
export const modifyComment = (commentId) => dispatch => (
    CommentAPI
        .getComment(commentId)
        .then(comment => dispatch(editingComment(comment)))
);

export function editingComment (comment) {
    return {
        type: EDITING_COMMENT,
        comment,
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
export const deleteComment = (commentId) => dispatch => {
    CommentAPI.deleteComment(commentId);
    dispatch(removeComment(commentId));
}

export function removeComment (commentId) {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

export function sortPosts (sorting) {
    return {
        type: HANDLE_SORTING,
        sorting
    }
}

export const addComment = (comment) => dispatch => (
    CommentAPI
        .addComment(comment)
        .then(comment => dispatch(insertComment(comment)))    
);

export function insertComment (comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function updateSorting (sorting) {
    return {
        type: UPDATE_SORTING,
        sorting
    }
}