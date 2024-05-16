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

    updateTagById: builder.mutation({
      query: ({ data, id }) => ({
        url: `/wallpapers/update-tags/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    incrementWallView: builder.mutation({
      query: ({ data, wallpaperId }) => ({
        url: `/wallpapers/view-increment/${wallpaperId}`,
        method: "PATCH",
        body: data,
      }),
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
      query: (slug) => `/wallpapers/slug/${slug}`,
      providesTags: ["wallpapers"],
    }),

    getWallpapersByUserId: builder.query({
      query: (userId) => `/wallpapers/profile-wallpapers/${userId}`,
      providesTags: ["wallpapers"],
    }),

    getPopularWallpapers: builder.query({
      query: (query) => `/wallpapers/popular${query}`,
      providesTags: ["wallpapers"],
    }),

    getFeaturedWallpapers: builder.query({
      query: (query) => `/wallpapers/featured${query}`,
      providesTags: ["wallpapers"],
    }),

    getOfficialWallpapers: builder.query({
      query: (query) => `/wallpapers/official${query}`,
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
  useGetWallpapersByUserIdQuery,
  useGetPopularWallpapersQuery,
  useGetFeaturedWallpapersQuery,
  useGetOfficialWallpapersQuery,

  // PATCH
  useUpdateTagByIdMutation,
  useIncrementWallViewMutation,
} = usersApi;
