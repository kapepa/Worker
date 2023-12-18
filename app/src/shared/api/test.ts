import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface Post {
  id: number
  name: string
}
type PostsResponse = Post[]

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPosts: build.query<PostsResponse, void>({
      query: () => 'posts',
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: 'Posts', id })) : [],
    }),
    addPost: build.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

// Auto-generated hooks
export const { useGetPostsQuery, useAddPostMutation } = api

// Possible exports
export const { endpoints, reducerPath, reducer, middleware } = api