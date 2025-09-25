import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Para tipado opcional con TS: export type RootState = ReturnType<typeof store.getState>
