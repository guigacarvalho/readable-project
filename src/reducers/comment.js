import { createReducer } from './utils'

const initialState = {
    editingComment: {},
    comments: [],
};

// Case reducers
function addComment(state, action) {
    const newComments = state.comments.concat(action.comment);
    return {...state, comments: newComments};
}

function getComments(state, action) {
    const { comments } = action;
    return { ...state, comments };
}

function editingComment(state, action) {
    return {
        ...state,
        editingComment: action.comment
    };
}

function editComment(state, action) {
    const commentIndex = state.comments.findIndex((comment) => action.comment.id === comment.id)
    const {comments} = state
    comments[commentIndex] = action.comment
    return {...state, 
        comments:
            [...comments]
    };
}

function removeComment(state, action) {
    const remainingComments = state.comments.filter((comment) => action.commentId !== comment.id)
    return {
        ...state,
        comments: remainingComments
    };
}

// Slice reducer
export default createReducer(initialState, {
    'ADD_COMMENT' : addComment,
    'GET_COMMENTS': getComments,
    'EDITING_COMMENT': editingComment,
    'EDIT_COMMENT': editComment,
    'REMOVE_COMMENT': removeComment,
});