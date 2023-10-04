import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { quizsReducer } from './services/quizs';
import { quizGameReducer } from './services/quizGame';

const rootReducer = combineReducers({
  quizsReducer,
  quizGameReducer,

});

const store = configureStore({ reducer: rootReducer });

export default store;
