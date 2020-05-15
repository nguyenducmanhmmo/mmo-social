import { combineReducers } from 'redux';
import { postsReducer } from "./posts/post.reducer";

export const rootReducer =  combineReducers({
  postWall: postsReducer,
});
