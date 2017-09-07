import { 
    ADD_POST, 
    EDIT_POST, 
    REMOVE_POST, 
    GET_POSTS, 
    GET_POST, 
    GET_CATEGORIES } from '../actions'

const initialState = {
    posts: [],    
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        return {
            ...state,
            posts: action.posts
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

        default:
            return state;
    }
}