/* eslint-disable @typescript-eslint/no-explicit-any */

import { IItem } from '../IItem'

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
  results: IItem[]
}
