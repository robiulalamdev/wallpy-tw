import { api } from "../../api/apiSlice";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createWallpapers: builder.mutation({
      query: ({ data }) => ({
        url: `/wallpapers/create-wallpapers`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wallpapers"],
    }),

    updateWallpapers: builder.mutation({
      query: ({ data }) => ({
        url: `/wallpapers/updates`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["wallpapers"],
    }),

    deleteWallpapersByIds: builder.mutation({
      query: ({ data }) => ({
        url: `/wallpapers/deletes`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["wallpapers"],
    }),

    getWallpapers: builder.query({
      query: () => `/wallpapers`,
      providesTags: ["wallpapers"],
    }),

    getSearchWallpapers: builder.query({
      query: (query = "") => `/wallpapers/public${query}`,
      providesTags: ["wallpapers"],
    }),

    getWallpaperBySlug: builder.query({
      query: (slug) => `/wallpapers/${slug}`,
      providesTags: ["wallpapers"],
    }),
  }),
});

export const {
  useCreateWallpapersMutation,
  useGetWallpapersQuery,
  useGetSearchWallpapersQuery,
  useUpdateWallpapersMutation,
  useDeleteWallpapersByIdsMutation,
  useGetWallpaperBySlugQuery,
} = usersApi;
