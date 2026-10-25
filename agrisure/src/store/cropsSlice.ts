import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Crop } from "../types/crop";

interface CropsState {
  items: Crop[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CropsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchCrops = createAsyncThunk<
  Crop[],
  void,
  { rejectValue: string }
>(
  "crops/fetchCrops",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/crops");

      if (!response.ok) {
        return rejectWithValue("The crop service returned an error.");
      }

      return (await response.json()) as Crop[];
    } catch {
      return rejectWithValue(
        "Could not connect to the crop API. Check that JSON Server is running."
      );
    }
  },
  {
    // skip if a request is already running (local type avoids the circular import)
    condition: (_, { getState }) =>
      (getState() as { crops: CropsState }).crops.status !== "loading",
  }
);

const cropsSlice = createSlice({
  name: "crops",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrops.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCrops.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCrops.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload ?? "Something went wrong while loading crops.";
      });
  },
});

export default cropsSlice.reducer;