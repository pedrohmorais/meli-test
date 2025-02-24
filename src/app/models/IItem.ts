export interface IItem {
  id: string
  title: string
  price: {
    currency: string
    amount: number // preço de venda
    decimals: number
    regular_amount: number | null // preço tachado
  }
  picture: string
  seller: string // vendedor
  condition: string
  free_shipping: boolean
  installments_quantity: number // parcelas
  installments_amount: number // parcelas
}
