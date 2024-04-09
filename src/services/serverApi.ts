import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Clients"],
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => `clients`,
      providesTags: ["Clients"],
    }),
    addClient: builder.mutation({
      query: (name) => ({
        url: `clients`,
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["Clients"],
    }),
    removeClient: builder.mutation({
      query: (id) => ({
        url: `clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Clients"],
    }),
    getReports: builder.query({
      query: (clientId: string) => `reports?clientId=${clientId}`,
    }),
    getTasks: builder.query({
      query: (reportId: string) => `tasks?reportId=${reportId}`,
    }),
  }),
});

export const {
  useGetClientsQuery,
  useGetReportsQuery,
  useGetTasksQuery,
  useAddClientMutation,
  useRemoveClientMutation
} = jsonServerApi;
