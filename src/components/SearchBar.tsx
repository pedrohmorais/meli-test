'use client'

import Image from 'next/image'
import Container from './Container'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const router = useRouter()

  const handleSearch = () => {
    if (searchQuery.trim() !== '' && !searching) {
      setSearching(true)
      router.push(`/items?search=${encodeURIComponent(searchQuery)}`)
      setTimeout(() => {
        setSearching(false)
      }, 1000)
    }
  }

  const handleLogoClick = () => {
    router.push('/')
  }

  return (
    <div className="bg-meliBgPrimary p-2">
      <Container>
        <div className="max-w-[54px] md:max-w-max overflow-hidden flex items-center">
          <Image
            src="/meli-logo.png"
            alt="Mercado Libre"
            className="cursor-pointer max-w-max"
            width={148}
            height={42}
            onClick={handleLogoClick}
          />
        </div>

        <div className="flex flex-1 ml-[34px] relative">
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
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </Container>
    </div>
  )
}

export default SearchBar
