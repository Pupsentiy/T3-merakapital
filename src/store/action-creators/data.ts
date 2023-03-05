import axios from "axios";
import { Dispatch } from "react";

import { DataActionTypes, IFetchData, TDataAction } from "../types/types";

export const fetchDataAction = (params: number) => {
  return async (dispatch: Dispatch<TDataAction>) => {
    try {
      dispatch({ type: DataActionTypes.FETCH_DATA });
      const { data } = await axios.get<IFetchData>(
        `https://api.1282075-cv69336.tw1.ru/api/dashboard?st_num=${params}`
      );
      dispatch({ type: DataActionTypes.FETCH_DATA_SUCCESS, payload: data });
    } catch (e) {
      dispatch({
        type: DataActionTypes.FETCH_DATA_ERROR,
        payload: "Произошла ошибка при загрузке данных",
      });
    }
  };
};

export const setButtonNumAction = (num: number) => {
  return (dispatch: Dispatch<TDataAction>) => {
    dispatch({ type: DataActionTypes.GET_BUTTON_NUM, payload: num });
  };
};

export const setColorThemeAction = (theme: string) => {
  return (dispatch: Dispatch<TDataAction>) => {
    dispatch({ type: DataActionTypes.SET_COLOR_THEME, payload: theme });
  };
};
