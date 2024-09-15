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
    getAllApplicants: builder.query({
      query: () => {
        return {
          url: "/get-allApplicants",
        };
      },
    }),
    employerAllJob: builder.query({
      query: () => {
        return {
          url: "/get-companyAllJob",
        };
      },
    }),
    approvedApplication: builder.mutation({
      query: (id) => {
        return {
          url: `/approved/${id}`,
          method: "PUT",
          body: {},
        };
      },
    }),
    rejectApplication: builder.mutation({
      query: (id) => {
        return {
          url: `/reject/${id}`,
          method: "PUT",
          body: {},
        };
      },
    }),
    updateJob: builder.mutation({
      query: ({ jobPostData, id }) => {
        return {
          url: `/updateJob/${id}`,
          method: "PUT",
          body: jobPostData,
        };
      },
    }),
  }),
});

export const {
  usePostJobMutation,
  useGetAllApplicantsQuery,
  useEmployerAllJobQuery,
  useApprovedApplicationMutation,
  useRejectApplicationMutation,
  useUpdateJobMutation,
} = JobApi;
