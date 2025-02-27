import { IItemDetail } from '@/models/IItemDetail'
import SearchBar from '@/components/SearchBar'
import { itemsService } from '@/services/server/items.service'
import ItemDetail from './(components)/ItemDetail'
import Container from '@/components/Container'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  let itemDetail: IItemDetail
  try {
    itemDetail = await itemsService.getById(id)
  } catch (error) {
    console.error('Erro ao buscar os itens:', error)
    return
  }

  return (
    <div>
      <SearchBar />
      <main className="bg-meliBgDefault min-h-screen">
        <Container>
          <ItemDetail itemDetail={itemDetail} />
        </Container>
      </main>
    </div>
  )
}

export default Page
