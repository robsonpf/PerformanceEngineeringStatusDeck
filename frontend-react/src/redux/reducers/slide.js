import {
  CREATE_SLIDE_SUCCESS,
  CREATE_SLIDE_FAILED
} from '../actions/slide';

const initialState = {
  slides:[]
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
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
