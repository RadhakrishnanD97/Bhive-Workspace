import { configureStore } from "@reduxjs/toolkit";
import workspaceReducer from "./workspaceSlice";

export const store = configureStore({
  reducer: {
    workspaces: workspaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
