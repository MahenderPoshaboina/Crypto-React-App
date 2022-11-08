
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders= {
          'X-RapidAPI-Key': '664ba681demshcdabc98c80ba414p1108dejsn2095c3e28af8',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}
const baseUrl= 'https://coinranking1.p.rapidapi.com';

const createRequest= (url) => ({ url, headers: cryptoApiHeaders});
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) =>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getcryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    })
})

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery, useGetcryptoHistoryQuery,   useGetExchangesQuery

}= cryptoApi;

