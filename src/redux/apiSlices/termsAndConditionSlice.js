import { api } from "../api/baseApi";

const termsAndConditionSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    updateTermsAndConditions: builder.mutation({
      query: (data) => {
        return {
          url: `/rule/terms-and-conditions`,
          method: "POST",
          body: data,
        };
      },
    }),
    termsAndCondition: builder.query({
      query: () => {
        return {
          url: `/rule/terms-and-conditions`,
          method: "GET",
        };
      },
      transformResponse: ({ data }) => {
        return data;
      },
    }),

    //about us

    createAboutUs: builder.mutation({
      query: (data) => {
        return {
          url: `/rule/about`,
          method: "POST",
          body: data,
        };
      },
    }),
    aboutUs: builder.query({
      query: () => {
        return {
          url: `/rule/about`,
          method: "GET",
        };
      },
      transformResponse: ({ data }) => {
        return data;
      },
    }),
  }),
});

export const {
  useTermsAndConditionQuery,
  useUpdateTermsAndConditionsMutation,
  useCreateAboutUsMutation,
  useAboutUsQuery,
} = termsAndConditionSlice;
