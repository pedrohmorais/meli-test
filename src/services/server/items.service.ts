import { IApiItems } from '@/app/models/external/IApiItems'
import { IItems } from '@/app/models/IItems'
import { axiosConfig } from './axios.service'
import { itemsMapper } from '@/app/api/items/mapper'
import { IItemDetail } from '@/app/models/IItemDetail'
import { itemDetailMapper } from '@/app/api/items/[id]/mapper'
import { IApiItemDetail } from '@/app/models/external/IApiItemDetail'

const search = async (query: string, offset: string): Promise<IItems> => {
  return axiosConfig
    .get('/sites/MLA/search', {
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

const getById = async (id: string): Promise<IItemDetail> => {
  console.log('id', id)
  return axiosConfig
    .get(`/items/${id}`)
    .then(
      ({ data }: { data: IApiItemDetail }) =>
        itemDetailMapper(data) as IItemDetail,
    )
    .catch((error) => {
      console.log(error.response)
      throw new Error(error)
    })
}

export const itemsService = {
  search,
  getById,
}
