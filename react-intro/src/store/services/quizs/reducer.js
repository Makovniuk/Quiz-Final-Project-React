import { createSlice } from '@reduxjs/toolkit';
import actions from './actions';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  quizs: [],
  filter: '',
  filtredQuizes: [],
  favorite: [],
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
    builder.addCase(actions.switcherFavorite, (state, { payload }) => {
      const quizIndex = state.quizs.findIndex((quiz) => quiz.id === payload);

      if (quizIndex !== -1) {
        const quiz = state.quizs[quizIndex];
        quiz.isFavorite = !quiz.isFavorite;

        if (quiz.isFavorite) {
          state.favorite.push(quiz);
        } else {
          const favoriteIndex = state.favorite.findIndex((favQuiz) => favQuiz.id === payload);
          if (favoriteIndex !== -1) {
            state.favorite.splice(favoriteIndex, 1);
          }
        }
      }
    });
    builder.addCase(thunks.fetchQuizs.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.quizs = payload;
    });
    builder.addCase(thunks.postQuiz.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.quizs = payload;
    });
  },
});

export default quizsReducer.reducer;
