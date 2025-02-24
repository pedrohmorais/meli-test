'use client'

import { useItems } from '../(providers)/ItemsProvider'

const ItemPagination = () => {
  const { page, setPage, totalPages } = useItems()

  const handlePageChange = (page: number) => {
    setPage(page)
    // fetchMoreItems("", page.toString()); // Atualiza os itens com a nova página
  }

  return (
    <div className="flex gap-2 items-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-1 border rounded ${
            page === index + 1
              ? 'bg-blue-500 text-white'
              : 'bg-white border-gray-300'
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="ml-2 px-3 py-1 border rounded bg-gray-200"
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Siguiente {'>'}
      </button>
    </div>
  )
}

export default ItemPagination
