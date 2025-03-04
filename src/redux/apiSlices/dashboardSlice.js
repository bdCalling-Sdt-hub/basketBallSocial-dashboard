import { api } from "../api/baseApi";

const dashboardSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    generalStats: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/dashboard/general-stat",
        };
      },
    }),

    visitorsState: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/visitors",
        };
      },
    }),

    userStatistics: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/admin/users",
        };
      },
    }),

    earningStatistics: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/admin/earning",
        };
      },
    }),
  }),
});

export const {
  useGeneralStatsQuery,
  useVisitorsStateQuery,
  useUserStatisticsQuery,
  useEarningStatisticsQuery,
} = dashboardSlice;
