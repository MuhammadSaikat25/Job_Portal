import { baseApi } from "../api/baseApi";

const candidateProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCandidateProfile: builder.mutation({
      query: (profileData) => ({
        url: "/candidate-profile",
        method: "PUT",
        body: profileData,
      }),
    }),
    getCandidateProfile: builder.query({
      query: () => ({
        url: "/candidate-profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateCandidateProfileMutation,useGetCandidateProfileQuery } = candidateProfileApi;
