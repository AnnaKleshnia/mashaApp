import { SEND_COMMENT, SET_CURRENT, CLEAR_CURRENT, COMMENT_ERROR } from './types';

export const sendComment =({comment}) => async dispatch => {

   try {
      const res = await fetch(`/journals?comments.id=${comment.id}`,{
       method: "PUT",
       body: JSON.stringify(comment),
       headers: {
         "Content-type": "application-json"
       }
      });
     const data = await res.json();
     dispatch({
       type:SEND_COMMENT,
       payload:data
     }) 
   } catch (err) {
      dispatch({
      type: COMMENT_ERROR,
      payload: err.response.data
    });
   }
};

export const setCurrent = comment => {
  return {
    type: SET_CURRENT,
    payload: comment
  }
}