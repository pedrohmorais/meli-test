import { IApiItemDetail } from '@/app/models/external/IApiItemDetail'
import { IItemDetail } from '@/app/models/IItemDetail'

const getDecimalPlaces = (num: number): number => {
  const str = num.toString()
  const decimalPart = str.split('.')[1]
  return decimalPart ? decimalPart.length : 0
}

export const itemDetailMapper = (item: IApiItemDetail): IItemDetail => {
  const {
    id,
    title,
    pictures,
    thumbnail,
    seller,
    condition,
    price: priceAmount,
    sale_price,
    currency_id,
    shipping: { free_shipping },
    installments,
    initial_quantity,
    attributes,
  } = item
  return {
    id,
    title,
    price: {
      amount: priceAmount,
      currency: currency_id,
      decimals: getDecimalPlaces(priceAmount),
      regular_amount: sale_price?.regular_amount,
    },
    pictures: pictures.map(({ url }) => url),
    picture: pictures[0]?.url || thumbnail || '#',
    seller: seller?.nickname,
    condition: condition,
    free_shipping: free_shipping,
    installments_quantity: installments?.quantity || 0,
    installments_amount: installments?.amount || 0,
    sold_quantity: initial_quantity,
    attributes: attributes
      .filter(({ id }) => ['MAIN_COLOR'].includes(id))
      .map(({ id, name, value_name }) => ({
        id,
        name,
        value_name,
      })),
    category_path_from_root: [],
  }
}

// export const itemDetailMapper = (apiItems: IApiItems): IItems => {
//   const { filters, results } = apiItems
//   const categories =
//     filters.find(({ id }) => id === 'category')?.values.map(({ id }) => id) ||
//     []

//   return {
//     categories,
//     items: results.map(item => Detail(item)),
//   }
// }
