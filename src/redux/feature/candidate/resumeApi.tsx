import { baseApi } from "../api/baseApi";

const resumeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createResume: builder.mutation({
      query: (resumeData) => ({
        url: "/create-resume",
        method: "PUT",
        body: resumeData,
      }),
    }),
    getMyResume: builder.query({
      query: () => ({
        url: "/create-resume",
        method:"GET"
      }),
    }),
  }),
});

export const { useCreateResumeMutation,useGetMyResumeQuery } = resumeApi;
