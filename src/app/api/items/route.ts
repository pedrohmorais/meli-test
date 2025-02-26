import { NextRequest, NextResponse } from 'next/server'
import { itemsService } from '@/services/server/items.service'

export const GET = async (request: NextRequest) => {
  const {
    nextUrl: { searchParams },
  } = await request
  const query = (await searchParams.get('q')) || ''
  const offset = (await searchParams.get('offset')) || ''
  try {
    const items = await itemsService.search(query, offset)
    return NextResponse.json(items)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Erro ao buscar dados',
      },
      { status: 500 },
    )
  }
}
