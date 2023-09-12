import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import BASE_URL from './BASE_URL';

export const ItemSlice = createApi({
    reducerPath: "Api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['api'],

    endpoints: (builder) => ({

        getItem: builder.query({
            query: () => {
                return {
                    url: "/api/portfolios",
                    method: "GET"
                }
            },
            providesTags: ["api"]
        })
    })

});

export const { useGetItemQuery } = ItemSlice

export default ItemSlice.reducer