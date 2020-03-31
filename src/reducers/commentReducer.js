import { SEND_COMMENT, SET_CURRENT, CLEAR_CURRENT, COMMENT_ERROR } from '../actions/types';

const initialState = {
  comments: null,
  current: null,
  attention: false,
  isTruncated: true
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case SEND_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => comment.id === action.payload.id ? action.payload : comment)
      }
    default:
      return state;
  }
}