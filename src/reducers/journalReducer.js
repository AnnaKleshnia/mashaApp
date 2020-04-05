import { SET_LOADING, GET_JOURNALS, JOURNALS_ERROR } from "../actions/types";

const initialState = {
  journals: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_JOURNALS:
      return {
        ...state,
        journals: action.payload,
        loading: false
      };
     case SET_LOADING:
       return {
         ...state,
         loading: true
       };
       case JOURNALS_ERROR:
         console.error(action.payload);
         return {
           ...state,
           error: action.payload
         } 
    default:
      return state;
  }
}