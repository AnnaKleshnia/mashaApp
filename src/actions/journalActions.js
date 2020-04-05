import { SET_LOADING, GET_JOURNALS, JOURNALS_ERROR } from './types';

export const getJournals = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/journals');
    const data = await res.json();

    dispatch({
      type: GET_JOURNALS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: JOURNALS_ERROR,
      payload: err.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
}