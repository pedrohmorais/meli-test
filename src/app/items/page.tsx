import Container from '@/components/Container'
import SearchBar from '@/components/SearchBar'

const ItemsPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) => {
  const search = searchParams?.search
  console.log('props', searchParams?.search)
  return (
    <div>
      <SearchBar />
      <main className="bg-meliBgDefault h-screen">
        <Container>{search}</Container>
      </main>
    </div>
  )
}

export default ItemsPage
