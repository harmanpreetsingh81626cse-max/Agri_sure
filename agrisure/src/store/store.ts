import { configureStore } from "@reduxjs/toolkit";
import cropsReducer from "./cropsSlice";

export const store = configureStore({
  reducer: {
    crops: cropsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;