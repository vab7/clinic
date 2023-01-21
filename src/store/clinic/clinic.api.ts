import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICheckUp } from "../../models/models";

export const clinicApi = createApi({
  reducerPath: "clinic/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (build) => ({
    getCheckUps: build.query<ICheckUp[], null>({
      query: () => ({
        url: "check-ups",
      }),
    }),
  }),
});

export const { useGetCheckUpsQuery } = clinicApi;
