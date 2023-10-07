/* eslint-disable import/namespace */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/default
import QuizForm from '../../pages/QuizForm/QuizForm';
import QuizGame from '../../pages/QuizGame/QuizGame';
import QuizMain from '../../pages/QuizMain/QuizMain';

import FavoriteQuizs from '../FavoriteQuizs/FavoriteQuizs';
import NotFound from '../NotFound/NotFound';

export default function QuizRoutes() {
  return (
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route path='/' element={<QuizMain />} />
      <Route path='/quizTopic/:topic' element={<QuizGame />} />
      <Route path='/favorite' element={<FavoriteQuizs />} />
      <Route path='/create' element={<QuizForm />} />
    </Routes>
  );
}
