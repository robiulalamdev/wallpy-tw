/* eslint-disable no-unused-vars */

import { api } from "../../api/apiSlice";
import { setChats } from "./conversationSlice";

const conversationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createChat: builder.mutation({
      query: ({ data }) => ({
        url: `/chats/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["chats"],
    }),

    sendMessage: builder.mutation({
      query: ({ data }) => ({
        url: `/messages/create`,
        method: "POST",
        body: data,
      }),
    }),

    myChats: builder.query({
      query: () => `/chats/me`,
      providesTags: ["chats"],
      async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
        const result = await queryFulfilled;
        dispatch(setChats(result?.data?.data));
      },
    }),

    getMessageByChatId: builder.query({
      query: (chatId) => `/messages/${chatId}`,
    }),
  }),
});

export const {
  useCreateChatMutation,
  useSendMessageMutation,
  useMyChatsQuery,
  useGetMessageByChatIdQuery,
} = conversationApi;
