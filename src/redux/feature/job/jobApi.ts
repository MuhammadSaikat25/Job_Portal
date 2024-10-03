import { baseApi } from "../api/baseApi";

const JobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getALlJOb: builder.query({
      query: ({ jobType, jobPosition, experience, salary }) => {
        const queryString = new URLSearchParams({
          jobType,
          jobPosition,
          experience,
          salary: salary.join(","),
        }).toString();

        return {
          url: `/get-jobs?${queryString}`,
        };
      },
    }),
    singleJob: builder.query({
      query: (id) => {
        return {
          url: `job-details/${id}`,
        };
      },
    }),
    appliedJob: builder.mutation({
      query: (data) => {
        return {
          url: "/applied-job",
          method: "POST",
          body: data,
        };
      },
    }),
    amIApplied: builder.query({
      query: (id) => {
        return {
          url: `/get-applied-job/${id}`,
        };
      },
    }),
    getAllAppliedJob: builder.query({
      query: () => {
        return {
          url: "get-applied-job",
        };
      },
    }),
    getPopularJob: builder.query({
      query: () => {
        return {
          url: "/popular-job",
        };
      },
    }),
  }),
});

export const {
  useGetALlJObQuery,
  useSingleJobQuery,
  useAppliedJobMutation,
  useAmIAppliedQuery,
  useGetAllAppliedJobQuery,
  useGetPopularJobQuery,
} = JobApi;
