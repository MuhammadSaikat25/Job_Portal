import { baseApi } from "../api/baseApi";

const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCompany: builder.mutation({
      query: (companyData) => ({
        url: "/create-company",
        method: "PUT",
        body: companyData,
      }),
    }),
    getMyCompany: builder.query({
      query: () => {
        return {
          url: "/get-my-company",
          method: "GET",
        };
      },
    }),
    companyOverview: builder.query({
      query: () => {
        return {
          url: "/companyOverview",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useCreateCompanyMutation,
  useGetMyCompanyQuery,
  useCompanyOverviewQuery,
} = companyApi;
