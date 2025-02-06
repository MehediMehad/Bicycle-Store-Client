import { baseApi } from "../../api/baseApi";

const bicycleManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBicycle: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "product", id: "update" }],
    }),
    updateProduct: builder.mutation({
      query: (body) => ({
        url: `/products/${body.id}`,
        method: "PUT",
        body: body.data,
      }),
      invalidatesTags: [{ type: "user", id: "update" }],
    }),
  }),
});

export const { useAddBicycleMutation, useUpdateProductMutation } =
  bicycleManagementApi;
