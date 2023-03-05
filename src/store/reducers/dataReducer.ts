import {
  DataActionTypes,
  IDataState, IFetchDataAction,
  IFetchDataErrorAction,
  IFetchDataSuccessAction,
  IGetButtonNum,
  ISetColorAction
} from "../types/types";


export type TDataAction = IFetchDataAction | IFetchDataSuccessAction | IFetchDataErrorAction | IGetButtonNum | ISetColorAction

const initialState:IDataState = {
  usd: [],
  btc: [],
  title: "",
  loading: false,
  error: null,
  reqNumber:1,
  colorTheme:localStorage.getItem('app-theme') || ""
};

export const dataReducer = (state = initialState, action:TDataAction):IDataState => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA:
      return {...state, loading: true, error: null };

    case DataActionTypes.FETCH_DATA_SUCCESS:

      return {
        ...state,
        loading: false,
        error: null,
        usd: [...action.payload.data_usd],
        btc: [...action.payload.data_btc],
        title:action.payload.title,
      };
    case DataActionTypes.FETCH_DATA_ERROR:

      return {...state, loading: false, error: action.payload };

    case DataActionTypes.GET_BUTTON_NUM:
      return {...state, reqNumber: action.payload};
    case DataActionTypes.SET_COLOR_THEME:
      return {...state, colorTheme: action.payload};
    default:
      return state;
  }
};
