import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => `clients`,
    }),
    getReports: builder.query({
      query: (clientId: string) => `reports?clientId=${clientId}`,
      
    }),
    getTasks: builder.query({
      query: (reportId: string) => `tasks?reportId=${reportId}`,
    }),
  }),
});

export const { useGetClientsQuery, useGetReportsQuery, useGetTasksQuery } =
  jsonServerApi;
