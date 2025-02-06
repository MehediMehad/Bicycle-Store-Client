import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:7000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions); // Making the initial API request

  console.log("KK", result);

  // If the response returns a 401 Unauthorized error
  if (result.error?.status === 401) {
    console.log("Sending RefreshToken");

    // Sending a request to refresh the token
    const res = await fetch("http://localhost:7000/api/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);

    // If a new access token is received
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user; // Retrieving the user information from the Redux store
      console.log({ user });

      // Dispatching the updated user and token to the Redux store
      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken, // Setting the new access token
        })
      );
      // Retrying the original request with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["user", "product"],
  endpoints: () => ({}),
});
