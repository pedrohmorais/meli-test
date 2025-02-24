import { IApiItems } from '@/app/models/external/IApiItems'
import { IItems } from '@/app/models/IItems'

export const itemsMapper = (apiItems: IApiItems): IItems => {
  const { filters, results } = apiItems
  const categories =
    filters.find(({ id }) => id === 'category')?.values.map(({ id }) => id) ||
    []

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString()
    const decimalPart = str.split('.')[1]
    return decimalPart ? decimalPart.length : 0
  }
  return {
    categories,
    items: results.map(
      ({
        id,
        title,
        thumbnail,
        seller,
        condition,
        price: priceAmount,
        sale_price: { regular_amount },
        currency_id,
        shipping: { free_shipping },
        installments,
      }) => ({
        id,
        title,
        price: {
          amount: priceAmount,
          currency: currency_id,
          decimals: getDecimalPlaces(priceAmount),
          regular_amount,
        },
        picture: thumbnail,
        seller: seller.nickname,
        condition: condition,
        free_shipping: free_shipping,
        installments_quantity: installments?.quantity || 0,
        installments_amount: installments?.amount || 0,
      }),
    ),
  }
}
