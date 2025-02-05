import { TQueryParam, TResponseRedux } from "../../../types/global.type";
import { TUser } from "../../../types/user.type";
import { baseApi } from "../../api/baseApi";

const userManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/users",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["user"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    updateUserStatus: builder.mutation({
      query: (args) => ({
        url: `/users`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserStatusMutation } =
  userManagement;
