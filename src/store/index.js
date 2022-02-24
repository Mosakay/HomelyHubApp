import rootReducer from "./reducers/reducers";
import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { deepMerge, throttle, isObjectEmpty } from "../utility/Utils";
import { logoutAction } from "./StoreActions";
import { homelyHubApiQuery } from "../apis/QueryApi";
import globalSlice, {
  globalInitialState,
  getGlobalSliceStorageState,
} from "../store/StoreSlice";


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: loadState({
    [globalSlice.name]: globalInitialState  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      homelyHubApiQuery.middleware,
      rtkqOnResetMiddleware(homelyHubApiQuery),
      // logger
    ),
});

setupListeners(store.dispatch);

store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState({
      [globalSlice.name]: getGlobalSliceStorageState(state[globalSlice.name])    });
  }, 1000)
);

export default store;

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("@state", serializedState);
  } catch (error) {}
}

function loadState(initialState = {}) {
  try {
    const newState = Object.assign({}, initialState);
    const storageState = getLocalStorageState();
    if (storageState && !isObjectEmpty(storageState)) {
      Object.assign(newState, deepMerge(newState, storageState));
    }
    return newState;
  } catch (error) {}
  return undefined;
}

function getLocalStorageState() {
  const serializedState = localStorage.getItem("@state");
  if (serializedState) {
    return JSON.parse(serializedState);
  }
  return null;
}

export function rtkqOnResetMiddleware(...apis) {
  return (store) => (next) => (action) => {
    const result = next(action);
    if (logoutAction.match(action)) {
      for (const api of apis) {
        store.dispatch(api.util.resetApiState());
      }
    }
    return result;
  };
}
