'use client'
import Container from '@/components/Container'
import { useItems } from '../(providers)/ItemsProvider'
import ItemCard from './ItemCard'
import ItemPagination from './ItemPagination'

const ItemsPage = () => {
  const { getPagedItems } = useItems()
  const pagedItems = getPagedItems()

  return (
    <main className="bg-meliBgDefault min-h-screen">
      <div className="bg-meliBgDarkGrey pb-8">
        <Container className="flex-col">
          <div className="flex flex-col w-full gap-1 pt-8">
            {pagedItems.length > 0 ? (
              pagedItems.map((item) => <ItemCard key={item.id} item={item} />)
            ) : (
              <p>Nenhum item encontrado.</p>
            )}
          </div>
        </Container>
      </div>
      <Container className="flex justify-center">
        <ItemPagination />
      </Container>
    </main>
  )
}

export default ItemsPage
