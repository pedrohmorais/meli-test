'use client'

import { useItems } from '../(providers)/ItemsProvider'

const ItemPagination = () => {
  const { page, changePage, totalPages } = useItems()

  const handlePageChange = (page: number) => {
    changePage(page)
  }

  const totalButtons = totalPages > 20 ? 20 : totalPages
  const sumToIndex = totalPages > 20 ? totalPages - 20 : 0

  return (
    <div className="flex justify-center gap-[2px] items-center mt-4 mb-8 w-max">
      {Array.from({ length: totalButtons }, (_, index) => (
        <button
          key={sumToIndex + index + 1}
          className={`px-[13px] py-1 border rounded text-meliBlack hover:text-meliBlue ${
            page === sumToIndex + index + 1
              ? 'border-meliBlue'
              : 'bg-meliBgDefault border-transparent'
          }`}
          onClick={() => handlePageChange(sumToIndex + index + 1)}
        >
          {sumToIndex + index + 1}
        </button>
      ))}
      <button
        className="ml-2 px-3 py-1 bg-transparent hover:text-meliBlue text-meliBlack"
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Siguiente {'>'}
      </button>
    </div>
  )
}

export default ItemPagination
