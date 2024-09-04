import { baseApi } from "../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/login-user",
          method: "POST",
          body: userInfo,
          credentials: "include",
        };
      },
    }),
    registration: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/register-user",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
