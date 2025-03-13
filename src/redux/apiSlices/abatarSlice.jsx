import { api } from "../api/baseApi";

const avatarSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    avatars: builder.query({
      query: ({ page, limit }) => {
        return {
          method: "GET",
          url: `/avatar${page ? `?page=${page}&limit=${limit}` : ""}`,
        };
      },
      providesTags: ["Avatars"],
    }),

    addAvatar: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/avatar",
        body,
      }),
      invalidatesTags: ["Avatars"],
    }),

    avatarTransaction: builder.query({
      query: ({ page, limit }) => ({
        method: "GET",
        url: `/admin/transactions${page ? `?page=${page}&limit=${limit}` : ""}`,
      }),
      invalidatesTags: ["Avatars"],
    }),
  }),
});

export const {
  useAddAvatarMutation,
  useAvatarsQuery,
  useAvatarTransactionQuery,
} = avatarSlice;
