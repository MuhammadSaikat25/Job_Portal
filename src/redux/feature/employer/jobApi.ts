import { baseApi } from "../api/baseApi";

const JobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (jobData) => ({
        url: "/post-job",
        method: "POSt",
        body: jobData,
      }),
    }),
  }),
});

export const { usePostJobMutation } = JobApi;
