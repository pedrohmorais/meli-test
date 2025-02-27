import { IItems } from '@/models/IItems'
import { axiosConfig } from './axios.service'

const search = async (query: string, offset: string): Promise<IItems> => {
  return axiosConfig
    .get('/items', {
      params: {
        q: query,
        offset,
      },
    })
    .then(({ data }: { data: IItems }) => data)
    .catch((error) => {
      throw new Error(error)
    })
}

export const itemsService = {
  search,
}
