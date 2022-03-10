import {combineReducers} from '@reduxjs/toolkit';
import {homelyHubApiQuery} from '../../apis/QueryApi';
import globalSlice from '../StoreSlice';

const rootReducer = combineReducers({
  [homelyHubApiQuery.reducerPath]: homelyHubApiQuery.reducer,
  [globalSlice.name]: globalSlice.reducer,
});

export default rootReducer;
