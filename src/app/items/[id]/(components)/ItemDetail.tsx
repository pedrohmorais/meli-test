'use client'

import { IItemDetail } from '@/app/models/IItemDetail'
import ItemDetailThumbs from './ItemDetailThumbs'
import Image from 'next/image'
import { useState } from 'react'
import Container from '@/components/Container'

const ItemDetail = ({ itemDetail }: { itemDetail: IItemDetail }) => {
  const [selectedImage, setSelectedImage] = useState(0)

  const {
    pictures,
    title,
    free_shipping,
    installments_quantity,
    installments_amount,
    price,
    attributes,
  } = itemDetail

  const getAttributeById = (attrId: string) =>
    attributes.find(({ id }) => attrId === id)

  const mainColor = getAttributeById('MAIN_COLOR')

  const navigationComponent = (
    <nav className="text-gray-500 text-sm mb-4">
      <a href="#" className="hover:underline">
        Volver al listado
      </a>{' '}
      &gt;
      <a href="#" className="hover:underline">
        {' '}
        Celulares y Teléfonos
      </a>{' '}
      &gt;
      <a href="#" className="hover:underline">
        {' '}
        Celulares y Smartphones
      </a>{' '}
      &gt;
      <a href="#" className="hover:underline">
        {' '}
        Apple iPhone
      </a>
    </nav>
  )
  return (
    <Container className="flex-col">
      {navigationComponent}
      <div className="mx-auto p-4 bg-white shadow rounded-lg">
        <div className="grid  grid-cols-1 md:grid-cols-[80px_474px_auto] gap-6">
          <ItemDetailThumbs
            selected={selectedImage}
            onSelect={setSelectedImage}
            thumbnails={pictures}
          />

          <div>
            <Image
              src={pictures[selectedImage]}
              alt="Imagem Principal"
              width={474}
              height={474}
              className="rounded-lg w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm text-gray-500">Novo | +100 vendidos</span>
            <h1 className="text-2xl font-semibold">{title}</h1>
            {/* <span className="text-gray-600">Por <strong>OCEANGREEN ARGENTINA</strong></span> */}

            <p className="text-3xl font-bold text-meliGreen">${price.amount}</p>
            <p className="text-sm text-meliGreen">
              {installments_quantity}x de ${' '}
              {installments_amount.toLocaleString()}
            </p>
            {free_shipping && (
              <p className="text-meliGreen font-semibold">Envio grátis</p>
            )}

            {mainColor && (
              <p>
                <strong>Color:</strong> {mainColor.value_name}
              </p>
            )}
          </div>
        </div>

        {/* Descrição */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Descrição</h2>
          <p className="text-gray-700 text-sm">
            O iPhone SE é o iPhone de 4.7 polegadas mais potente até agora.
            Possui o chip A13 Bionic, oferecendo um desempenho incrível em apps,
            jogos e fotos. Vem com modo Retrato e seis efeitos de iluminação
            para capturar retratos com qualidade de estúdio.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default ItemDetail
