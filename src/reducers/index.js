import sortBy from 'sort-by'

import { 
    ADD_POST, 
    EDIT_POST,
    EDITING_POST, 
    REMOVE_POST, 
    GET_POSTS,
    GET_POST,
    HANDLE_SORTING,
    ADD_COMMENT,
    // EDIT_COMMENT,
    // EDITING_COMMENT, 
    // REMOVE_COMMENT,
    UPDATE_SORTING,
    GET_COMMENTS,
    GET_POSTS_FROM_CATEGORIES,
    GET_CATEGORIES } from '../actions'

const initialState = {
    posts: {},
    categories: [],
    editingPost:{},
    editingComment: {},
    comments: [],
    sorting: '-timestamp'
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case HANDLE_SORTING:
            return {
                ...state,
                posts: state.posts.sort(sortBy(action.sorting))
            }
        

        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            };

        case GET_POST:
            return {
                ...state,
                posts: [action.post]
            };

        case GET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };

        
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };
            
        case EDITING_POST:
            return {
                ...state,
                editingPost: action.post
            };

        case EDIT_POST:
            const postIndex = state.posts.findIndex((post) => action.post.id === post.id)
            const {posts} = state
            posts[postIndex] = action.post
            return {...state, 
                posts:
                    [...posts]
            };
            
        case REMOVE_POST:
            const remainingPosts = state.posts.filter((post) => action.postId !== post.id)
            
            return {
                ...state,
                posts: remainingPosts
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

        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.comment]
            };
            
        case UPDATE_SORTING:
            return {
                ...state,
                sorting: action.sorting
            };
            
        default:
            return state;
    }
}