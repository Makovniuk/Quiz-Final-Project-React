import { createAsyncThunk } from '@reduxjs/toolkit';
import { quizs } from '../../../api/quizs/quizs';
import { moduleName } from './constants';

const fetchQuizs = createAsyncThunk(`${moduleName}/fetchQuizs`, async () => {
  const response = quizs.get();
  return response;
});
const postQuiz = createAsyncThunk(`${moduleName}/postQuiz`, async (quizObject) => {
  quizs.post(quizObject);
});

export default {
  fetchQuizs,
  postQuiz,
};
