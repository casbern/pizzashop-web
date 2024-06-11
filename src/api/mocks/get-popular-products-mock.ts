import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from './../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 20 },
    { product: 'Pizza 02', amount: 40 },
    { product: 'Pizza 03', amount: 33 },
    { product: 'Pizza 04', amount: 26 },
    { product: 'Pizza 05', amount: 27 },
    { product: 'Pizza 06', amount: 209 },
    { product: 'Pizza 07', amount: 28 },
  ])
})
