import { axiosAuth } from '@/utils/network';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMyWaterIntake = createAsyncThunk(
  'waterIntake/get',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.get('user/water-intake');
      console.log(res);

      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const postMyWaterIntake = createAsyncThunk(
  'waterIntake/post',
  async (waterIntake, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('user/water-intake', waterIntake);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
