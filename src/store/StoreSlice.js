import { createSlice } from '@reduxjs/toolkit';
import { logoutAction } from '../store/StoreActions';
import { homelyHubApiQuery } from '../apis/QueryApi';

export const globalInitialState = {

  authUser: null,
  isLoadingModal: false,
  userType:null
};

const globalSlice = createSlice({
  name: 'global',
  initialState: globalInitialState,
  reducers: {
    toggleLoadingModalAction: (state, { payload }) => {
      state.isLoadingModal =
        payload !== undefined ? !!payload : !state.isLoadingModal;
    },
    userTypeAction: (state, { payload }) => {
      state.userType = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(logoutAction, () => ({ ...globalInitialState }))
      .addMatcher(
        homelyHubApiQuery.endpoints.vendorLogin.matchFulfilled,
        (state, { payload }) => {
          state.authUser = {
            ...payload.profile,
            accessToken: payload?.data?.accessToken,
          };
        },
      )
      .addMatcher(
        homelyHubApiQuery.endpoints.userLogin.matchFulfilled,
        (state, { payload }) => {
          state.authUser = {
            ...payload?.data,
            accessToken: payload?.data?.accessToken,
          };
        },
      )
      .addMatcher(
        homelyHubApiQuery.endpoints.userRegister.matchFulfilled,
        (state, { payload }) => {
          state.authUser = {
            ...payload?.data,
            accessToken: payload.access_token,
          };
        },
      )
      .addMatcher(
        homelyHubApiQuery.endpoints.refreshAccessToken.matchFulfilled,
        (state, { payload }) => {
          state.authUser.accessToken = payload?.data?.accessToken;
          state.authUser.accessTokenExp = payload?.data?.expiryIn;
        },
      )
      .addMatcher(
        homelyHubApiQuery.endpoints.getProfile.matchFulfilled,
        (state, { payload }) => {
          state.authUser = {
            ...payload.profile,
            accessToken: payload?.data,
          };
        },
      ),
});

export const { toggleLoadingModalAction,userTypeAction,toggleOnboardingAction } = globalSlice.actions;

export default globalSlice;

export function getGlobalSliceStorageState({ authUser } = {}) {
  return { authUser };
}
