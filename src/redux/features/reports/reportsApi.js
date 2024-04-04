import { api } from "../../api/apiSlice";

const reportsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    sendReport: builder.mutation({
      query: ({ data }) => ({
        url: `/reports/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reports"],
    }),
  }),
});

export const { useSendReportMutation } = reportsApi;
