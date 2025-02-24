import SearchBar from '@/components/SearchBar'
import { itemsService } from '@/services/client/items.service'
import { ItemsProvider } from './(providers)/ItemsProvider'
import { IItems } from '../models/IItems'
import ItemsPage from './(components)/ItemsPage'

const Page = async ({
  searchParams,
}: {
  searchParams?: { search: string; offset: string }
}) => {
  const query = searchParams?.search || ''
  const offset = searchParams?.offset || '1'

  let initialItems: IItems['items'] = []
  try {
    const data = await itemsService.search(query, offset)
    initialItems = data.items
  } catch (error) {
    console.error('Erro ao buscar os itens:', error)
  }

  return (
    <ItemsProvider initialItems={initialItems}>
      <SearchBar />
      <ItemsPage />
    </ItemsProvider>
  )
}

export default Page
