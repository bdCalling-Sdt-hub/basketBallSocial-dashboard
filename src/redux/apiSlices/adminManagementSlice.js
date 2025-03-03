import { api } from "../api/baseApi";

const adminManagementSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/admin",
          body: data,
        };
      },
      invalidatesTags: ["AdminData"],
    }),
    getAllAdmins: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/admin",
        };
      },
      providesTags: ["AdminData"],
    }),
    updateAdmin: builder.mutation({
      query: ({ id, data }) => {
        return {
          method: "PATCH",
          url: `/admin/${id}`,
          body: data,
        };
      },
      invalidatesTags: ["AdminData"],
    }),
    deleteAdmin: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/admin/${id}`,
        };
      },
      invalidatesTags: ["AdminData"],
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useGetAllAdminsQuery,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = adminManagementSlice;
