import { getSlides, postSlide, } from '../api/slide';

export const FETCH_SLIDES_SUCCESS = 'FETCH_SLIDES_SUCCESS';
export const FETCH_SLIDES_FAILED = 'FETCH_SLIDES_FAILED';
export const CREATE_SLIDE_SUCCESS = 'CREATE_SLIDE_SUCCESS';
export const CREATE_SLIDE_FAILED = 'CREATE_SLIDE_FAILED';

export const fetchSlides = () => {
  return async dispatch => {
    try {
      let response = await getSlides();
      let slides = await response.json();

      dispatch({
        type: FETCH_SLIDES_SUCCESS,
        payload: slides
      })
    } catch (error) {
      
    }
  };
};

export const createSlide = (history) => {
  return async dispatch => {
    try {
      let response = await postSlide();
      let post = await response.json();
      let slideResponse = await getSlides();
      let slides = await slideResponse.json();
      
      dispatch({
        type: CREATE_SLIDE_SUCCESS,
        payload: post
      })
      history.push(`/slide/${slides.length}`)
    } catch(err) {
      dispatch({
        type: CREATE_SLIDE_FAILED,
        payload: err
      })
    }
  }
}