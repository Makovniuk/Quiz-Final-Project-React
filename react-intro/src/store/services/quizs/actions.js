import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const filterAction = createAction(`${moduleName}/filterAction`, (payload) => ({ payload }));
const switcherFavorite = createAction(`${moduleName}/switcherFavorite`, (payload) => ({ payload }));

export default {
  filterAction,
  switcherFavorite,
};
