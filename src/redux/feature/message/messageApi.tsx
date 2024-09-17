import { baseApi } from "../api/baseApi";

const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: (id) => {
        return {
          url: `/get-massage/${id}`,
        };
      },
    }),
    sendMessage: builder.mutation({
      query: ({ id, text }) => {
        return {
          url: `/send-message/${id}`,
          body: { message: text },
          method: "POST",
        };
      },
    }),
  }),
});

export const { useGetMessageQuery, useSendMessageMutation } = messageApi;
