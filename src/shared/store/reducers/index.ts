import { combineReducers } from "redux"
import pointsReducer from "./points"
import sliderReducer from "./slider"

const rootReducer = combineReducers({
  slider: sliderReducer,
  points: pointsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;