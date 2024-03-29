import { api } from "../../api/apiSlice";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: ({ data }) => ({
        url: `/users/login`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["users"],
    }),
    postSignup: builder.mutation({
      query: ({ data }) => ({
        url: `/users/signup`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["users"],
    }),
    getUser: builder.query({
      query: () => `/users/me`,
      providesTags: ["users"],
    }),
  }),
});

export const { usePostLoginMutation, useGetUserQuery } = usersApi;
