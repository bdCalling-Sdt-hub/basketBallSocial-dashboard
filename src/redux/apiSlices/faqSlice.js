import { api } from "../api/baseApi";

const faqSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createFaq: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/faq",
          body: data,
        };
      },
      invalidatesTags: ["Faq"],
    }),
    getAllFaqs: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/faq",
        };
      },
      providesTags: ["Faq"],
    }),
    updateFaq: builder.mutation({
      query: ({ id, data }) => {
        return {
          method: "PATCH",
          url: `/faq/${id}`,
          body: data,
        };
      },
      invalidatesTags: ["Faq"],
    }),
    deleteFaq: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/faq/${id}`,
        };
      },
      invalidatesTags: ["Faq"],
    }),
  }),
});

export const {
  useCreateFaqMutation,
  useGetAllFaqsQuery,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} = faqSlice;
