import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (userInfo) => ({
        url: "users/registration",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useAddUserMutation } = authApi;
