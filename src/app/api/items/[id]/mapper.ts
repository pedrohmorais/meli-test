import { IApiItemCategory } from '@/models/external/IApiItemCategory'
import { IApiItemDescription } from '@/models/external/IApiItemDescription'
import { IApiItemDetail } from '@/models/external/IApiItemDetail'
import { IItemDetail } from '@/models/IItemDetail'

const getDecimalPlaces = (num: number): number => {
  const str = num.toString()
  const decimalPart = str.split('.')[1]
  return decimalPart ? decimalPart.length : 0
}

export const itemDetailMapper = (
  item: IApiItemDetail,
  description: IApiItemDescription,
  category: IApiItemCategory,
): IItemDetail => {
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
    description: description?.plain_text || '',
    category_path_from_root: category.path_from_root.map(({ name }) => name),
  }
}
