import axios from "axios";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS, GET_BUTTON_NUM,
} from "../reducers/dataReducer";

export const fetchDataAction = (params) => {
  console.log(params)
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_DATA });
      const {data} = await axios.get(
        `https://api.1282075-cv69336.tw1.ru/api/dashboard?st_num=${params}`
      );
      setTimeout(() => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
      },500)
    } catch (e) {
      dispatch({
        type: FETCH_DATA_ERROR,
        payload: "Произошла ошибка при загрузке данных",
      });
    }
  };
};

export const setButtonNum = (num) => {
  return (dispatch) => {
    dispatch({type: GET_BUTTON_NUM, payload:num})
  }
}
