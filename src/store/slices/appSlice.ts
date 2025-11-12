import { createSlice } from '@reduxjs/toolkit';
// import {getAxiosInstance} from '../../api/api';

const initialState = {
  token: null,
  status: 'idle',
  error: null,
  message: null,
  appValuesList: null,
  isOnBoarded: false,
};

// export const getAppValuesList = createAsyncThunk(
//   'auth/getAppValuesList',
//   async (params: any, {rejectWithValue}) => {
//     const api = await getAxiosInstance();
//     try {
//       const response = await api.get('member/register');
//       return response?.data;
//     } catch (error: any) {
//       return rejectWithValue(error?.reponse?.data);
//     }
//   },
// );

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOnBoard: (state, action) => {
      state.isOnBoarded = action.payload;
    },
  },
  extraReducers: () => {
    // builder.addCase(getAppValuesList.pending, (state, action) => {
    //   state.status = 'loading';
    //   state.message = null;
    // });
    // builder.addCase(getAppValuesList.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.appValuesList = action?.payload?.data;
    // });
    // builder.addCase(getAppValuesList.rejected, (state, action) => {
    //   state.status = 'failed';
    // });
  },
});

export const { setOnBoard } = appSlice.actions;

export default appSlice.reducer;
