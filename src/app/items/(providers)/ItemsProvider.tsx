'use client'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { itemsService } from '@/services/client/items.service'
import { IItem } from '@/app/models/IItem'

interface ItemsContextProps {
  items: IItem[]
  page: number
  totalPages: number
  setPage: Dispatch<SetStateAction<number>>
  getPagedItems: () => IItem[]
  fetchMoreItems: (query: string, offset: string) => Promise<void>
}

export const ITEMS_PER_PAGE = 10

const ItemsContext = createContext<ItemsContextProps | undefined>(undefined)

export const ItemsProvider = ({
  children,
  initialItems,
}: {
  children: React.ReactNode
  initialItems: IItem[]
}) => {
  const [items, setItems] = useState(initialItems || [])
  const [page, setPage] = useState(1)

  const fetchMoreItems = async (query: string, offset: string) => {
    try {
      const newItems = await itemsService.search(query, offset)
      setItems((prev) => [...prev, ...newItems.items])
    } catch (error) {
      console.error('Erro ao buscar mais itens:', error)
    }
  }

  const getPagedItems = () => {
    return items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
  }

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE)

  return (
    <ItemsContext.Provider
      value={{
        items,
        fetchMoreItems,
        page,
        setPage,
        getPagedItems,
        totalPages,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export const useItems = () => {
  const context = useContext(ItemsContext)
  if (!context) {
    throw new Error('useItems deve ser usado dentro de um ItemsProvider')
  }
  return context
}
