import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import PostsReducer from './reducer_posts';
import auth from './auth_reducer';

const rootReducer = combineReducers({
  form,
  auth,
  posts: PostsReducer,
});

export default rootReducer;
