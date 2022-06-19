import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import listSlice from '../features/listSlice/listSlice';
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];
export const store = configureStore({
  reducer: {
     listSlice:listSlice
  },
  middleware
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
