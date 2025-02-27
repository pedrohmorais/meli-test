import { IApiItems } from '@/models/external/IApiItems'
import { IItems } from '@/models/IItems'
import { axiosConfig } from './axios.service'
import { itemsMapper } from '@/app/api/items/mapper'
import { IItemDetail } from '@/models/IItemDetail'
import { itemDetailMapper } from '@/app/api/items/[id]/mapper'
import { IApiItemDetail } from '@/models/external/IApiItemDetail'
import { IApiItemDescription } from '@/models/external/IApiItemDescription'
import { IApiItemCategory } from '@/models/external/IApiItemCategory'

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

const getCategoryById = async (
  categoryId: string,
): Promise<IApiItemCategory> => {
  return axiosConfig
    .get(`/categories/${categoryId}`)
    .then(({ data }: { data: IApiItemCategory }) => data)
    .catch((error) => {
      console.error(error.response)
      throw new Error(error)
    })
}

const getDescriptionById = async (id: string): Promise<IApiItemDescription> => {
  return axiosConfig
    .get(`/items/${id}/description`)
    .then(({ data }: { data: IApiItemDescription }) => data)
    .catch((error) => {
      console.error(error.response)
      throw new Error(error)
    })
}

const getDetailsById = async (id: string): Promise<IApiItemDetail> => {
  return axiosConfig
    .get(`/items/${id}`)
    .then(({ data }: { data: IApiItemDetail }) => data)
    .catch((error) => {
      console.error(error.response)
      throw new Error(error)
    })
}

const getById = async (id: string): Promise<IItemDetail> => {
  const description = await getDescriptionById(id)
  const details = await getDetailsById(id)
  const category = await getCategoryById(details.category_id)
  return itemDetailMapper(details, description, category) as IItemDetail
}

export const itemsService = {
  search,
  getById,
}
