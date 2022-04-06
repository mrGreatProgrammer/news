import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../api/api";

export const blogsAPI = createApi({
  reducerPath: "blogsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    fetchAllBlogs: builder.query({
      query: (limit = 6) => ({
        url: "/blogs",
        method: "GET",
        params: {
          page: 1,
          limit: limit,
        },
      }),
      providesTags: (result) => ["Blog"],
    }),
    creatBlog: builder.mutation({
      query: (data) => ({
        url: '/blogs',
        method: 'POST',
        body: { title: data.title, content: data.txt }
      }),
      invalidatesTags: ["Blog"]
    }),
    bookmarks: builder.query({
      query: (data) => ({
        url: '/blogs',
        method: 'GET',
        params: { 
          favorites: data.id
        }
      }),
      providesTags: (result) => ["Blog"],
    }),
    addToFavorites: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data.postId}`,
        method: "PUT",
        body: { favorites: data.favorites.concat(data.userId) },
      }),
      invalidatesTags: ["Blog"],
    }),
    removeFromFavorites: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data.postId}`,
        method: "PUT",
        body: {
          favorites: data.favorites.filter((f) => f !== data.userId),
        },
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const { useFetchAllBlogsQuery } = blogsAPI;
export const {useCreatBlogMutation} = blogsAPI;
export const  {useBookmarksQuery} = blogsAPI;
export const { useAddToFavoritesMutation } = blogsAPI;
export const { useRemoveFromFavoritesMutation } = blogsAPI;
