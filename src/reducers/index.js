import { combineReducers } from 'redux'
import postsReducer from './post'
import commentsReducer from './comment'

export default combineReducers({
    postsReducer,
    commentsReducer
  })