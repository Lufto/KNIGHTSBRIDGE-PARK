import api from 'shared/api/api'
import { PointsResponse, SliderItemsResponse } from 'shared/api/types/TApi'


export const getSliderItems = async (): Promise<SliderItemsResponse> => {
  try {
    const response = await api.get("/sliderItems");
    return { data: response.data };
  } catch (error) {
    throw new Error("Error fetching slider items");
  }
};

export const getPoints = async (): Promise<PointsResponse> => {
  try {
    const response = await api.get("/points");
    return { data: response.data };
  } catch (error) {
    throw new Error("Error fetching points");
  }
};