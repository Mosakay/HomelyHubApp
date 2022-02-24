import { createApi } from '@reduxjs/toolkit/query/react';
import Http from './Http';
import jwt from 'jwt-decode';
import { EndPoints, RtkqTagEnum } from '../constants/index';

export const homelyHubApiQuery = createApi({
  reducerPath: 'homelyHub',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    vendorRegister: builder.mutation({
      query: data => ({ url: EndPoints.VENDOR_REGISTER, data, method: 'post' }),
    }),
    vendorLogin: builder.mutation({
      query: data => ({ url: EndPoints.VENDOR_LOGIN, data, method: 'post' }),
    }),
    userRegister: builder.mutation({
      query: data => ({
        url: EndPoints.USER_REGISTER,
        data,
        method: 'post',
      }),
    }),
    userLogin: builder.mutation({
      query: data => ({ url: EndPoints.USER_LOGIN, data, method: 'post' }),
    }),
    refreshAccessToken: builder.mutation({
      query: token => ({
        url: '/refreshToken',
        data: { token },
        method: 'post',
      }),
      transformResponse: data => {
        const payload = jwt(data.accessToken);
        return {
          ...data,
          accessTokenExp: payload.exp,
        };
      },
    }),
    getProfile: builder.query({
      query: id => ({ url: '/profile' }),
      providesTags: data => providesTags(data, RtkqTagEnum.AUTH_USER),
    }),
  }),
});

[homelyHubApiQuery].forEach(api => {
  api.enhanceEndpoints({ addTagTypes: Object.values(RtkqTagEnum) });
});

/**
 *
 * @param {import("axios").AxiosRequestConfig} baseConfig
 */
export function axiosBaseQuery(baseConfig = {}) {
  return request;

  /**
   *
   * @param {import("axios").AxiosRequestConfig} config
   */
  async function request(config = {}) {
    const url = config.url
      ? (baseConfig.url || '') + config.url
      : baseConfig.url;
    try {
      const response = await Http.request({ ...baseConfig, ...config, url });

      return {
        ...response,
        data: response.data,
        message: response.data?.message || null,
        status: response.status || 200,
        meta: { request: response.request, response },
      };
    } catch (error) {
      return {
        error: error.response
          ? {
              message: '',
              status: error.response.status,
              data: error.response.data,
            }
          : {
              message: 'Something went wrong',
              data: { message: 'Something went wrong' },
            },
      };
    }
  }
}

export function providesTags(resultsWithIds, tagType, options = {}) {
  const { selectId = ({ id }) => id } = options;
  const listTag = { type: tagType, id: 'LIST' };
  const result = resultsWithIds
    ? [
        listTag,
        ...resultsWithIds.map(result => ({
          type: tagType,
          id: selectId(result),
        })),
      ]
    : [listTag];

  return result;
}

export function invalidatesTags(tagType, options = {}) {
  const { ids = [] } = options;
  const result = [
    { type: tagType, id: 'LIST' },
    ...ids.map(id => ({ type: tagType, id })),
  ];

  return result;
}
