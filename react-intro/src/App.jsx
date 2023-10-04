/* eslint-disable import/default */
/* eslint-disable import/namespace */
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import QuizRoutes from './components/Routes/QuizRoutes';
import Template from './components/Templates/Template';
import './index.css';
import store from './store';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route element={<Template />}>
        <Route path='/QuizMain/*' element={<QuizRoutes />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}
