import { api } from "../api/baseApi";

const privacyPolicySlice = api.injectEndpoints({
  endpoints: (builder) => ({
    updatePricyPolicy: builder.mutation({
      query: (data) => {
        return {
          url: `/rule/privacy-policy`,
          method: "POST",
          body: data,
        };
      },
    }),
    privacyPolicy: builder.query({
      query: () => {
        return {
          url: `/rule/privacy-policy`,
          method: "GET",
        };
      },
      transformResponse: ({ data }) => {
        return data;
      },
    }),
  }),
});

export const { useUpdatePricyPolicyMutation, usePrivacyPolicyQuery } =
  privacyPolicySlice;
