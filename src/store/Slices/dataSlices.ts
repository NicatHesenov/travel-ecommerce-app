import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type Tour from "../../types/Tour";

export const tourApi = createApi({
  reducerPath: "tourApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://698c986a21a248a273621304.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    getTours: builder.query<Tour[], void>({
      query: () => `tours`,
    }),
  }),
});

export const { useGetToursQuery } = tourApi;
