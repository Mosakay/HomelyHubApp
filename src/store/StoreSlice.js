import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deepMerge} from '../utility/Utils';
import {logoutAction} from '../store/StoreActions';
import {homelyHubApiQuery} from '../apis/QueryApi';

export const loadStorageStateAction = createAsyncThunk(
  'loadStorageState',
  async (initialStates = {}) => {
    try {
      const serializedState = await AsyncStorage.getItem('@state');
      const newState = Object.assign({}, initialStates);
      if (serializedState) {
        const parsedState = JSON.parse(serializedState);
        Object.assign(newState, deepMerge(newState, parsedState));
      }
      return newState;
    } catch (error) {}
    return {};
  },
);

const initialState = {
  isLoading: true,
  isLoadingModal: false,
  authUser: null,
  userType: null,
};

const slice = createSlice({
  name: 'homelyHub',
  initialState,
  reducers: {
    toggleLoadingModal: (state, {payload}) => {
      state.isLoadingModal = payload || !state.isLoadingModal;
    },
    userTypeAction: (state, {payload}) => {
      state.userType = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loadStorageStateAction.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.authUser = payload?.homelyHub?.authUser;
      })
      .addCase(logoutAction, () => ({...initialState}))
      .addMatcher(
        homelyHubApiQuery.endpoints.vendorLogin.matchFulfilled,
        (state, {payload}) => {
          state.authUser = {
            accessToken: payload?.data?.accessToken,
            profile: {...payload?.data.profile},
          };
        },
      )
      .addMatcher(
        homelyHubApiQuery.endpoints.userLogin.matchFulfilled,
        (state, {payload}) => {
          state.authUser = {
            profile: {...payload?.data.profile},
            accessToken: payload?.data?.accessToken,
          };
        },
      )
      .addMatcher(
        homelyHubApiQuery.endpoints.userRegister.matchFulfilled,
        (state, {payload}) => {
          state.authUser = {
            accessToken: payload.data?.accessToken,
            ...payload?.data,
          };
        },
      )
      .addMatcher(
        homelyHubApiQuery.endpoints.refreshAccessToken.matchFulfilled,
        (state, {payload}) => {
          state.authUser.accessToken = payload?.data?.accessToken;
          state.authUser.accessTokenExp = payload?.data?.expiryIn;
        },
      )
      .addMatcher(
        homelyHubApiQuery.endpoints.getProfile.matchFulfilled,
        (state, {payload}) => {
          state.authUser = {
            accessToken: payload?.data?.accessToken,
            profile: {...payload.data.profile},
          };
        },
      ),
});

export const {toggleLoadingModal: toggleLoadingModalAction, userTypeAction} =
  slice.actions;

export default slice.reducer;

export function getGlobalSliceStorageState({authUser} = {}) {
  return {authUser};
}
