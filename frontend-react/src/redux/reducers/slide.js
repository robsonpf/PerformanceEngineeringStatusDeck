import {
  FETCH_SLIDES_SUCCESS,
  FETCH_SLIDES_FAILED,
  CREATE_SLIDE_SUCCESS,
  CREATE_SLIDE_FAILED
} from '../actions/slide';

const initialState = {
  slides:[]
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_SLIDES_SUCCESS:
      return {
        ...state,
        slides: [...payload],
      };
    case FETCH_SLIDES_FAILED:
      return {
        ...state,
        error: payload
      };
    case CREATE_SLIDE_SUCCESS:
      return {
        ...state,
        slides: [...state.slides, ...payload]
      }
    case CREATE_SLIDE_FAILED:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}
