import { 
    ADD_POST, 
    EDIT_POST,
    EDITING_POST, 
    REMOVE_POST, 
    GET_POSTS,
    GET_POST,
    HANDLE_SORTING,
    GET_COMMENTS,
    UPDATE_POST_VOTE_SCORE,
    GET_POSTS_FROM_CATEGORIES,
    GET_CATEGORIES } from '../actions'

const initialState = {
    posts: {},
    categories: [],
    editingPost:{},
    editingComment: {},
    comments: []
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case HANDLE_SORTING:
        debugger;
        state.posts.sort()
            switch (action.sort) {
                case "sortTimestampDesc":
                    return {
                        ...state,
                        posts: [...state.posts]
                    }
                case "sortTimestampAsc":
                    return {
                        ...state,
                        posts: [...state.posts]
                    }
                case "sortVoteScoreAsc":
                    return {
                        ...state,
                        posts: [...state.posts]
                    }
                case "sortVoteScoreDesc":
                    return {
                        ...state,
                        posts: [...state.posts]
                    }
                default:
                    return state;          
            }

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
                posts:
                    [...posts]
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
            return {
                ...state,
                posts: [action.post]
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

        default:
            return state;
    }
}