import { baseApi } from "../api/baseApi";

const employerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCompany: builder.mutation({
      query: (companyData) => ({
        url: "/create-company",
        method: "PUT",
        body: companyData,
      }),
    }),
  }),
});

export const { useCreateCompanyMutation } = employerApi;
