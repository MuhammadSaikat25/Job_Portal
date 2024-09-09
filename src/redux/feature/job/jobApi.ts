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
    singleJob:builder.query({
      query:(id)=>{
        return{
          url:`job-details/${id}`
        }
      }
    })
  }),
});

export const { useGetALlJObQuery,useSingleJobQuery } = JobApi;
