'use client'

import Image from 'next/image'
import Container from './Container'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      router.push(`/items?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="bg-meliBgPrimary p-2">
      <Container>
        <Image
          src="/meli-logo.png"
          alt="Mercado Libre"
          width={150}
          height={50}
        />

        <div className="flex flex-1 ml-8 relative">
          <input
            type="text"
            name="buscar"
            placeholder="Buscar productos, marcas y más..."
            className="w-full p-2 pl-4 pr-10 border rounded-md focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch()
              }
            }}
          />
          <Image
            src="/icons/search.png"
            alt="Search Icon"
            width={20}
            height={20}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={handleSearch}
          />
        </div>
      </Container>
    </div>
  )
}

export default SearchBar
