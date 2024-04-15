import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Clients", "Reports", "Tasks"],
  endpoints: (builder) => ({
    // Clients
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
    // Report
    getReports: builder.query({
      query: (clientId: string) => `reports?clientId=${clientId}`,
      providesTags: (result, error, arg) => {
        return [{ type: "Reports", id: arg }];
      },
    }),
    addReport: builder.mutation({
      query: ({ name, parentId }) => ({
        url: `reports`,
        method: "POST",
        body: { name, clientId: parentId },
      }),
      invalidatesTags: (result, error, args) => {
        return [{ type: "Reports", id: args.parentId }];
      },
    }),
    removeReport: builder.mutation({
      query: ({ id }) => ({
        url: `reports/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => {
        return [{ type: "Reports", id: args.parentId }];
      },
    }),
    // Tasks
    getTasks: builder.query({
      query: (reportId: string) => `tasks?reportId=${reportId}`,
      providesTags: (result, error, arg) => {
        return [{ type: "Tasks", id: arg }];
      },
    }),
    addTask: builder.mutation({
      query: ({ name, parentId }) => ({
        url: `tasks`,
        method: "POST",
        body: { name, reportId: parentId },
      }),
      invalidatesTags: (result, error, args) => {
        return [{ type: "Tasks", id: args.parentId }];
      },
    }),
    removeTask: builder.mutation({
      query: ({ id }) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      // parentId
      invalidatesTags: (result, error, args) => {
        return [{ type: "Tasks", id: args.parentId }];
      },
    }),
  }),
});

export const {
  useGetClientsQuery,
  useAddClientMutation,
  useRemoveClientMutation,
  useGetReportsQuery,
  useAddReportMutation,
  useRemoveReportMutation,
  useGetTasksQuery,
  useAddTaskMutation,
  useRemoveTaskMutation,
} = jsonServerApi;
