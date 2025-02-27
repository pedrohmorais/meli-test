import SearchBar from '@/components/SearchBar'
import { itemsService } from '@/services/client/items.service'
import { ItemsProvider } from './(providers)/ItemsProvider'
import ItemsPage from './(components)/ItemsPage'
import { IItem } from '../../models/IItem'

const Page = async ({
  searchParams,
}: {
  searchParams?: Promise<{ search: string; offset: string }>
}) => {
  const queryParams = await searchParams
  const query = (await queryParams?.search) || ''
  const offset = (await queryParams?.offset) || '1'

  let initialItems: IItem[] = []
  try {
    const data = await itemsService.search(query, offset)
    initialItems = data.items
  } catch (error) {
    console.error('Erro ao buscar os itens:', error)
  }

  return (
    <ItemsProvider
      initialItems={initialItems}
      query={query}
      initialOffset={offset}
    >
      <SearchBar />
      <ItemsPage />
    </ItemsProvider>
  )
}

export default Page
