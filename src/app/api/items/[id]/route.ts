import { itemsService } from '@/services/server/items.service'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params
  try {
    if (!id) {
      throw new Error('ID inválido')
    }
    const item = await itemsService.getById(id)
    return NextResponse.json(item)
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
