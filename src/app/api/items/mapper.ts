import { IApiItems } from '@/app/models/external/IApiItems'
import { IItems } from '@/app/models/IItems'

export const itemsMapper = (apiItems: IApiItems): IItems => {
  const { filters, results } = apiItems
  const categories =
    filters.find(({ id }) => id === 'category')?.values.map(({ id }) => id) ||
    []

  return {
    categories,
    items: results,
  }
}
