import { combineReducers, } from "redux";
import { dataReducer } from "./dataReducer";
import {store} from "../index";

export const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch;
