'use client'

import { IItemDetail } from '@/app/models/IItemDetail'
import ItemDetailThumbs from './ItemDetailThumbs'
import Image from 'next/image'
import { useState } from 'react'
import Container from '@/components/Container'
import { formatCurrency, translateCondition } from '@/app/utils/stringUtils'
import { LANG_ES_AR } from '@/constants/languages'
import { CURRENCY_ARS } from '@/constants/currencies'

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
    description,
    condition,
    sold_quantity,
    category_path_from_root,
  } = itemDetail

  const getAttributeById = (attrId: string) =>
    attributes.find(({ id }) => attrId === id)

  const mainColor = getAttributeById('MAIN_COLOR')

  const navigationComponent = (
    <nav className="text-gray-500 text-sm mb-2 mt-6">
      <a
        href={`/items?search=${title}`}
        className="hover:underline text-meliBlue"
      >
        Volver al listado
      </a>
      {' | '}
      {category_path_from_root.map((categoryName, index) => {
        return (
          <span key={categoryName}>
            Celulares y Teléfonos
            {index <= category_path_from_root.length - 2 ? ' > ' : ''}
          </span>
        )
      })}
    </nav>
  )
  return (
    <Container className="flex-col">
      {navigationComponent}
      <div className="p-4 bg-white shadow rounded-lg mb-6">
        <div className="grid  grid-cols-1 md:grid-cols-[54px_474px_auto] gap-6">
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
            <span className="text-sm meliBlack font-light mt-6">
              {translateCondition(condition, LANG_ES_AR)} | +{sold_quantity}{' '}
              vendidos
            </span>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <span className="meliBlack font-light">
              Por <strong>OCEANGREEN ARGENTINA</strong>
            </span>

            <p className="text-3xl font-bold text-meliBlack">
              ${formatCurrency(price.amount, CURRENCY_ARS)}
            </p>
            <p className="text-sm text-meliGreen">
              Mismo precio en {installments_quantity || 9} quotas de ${' '}
              {formatCurrency(installments_amount || 15000, CURRENCY_ARS)}
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

        <div className="mt-6 pt-4 border-t border-meliBgDarkGrey pb-4">
          <h2 className="text-lg font-semibold mb-3">Descripción</h2>
          <pre className="text-meliBlackLight font-light text-sm">
            {description}
          </pre>
        </div>
      </div>
    </Container>
  )
}

export default ItemDetail
