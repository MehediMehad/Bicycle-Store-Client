import { baseApi } from "../../api/baseApi";

const bicycleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBicycle: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBicycleQuery } = bicycleApi;
