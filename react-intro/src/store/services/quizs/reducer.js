import { createSlice } from '@reduxjs/toolkit';
import actions from './actions';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  quizs: [],
  filter: '',
  filtredQuizes: [],
};

export const quizsReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = payload;
      // eslint-disable-next-line no-param-reassign
      state.filtredQuizes = state.quizs.filter((quiz) => {
        const quizInitial = quiz.nameQuiz.toLowerCase();
        return quizInitial.indexOf(payload.toLowerCase()) !== -1;
      });
    });
    builder.addCase(thunks.fetchQuizs.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.quizs = payload;
    });
  },
});

export default quizsReducer.reducer;
