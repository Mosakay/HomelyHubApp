import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import homelyHub, {loadStorageStateAction,getGlobalSliceStorageState} from './StoreSlice';
import {throttle} from '../utility/Utils'

const store = configureStore({
  reducer: {homelyHub},
});

export default store;

// store.subscribe(() => {
//   const state = store.getState();
//   try {
//     const serializedState = JSON.stringify(state);
//     AsyncStorage.setItem('@state', serializedState);
//   } catch (error) {}
// });

store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState({
      [homelyHub.name]: getGlobalSliceStorageState(state[homelyHub.name]),
    
    });
  }, 1000),
);


function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
     AsyncStorage.setItem('@state', serializedState);
  } catch (error) {}
}



store.dispatch(loadStorageStateAction());