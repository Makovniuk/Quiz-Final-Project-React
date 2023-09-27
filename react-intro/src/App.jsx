import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import QuizRoutes from './components/Routes/QuizRoutes';
import Template from './components/Templates/Template';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route element={<Template />}>
        <Route path='/QuizMain/*' element={<QuizRoutes />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
