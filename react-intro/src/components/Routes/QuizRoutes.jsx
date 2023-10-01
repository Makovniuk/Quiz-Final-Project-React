/* eslint-disable import/namespace */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizGame from '../../pages/QuizGame/QuizGame';
import QuizMain from '../../pages/QuizMain/QuizMain';
import CreatorQuizs from '../CreatorQuizs/CreatorQuizs';
import FavoriteQuizs from '../FavoriteQuizs/FavoriteQuizs';
import NotFound from '../NotFound/NotFound';

export default function QuizRoutes() {
  return (
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route path='/' element={<QuizMain />} />
      <Route path='/quizTopic/:topic' element={<QuizGame />} />
      <Route path='/favorite' element={<FavoriteQuizs />} />
      <Route path='/create' element={<CreatorQuizs />} />
    </Routes>
  );
}
