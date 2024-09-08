import { baseApi } from "../api/baseApi";

const JobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getALlJOb: builder.query({
      query: ({ jobType, jobPosition, experience, salary }) => {
        // Construct the query string
        const queryString = new URLSearchParams({
          jobType,
          jobPosition,
          experience,
          salary: salary.join(",") 
        }).toString();

        return {
          url: `/get-jobs?${queryString}`,
        };
      },
    }),
  }),
});

export const { useGetALlJObQuery } = JobApi;
