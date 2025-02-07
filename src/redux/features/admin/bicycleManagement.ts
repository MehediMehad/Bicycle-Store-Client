import { TBicycle } from "../../../types";
import { TQueryParam, TResponseRedux } from "../../../types/global.type";
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
    getAllBicycle: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
      transformResponse: (response: TResponseRedux<TBicycle[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getBicycle: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
      transformResponse: (response: TResponseRedux<TBicycle>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    updateProduct: builder.mutation({
      query: (args) => ({
        url: `/products/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteBicycle: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddBicycleMutation,
  useUpdateProductMutation,
  useGetBicycleQuery,
  useGetAllBicycleQuery,
  useDeleteBicycleMutation,
} = bicycleManagementApi;
