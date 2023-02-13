import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import user from '../modules/userSlice';

const store = configureStore({
  reducer: {
    user,
  },
});

export default store;
