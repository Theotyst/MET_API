import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFishes = createAsyncThunk('fishes/fetchFishes', async () => {
  const response = await fetch('https://www.fishwatch.gov/api/species');
  const data = await response.json()
  return data
})

export const fishesSlice = createSlice({
  name: 'fishes',
  initialState: {
    data : [],
    fetchingStatus: 'idle',
    error: null
  },
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFishes.pending, (state, action) => {
        state.fetchingStatus = 'loading';
      })
      .addCase(fetchFishes.fulfilled, (state, action) =>  {
        state.fetchingStatus = 'succeeded';
        state.data = state.data.concat(action.payload)
      })
      .addCase(fetchFishes.rejected, (state, action) => {
        state.fetchingStatus = "failed"
        state.error = action.error.message
      })
  }
});

export default fishesSlice.reducer