import { baseApi } from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => {
        return {
          url: "/get-all-user",
        };
      },
    }),
  }),
});

export const {useGetAllUserQuery} = userApi;
