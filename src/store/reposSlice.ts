import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type reposState = {
  repos: any[];
}

const initialState: reposState = {
  repos: [],
}

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    
  },
});

export default reposSlice.reducer;