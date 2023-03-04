export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const GET_BUTTON_NUM = 'GET_BUTTON_NUM'

export const SET_COLOR_THEME = 'SET_COLOR_THEME'

const initialState = {
  usd: [],
  btc: [],
  title: "",
  loading: false,
  error: null,
  reqNumber:1,
  colorTheme:localStorage.getItem('app-theme') || ""
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      const { data_btc, data_usd, title } = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        usd: [...data_usd],
        btc: [...data_btc],
        title,
      };
    case "FETCH_DATA_ERROR":
      return {...state, loading: false, error: action.payload };

    case "GET_BUTTON_NUM":
      return {...state, reqNumber: action.payload};
    case "SET_COLOR_THEME":
      return {...state, colorTheme: action.payload};
    default:
      return state;
  }
};
