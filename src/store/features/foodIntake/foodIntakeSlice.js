import { createSlice } from '@reduxjs/toolkit';
import { getMyFoodIntake, postMyFoodIntake, postMyWaterIntake } from './thunks';

const initialState = {
  items: [],
  waterIntake: null,
  error: null,
};

const foodIntakeSlice = createSlice({
  name: 'foodIntake',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getMyFoodIntake.fulfilled, (state, { payload }) => {
        state.items = payload.items;
        state.waterIntake = payload.waterIntake;
      })
      .addCase(postMyFoodIntake.fulfilled, (state, { payload }) => {})
      .addCase(postMyWaterIntake.fulfilled, (state, { payload }) => {
        state.waterIntake += payload;
      });
  },
});

export default foodIntakeSlice.reducer;
