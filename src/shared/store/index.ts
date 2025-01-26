import { applyMiddleware, compose, createStore } from "redux"
import { thunk, ThunkDispatch } from 'redux-thunk'
import rootReducer, { RootState } from "./reducers"
import { PointsActionTypes, SliderActionTypes } from './types/TStore'

export type AppDispatch = ThunkDispatch<RootState, undefined, SliderActionTypes | PointsActionTypes>;
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)  // Подключаем middleware (например, redux-thunk)
  )
);

export default store;
