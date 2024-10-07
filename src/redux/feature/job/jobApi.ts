import { baseApi } from "../api/baseApi";

const JobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getALlJOb: builder.query({
      query: ({
        jobType,
        jobPosition,
        experience,
        salary,
        limit = 5,
        page = 1,
      }) => {
        const queryString = new URLSearchParams({
          jobType,
          jobPosition,
          experience,
          salary: salary.join(","),
          limit: limit.toString(),
          page: page.toString(),
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
    candidateOverview: builder.query({
      query: () => {
        return {
          url: "/overview",
        };
      },
    }),
    searchJob: builder.query({
      query: ({ title, location }) => {
        const queryParams = new URLSearchParams({
          ...(title && { title }),
          ...(location && { location }),
        }).toString();
        return {
          url: `/search-job?${queryParams}`,
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
  useCandidateOverviewQuery,
  useSearchJobQuery,
} = JobApi;
