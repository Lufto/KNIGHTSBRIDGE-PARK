export interface LocalizedText {
  ru: string;
  en: string;
}

export interface SliderItem {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  link: string;
  linkText: LocalizedText;
}

export interface Point {
  type: string;
  id: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  description?: {
    title_ru: string;
    title_en: string;
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
