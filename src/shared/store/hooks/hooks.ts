
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../types/TStore'
import { AppDispatch } from '..'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
