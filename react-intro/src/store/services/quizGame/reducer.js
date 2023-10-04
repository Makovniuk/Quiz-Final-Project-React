import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  quizGame: [],
};

export const quizGameReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchQuizGame.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.quizGame = payload;
    });
    builder.addCase(thunks.fetchQuizGame.rejected, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.quizGame = [];
    });
  },
});

export default quizGameReducer.reducer;
