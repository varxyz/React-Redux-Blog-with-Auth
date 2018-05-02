import { FETCH_POSTS, FETCH_SINGLE } from '../actions';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.posts };
    case FETCH_SINGLE:
      return { ...state, post: action.payload.post };
    default:
      return state;
  }
}
