import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "./slices/globalSlice";
import { notesApi } from './api/notesApi';

export default configureStore({
  reducer: {
    global:globalReducer,
    [notesApi.reducerPath]: notesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(notesApi.middleware),
})