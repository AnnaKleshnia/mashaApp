import { combineReducers } from 'redux';
import journalReducer from './journalReducer';
import commentReducer from './commentReducer';



export default combineReducers({
  journal: journalReducer,
  comment: commentReducer
});