import axios from "axios";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS, GET_BUTTON_NUM, SET_COLOR_THEME,
} from "../reducers/dataReducer";

export const fetchDataAction = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_DATA });
      const {data} = await axios.get(
        `https://api.1282075-cv69336.tw1.ru/api/dashboard?st_num=${params}`
      );
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });

    } catch (e) {
      dispatch({
        type: FETCH_DATA_ERROR,
        payload: "Произошла ошибка при загрузке данных",
      });
    }
  };
};

export const setButtonNumAction = (num) => {
  return (dispatch) => {
    dispatch({type: GET_BUTTON_NUM, payload:num})
  }
}

export const setColorThemeAction= (theme) => {
  return (dispatch) => {
    dispatch({type: SET_COLOR_THEME, payload:theme})
  }
}
