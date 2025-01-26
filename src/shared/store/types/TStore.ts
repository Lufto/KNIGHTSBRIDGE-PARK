export interface SliderItem {
  id: number;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export interface Point {
  type: string;
  id: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  description?: {
    title: string;
  };
}

export interface SliderState {
  sliderItems: SliderItem[];
}

export interface PointsState {
  points: Point[];
}

export interface RootState {
  slider: SliderState;
  points: PointsState;
}

export const SET_SLIDER_ITEMS = "SET_SLIDER_ITEMS";
export const SET_POINTS = "SET_POINTS";

interface SetSliderItemsAction {
  type: typeof SET_SLIDER_ITEMS;
  payload: SliderItem[];
}

interface SetPointsAction {
  type: typeof SET_POINTS;
  payload: Point[];
}

export type SliderActionTypes = SetSliderItemsAction;
export type PointsActionTypes = SetPointsAction;
