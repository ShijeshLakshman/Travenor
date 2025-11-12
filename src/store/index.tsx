import { combineReducers } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';

const rootReducer = combineReducers({
  app: appSlice,
});

const appReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state.app = undefined;
  }
  return rootReducer(state, action);
};

export default appReducer;
