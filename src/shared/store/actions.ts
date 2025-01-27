import { AppDispatch } from '.'
import { getPoints, getSliderItems } from './fetches/fetch'
import { Point, PointsActionTypes, SET_POINTS, SET_SLIDER_ITEMS, SliderActionTypes, SliderItem } from './types/TStore'

export const fetchSliderItems = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await getSliderItems();
    dispatch(setSliderItems(data));  
  } catch (error) {
    console.error("Failed to fetch slider items", error);
  }
};

export const fetchPoints = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await getPoints();
    dispatch(setPoints(data)); 
  } catch (error) {
    console.error("Failed to fetch points", error);
  }
};

export const setSliderItems = (items: SliderItem[]): SliderActionTypes => ({
  type: SET_SLIDER_ITEMS,
  payload: items,
});

export const setPoints = (points: Point[]): PointsActionTypes => ({
  type: SET_POINTS,
  payload: points,
});