import { IItem } from './IItem'

interface IItemDetailAttribute {
  id: string
  name: string
  value_name: string
}

export interface IItemDetail extends IItem {
  pictures: string[]
  attributes: IItemDetailAttribute[]
  category_path_from_root: string[]
  sold_quantity: number
  condition: string
}
