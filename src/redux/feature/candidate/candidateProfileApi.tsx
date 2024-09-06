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
  }),
});

export const { useCreateCandidateProfileMutation } = candidateProfileApi;
