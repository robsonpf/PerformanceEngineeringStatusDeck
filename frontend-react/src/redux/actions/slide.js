import { postSlide, } from '../api/slide';

export const CREATE_SLIDE_SUCCESS = 'CREATE_SLIDE_SUCCESS';
export const CREATE_SLIDE_FAILED = 'CREATE_SLIDE_FAILED';

export const createSlide = () => {
  return async dispatch => {
    try {
      console.log('Create slide ***********');
      let response = await postSlide();
      let post = await response.json();
      console.log(post);
      dispatch({
        type: CREATE_SLIDE_SUCCESS,
        payload: post
      })
    } catch(err) {
      dispatch({
        type: CREATE_SLIDE_FAILED,
        payload: err
      })
    }
  }
}
