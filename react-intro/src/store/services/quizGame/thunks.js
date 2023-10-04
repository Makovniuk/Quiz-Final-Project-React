import { createAsyncThunk } from '@reduxjs/toolkit';
import { topicQuiz } from '../../../api/topicQuiz/topicQuiz';
import { moduleName } from './constants';

const fetchQuizGame = createAsyncThunk(`${moduleName}/fetchQuizGame`, async (topic) => {
  const response = topicQuiz.get(topic);
  return response;
});

export default {
  fetchQuizGame,
};
