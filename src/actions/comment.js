import * as CommentAPI from '../utils/CommentAPI'

import {
    ADD_COMMENT,
    EDIT_COMMENT,
    EDITING_COMMENT, 
    REMOVE_COMMENT,
    GET_COMMENTS,
} from './types'


export const editComment = (comment) => dispatch => (
    CommentAPI
    .editComment(comment)
    .then(comment => dispatch(updateComment(comment)))
)


export function updateComment (comment) {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

export const voteUpComment = (id) =>  dispatch => (    
    CommentAPI
        .upVote(id)
        .then(comment => dispatch(updateComment(comment)))    
)

export const voteDownComment = (commentId) => dispatch => (
    CommentAPI
        .downVote(commentId)
        .then(comment => dispatch(updateComment(comment)))    
)

export const retrieveComments = (postId) => dispatch => (
    CommentAPI
        .getComments(postId)
        .then(comments => dispatch(getComments(comments)))
)

export function getComments (comments) {
    return {
        type: GET_COMMENTS,
        comments,
    }
}

export const modifyComment = (commentId) => dispatch => (
    CommentAPI
        .getComment(commentId)
        .then(comment => dispatch(editingComment(comment)))
)

export function editingComment (comment) {
    return {
        type: EDITING_COMMENT,
        comment,
    }
}

export const deleteComment = (commentId) => dispatch => {
    CommentAPI.deleteComment(commentId)
    dispatch(removeComment(commentId))
}

export function removeComment (commentId) {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}


export const addComment = (comment) => dispatch => (
    CommentAPI
        .addComment(comment)
        .then(comment => dispatch(insertComment(comment)))    
)

export function insertComment (comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}