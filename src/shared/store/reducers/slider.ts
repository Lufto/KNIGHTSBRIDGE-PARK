import { SET_SLIDER_ITEMS, SliderActionTypes, SliderState } from '../types/TStore'

const initialState: SliderState = {
  sliderItems: [],
};

const sliderReducer = (state = initialState, action: SliderActionTypes): SliderState => {
  switch (action.type) {
    case SET_SLIDER_ITEMS:
      return {
        ...state,
        sliderItems: action.payload,
      };
    default:
      return state;
  }
};

export default sliderReducer;
