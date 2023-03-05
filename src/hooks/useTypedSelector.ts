import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {  RootState } from "../store/reducers";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
 
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();