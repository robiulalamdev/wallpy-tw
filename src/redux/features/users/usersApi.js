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

    createUser: builder.mutation({
      query: ({ data }) => ({
        url: `/users/signup`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["users"],
    }),

    emailVerify: builder.mutation({
      query: ({ token, data }) => ({
        url: `/users/email-verify/${token}`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["users"],
    }),

    passwordReset: builder.mutation({
      query: ({ data }) => ({
        url: `/users/reset-password`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["users"],
    }),

    verifyResetPassword: builder.mutation({
      query: ({ token, data }) => ({
        url: `/users/verify-reset-password/${token}`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["users"],
    }),

    changePassword: builder.mutation({
      query: ({ data }) => ({
        url: `/users/change-password`,
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

export const {
  usePostLoginMutation,
  useCreateUserMutation,
  useEmailVerifyMutation,
  useGetUserQuery,

  // reset password step by stem
  usePasswordResetMutation,
  useVerifyResetPasswordMutation,
  useChangePasswordMutation,
} = usersApi;
