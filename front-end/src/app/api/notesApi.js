import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'utils/api';

// Define a service using a base URL and expected endpoints
export const notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const token =   JSON.parse(localStorage.getItem("user"))?.JWT;
    //   if (token) {
    //     headers.set('X-Authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // },
  }),
  tagTypes: ['notes'],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => ({
        url: `/api/notes`,
        method: "GET",
      }),
      // transformResponse: (response, meta, arg) => response?.user?.[0],
      providesTags: ['notes'],
    }),
    updateUser: builder.mutation({
      query: ({id,...data}) => ({
        url: `/edit/user/${id}`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['notes'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNotesQuery, useUpdateUserMutation } = notesApi