import { IApiItems } from '@/app/models/external/IApiItems'
import { IItems } from '@/app/models/IItems'
import { axiosConfig } from './axios.service'
import { itemsMapper } from '@/app/api/items/mapper'

const search = async (query: string, offset: string): Promise<IItems> => {
  return axiosConfig
    .get('/search', {
      params: {
        q: query,
        offset,
      },
    })
    .then(({ data }: { data: IApiItems }) => itemsMapper(data))
    .catch((error) => {
      throw new Error(error)
    })
}

export const itemsService = {
  search,
}
