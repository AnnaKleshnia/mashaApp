import {SET_LOADING, GET_COMMENTS, COMMENTS_ERROR } from './types';

export const getComments = (id) => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/journals/${id}/comments`);
    const data = await res.json();

    dispatch({
      type: GET_COMMENTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: COMMENTS_ERROR,
      payload: err.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
}