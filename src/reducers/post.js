import sortBy from 'sort-by'

import { createReducer } from './utils'

const initialState = {
    posts: {},
    categories: [],
    editingPost:{},
    sorting: '-timestamp'
};

// Case Reducers
function handleSorting(state, action) {
    const newPosts = state.posts.sort(sortBy(action.sorting));
    return {...state, posts: newPosts};
}

function updateSorting(state, action) {
    return {
        ...state,
        sorting: action.sorting
    }    
}

function getPosts(state, action) {
    const { posts } = action;
    return {...state, posts};    
}

function getPost(state, action) {
    const { post } = action;
    return {...state, posts: [post]};    
}

function getCategories(state, action) {
    const { categories } = action;
    return {...state, categories};    
}

function addPost(state, action) {
    const { post } = action;
    return {...state, posts: [...state.posts, post]};    
}

function editingPost (state, action) {
    return {
        ...state,
        editingPost: action.post
    }
}

function editPost(state, action) {
    const postIndex = state.posts.findIndex((post) => action.post.id === post.id)
    const {posts} = state
    posts[postIndex] = action.post
    return {...state, 
        posts:
            [...posts]
    }
}

function removePost(state, action) {
    const remainingPosts = state.posts.filter((post) => action.postId !== post.id)            
    return {
        ...state,
        posts: remainingPosts
    }    
}


function getPostsFromCategories(state, action) {
    return {
        ...state,
        posts: action.posts
    }    
}

// Slice Reducer
export default createReducer(initialState, {
    HANDLE_SORTING : handleSorting,
    UPDATE_SORTING: updateSorting,
    GET_POSTS: getPosts,
    GET_POST: getPost,
    GET_CATEGORIES: getCategories,
    ADD_POST: addPost,
    EDITING_POST: editingPost,
    EDIT_POST: editPost,
    REMOVE_POST: removePost,
    GET_POSTS_FROM_CATEGORIES: getPostsFromCategories,
});