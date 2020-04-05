import { SET_LOADING, GET_COMMENTS, COMMENTS_ERROR } from "../actions/types";

const initialState = {
  comments: null,
  current: null,
  attention: false,
  isTruncated: true,
  loading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
     case SET_LOADING:
       return {
         ...state,
         loading: true
       };
       case COMMENTS_ERROR:
         console.error(action.payload);
         return {
           ...state,
           error: action.payload
         } 
    default:
      return state;
  }
}

