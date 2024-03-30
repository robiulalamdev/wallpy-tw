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

    updatePassword: builder.mutation({
      query: ({ data }) => ({
        url: `/users/update-password`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    //update user profile tab info
    updateProfileTabInfo: builder.mutation({
      query: ({ data }) => ({
        url: `/users/update-profile-tab`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    //update user profile tab info
    updateCredentialsTabInfo: builder.mutation({
      query: ({ data }) => ({
        url: `/users/update-credentials-tab`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    getUser: builder.query({
      query: () => `/users/me`,
      providesTags: ["users"],
    }),

    // ----------settings part----------
    //update user profile tab info
    settingsChange: builder.mutation({
      query: ({ data }) => ({
        url: `/users/settings/change`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
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

  //  update user profile tab info
  useUpdateProfileTabInfoMutation,
  useUpdateCredentialsTabInfoMutation,

  // -----------user settings endpoints------------
  useSettingsChangeMutation,
} = usersApi;
