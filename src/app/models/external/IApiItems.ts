/* eslint-disable @typescript-eslint/no-explicit-any */

import { IApiItem } from './IApiItem'

interface FiltersPathFromRoot {
  id: string
  name: string
}

interface FiltersValue {
  id: string
  name: string
  path_from_root: FiltersPathFromRoot[]
}

interface Filters {
  id: string
  name: string
  type: string
  values: FiltersValue[]
}

export interface IApiItems {
  [key: string]: any
  filters: Filters[]
  results: IApiItem[]
}
