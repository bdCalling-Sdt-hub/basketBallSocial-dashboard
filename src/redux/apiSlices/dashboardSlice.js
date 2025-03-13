import { api } from "../api/baseApi";

const dashboardSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    generalStats: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/admin/count",
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
