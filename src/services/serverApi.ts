import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getClients: builder.query({
      query: (page = 1) => `clients?_page=${page}&_limit=10`,
    }),
    getReports: builder.query({
      query: (page = 1) => `reports?_page=${page}&_limit=10`,
    }),
    getTasks: builder.query({
      query: (page = 1) => `tasks?_page=${page}&_limit=10`,
    }),
  }),
});

export const { useGetClientsQuery, useGetReportsQuery, useGetTasksQuery } =
  jsonServerApi;
