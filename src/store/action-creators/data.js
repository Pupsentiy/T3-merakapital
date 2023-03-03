import axios from "axios";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from "../reducers/dataReducer";

export const fetchDataAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_DATA });
      const {data} = await axios.get(
        `https://api.1282075-cv69336.tw1.ru/api/dashboard?st_num=${1}`
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


