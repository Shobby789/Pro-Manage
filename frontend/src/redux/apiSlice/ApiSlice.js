import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => "get-all-tasks",
    }),
  }),
});

export const { useFetchDataQuery } = apiSlice;
