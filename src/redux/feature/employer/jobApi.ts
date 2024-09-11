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
    getAllApplicants:builder.query({
      query:()=>{
        return{
          url:"/get-allApplicants"
        }
      }
    }),
    employerAllJob:builder.query({
      query:()=>{
        return{
          url :"/get-companyAllJob"
        }
      }
    })
  }),
});

export const { usePostJobMutation ,useGetAllApplicantsQuery,useEmployerAllJobQuery} = JobApi;
