import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { WorkspaceI } from "../components/SpaceOverviewWidget/models";
import { RootState } from "./store";

const API_URL = process.env.REACT_APP_API_URL as string;

export const fetchWorkspaces = createAsyncThunk<WorkspaceI[]>(
  "workspaces/fetchWorkspaces",
  async () => {
    const response = await fetch(`${API_URL}data.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch workspaces");
    }
    return await response.json();
  }
);

interface WorkspaceState {
  data: WorkspaceI[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: WorkspaceState = {
  data: [],
  status: "idle",
  error: null,
};

const workspaceSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspaces.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWorkspaces.fulfilled, (state, action: PayloadAction<WorkspaceI[]>) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWorkspaces.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default workspaceSlice.reducer;

export const selectWorkspaces = (state: RootState) => state.workspaces;
