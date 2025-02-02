import { baseApi } from "../../api/baseApi";

const bicycleManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBicycle: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddBicycleMutation } = bicycleManagementApi;
