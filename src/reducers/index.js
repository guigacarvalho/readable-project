import { 
    ADD_POST, 
    EDIT_POST, 
    REMOVE_POST, 
    GET_POSTS,
    GET_POST,
    GET_COMMENTS,
    UPDATE_POST_VOTE_SCORE,
    GET_POSTS_FROM_CATEGORIES,
    GET_CATEGORIES } from '../actions'

const initialState = {
    posts: {},
    categories: [],
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            };

        case UPDATE_POST_VOTE_SCORE:
            const postIndex = state.posts.findIndex((post) => action.post.id === post.id)
            let {posts} = state
            posts[postIndex]['voteScore'] = action.post.voteScore
            return {...state, 
                ['posts']:
                    [...posts]
            };

        case GET_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };

        case EDIT_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };

        case REMOVE_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };

        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };

        case GET_POSTS_FROM_CATEGORIES:
            return {
                ...state,
                posts: action.posts
            };

        default:
            return state;
    }
}