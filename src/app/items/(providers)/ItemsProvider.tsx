'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { itemsService } from '@/services/client/items.service'
import { IItem } from '@/app/models/IItem'
import { IItems } from '@/app/models/IItems'

interface ItemsContextProps {
  items: IItem[]
  page: number
  totalPages: number
  changePage: (page: number) => void
  getPagedItems: () => IItem[]
  fetchMoreItems: (query: string, offset: string) => Promise<IItems | undefined>
}

export const ITEMS_PER_PAGE = 10

const ItemsContext = createContext<ItemsContextProps | undefined>(undefined)

export const ItemsProvider = ({
  children,
  initialItems,
  query,
  initialOffset,
}: {
  children: React.ReactNode
  initialItems: IItem[]
  query: string
  initialOffset: string
}) => {
  const [items, setItems] = useState(initialItems || [])
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(initialOffset)

  useEffect(() => {
    setItems(initialItems)
    setPage(1)
    setOffset(initialOffset)
  }, [initialItems, initialOffset])

  useEffect(() => {
    setOffset(initialOffset)
  }, [query, initialOffset])

  const fetchMoreItems = async () => {
    try {
      const newOffset = String(Number(offset) + 1)
      const newItems = await itemsService.search(query, newOffset)
      setItems((prev) => [...prev, ...newItems.items])
      setOffset(newOffset)
      return newItems
    } catch (error) {
      console.error('Erro ao buscar mais itens:', error)
    }
  }

  const getPagedItems = () => {
    return items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
  }

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE)

  const changePage = (newPage: number) => {
    if (newPage > page && newPage * ITEMS_PER_PAGE === items.length) {
      fetchMoreItems()
    }
    setPage(newPage)
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        fetchMoreItems,
        page,
        changePage,
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
