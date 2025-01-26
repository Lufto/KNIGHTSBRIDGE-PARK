import { PointsActionTypes, PointsState, SET_POINTS } from '../types/TStore'

const initialState: PointsState = {
  points: [],
};

const pointsReducer = (state = initialState, action: PointsActionTypes): PointsState => {
  switch (action.type) {
    case SET_POINTS:
      return {
        ...state,
        points: action.payload,
      };
    default:
      return state;
  }
};

export default pointsReducer;