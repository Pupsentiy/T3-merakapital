export interface IDataState {
  usd: IData[];
  btc: IData[];
  title: string;
  loading: boolean;
  error: null | string;
  reqNumber: number;
  colorTheme: string;
}

export interface ICurrency {
  btc: IData[];
  usd: IData[];
}

export interface IData {
  value: number;
  time: number;
}

export interface IFetchData {
  title: string;
  data_usd: IData[];
  data_btc: IData[];
}

export enum DataActionTypes {
  FETCH_DATA = "FETCH_DATA",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
  GET_BUTTON_NUM = "GET_BUTTON_NUM",
  SET_COLOR_THEME = "SET_COLOR_THEME",
}
export interface IFetchDataAction {
  type: DataActionTypes.FETCH_DATA;
}

export interface IFetchDataSuccessAction {
  type: DataActionTypes.FETCH_DATA_SUCCESS;
  payload: { data_usd: IData[]; data_btc: IData[]; title: string };
}

export interface IFetchDataErrorAction {
  type: DataActionTypes.FETCH_DATA_ERROR;
  payload: string;
}
export interface IGetButtonNum {
  type: DataActionTypes.GET_BUTTON_NUM;
  payload: number;
}
export interface ISetColorAction {
  type: DataActionTypes.SET_COLOR_THEME;
  payload: string;
}

export type TDataAction =
  | IFetchDataAction
  | IFetchDataSuccessAction
  | IFetchDataErrorAction
  | IGetButtonNum
  | ISetColorAction;
