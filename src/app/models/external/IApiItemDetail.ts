/* eslint-disable @typescript-eslint/no-explicit-any */

interface IApiItemDetailPicture {
  id: string
  url: string
}

export type ApiConditionsType = 'new'

export interface IApiItemDetail {
  id: string
  title: string
  condition: ApiConditionsType
  thumbnail_id: string
  seller_id: string
  catalog_product_id: string
  listing_type_id: string
  sanitized_title: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price: number | null
  sale_price: SalePrice
  available_quantity: number
  official_store_id: number | null
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  shipping: Shipping
  stop_time: string
  seller: Seller
  address: Address
  attributes: Attribute[]
  location: Location
  seller_contact: SellerContact
  installments: Installments
  winner_item_id: string | null
  catalog_listing: boolean
  discounts: any
  promotion_decorations: any
  promotions: any
  inventory_id: string | null
  installments_motors: any
  pictures: IApiItemDetailPicture[]
  [key: string]: any
}

export interface Installments {
  quantity: number
  amount: number
  rate: number
  currency_id: string
  metadata: {
    meliplus_installments: boolean
    additional_bank_interest: boolean
  }
}

export interface SalePrice {
  price_id: string
  amount: number
  conditions: SaleConditions
  currency_id: string
  exchange_rate: any
  payment_method_prices: any[]
  payment_method_type: string
  regular_amount: number | null
  type: string
  metadata: any
}

export interface SaleConditions {
  eligible: boolean
  context_restrictions: any[]
  start_time: string | null
  end_time: string | null
}

export interface Shipping {
  store_pick_up: boolean
  free_shipping: boolean
  logistic_type: string | null
  mode: string
  tags: any[]
  benefits: any
  promise: any
  shipping_score: number
}

export interface Seller {
  id: number
  nickname: string
}

export interface Address {
  state_id: string
  state_name: string
  city_id: string
  city_name: string
}

export interface Attribute {
  id: string
  name: string
  value_id: string | null
  value_name: string
  attribute_group_id: string
  attribute_group_name: string
  value_struct: ValueStruct | null
  values: Value[]
  source: number
  value_type: string
}

export interface ValueStruct {
  number: number
  unit: string
}

export interface Value {
  id: string | null
  name: string
  struct: ValueStruct | null
  source: number
}

export interface Location {
  address_line: string
  zip_code: string
  subneighborhood: string | null
  neighborhood: Neighborhood
  city: City
  state: State
  country: Country
  latitude: number
  longitude: number
}

export interface Neighborhood {
  id: string
  name: string
}

export interface City {
  id: string
  name: string
}

export interface State {
  id: string
  name: string
}

export interface Country {
  id: string
  name: string
}

export interface SellerContact {
  contact: string
  other_info: string
  webpage: string
  area_code: string
  phone: string
  area_code2: string
  phone2: string
  email: string
}
