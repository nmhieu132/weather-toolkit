import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from '../redux/weatherSlice';
import rootSaga from './rootSaga';
const sagaMiddleware=createSagaMiddleware()
export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      immutableCheck: false
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga)
