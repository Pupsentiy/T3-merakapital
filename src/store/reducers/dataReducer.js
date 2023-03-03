export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

const initialState = {
  usd: [],
  btc: [],
  title: "",
  loading: false,
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      const { data_btc, data_usd, title } = action.payload;
      return {
        loading: false,
        error: null,
        usd: [...data_usd],
        btc: [...data_btc],
        title,
      };
    case "FETCH_DATA_ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
