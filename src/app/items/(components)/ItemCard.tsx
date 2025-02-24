import { IItem } from '@/app/models/IItem'
import Image from 'next/image'

type CardProps = {
  item: IItem
}

const ItemCard = ({ item }: CardProps) => {
  return (
    <div className="flex border shadow-sm p-4 bg-white w-full">
      <div className="w-40 h-40 flex-shrink-0 relative">
        <Image
          src={item.picture}
          alt={item.title}
          fill
          className="object-contain rounded-md"
        />
      </div>

      <div className="ml-4 flex flex-col justify-center">
        <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
        {item?.seller && (
          <p className="text-sm text-gray-500">Por {item.seller}</p>
        )}

        <p className="text-2xl font-bold text-gray-900 mt-4">
          ${item.price.amount.toLocaleString()}
        </p>

        {item.installments_quantity > 0 && (
          <p className="text-sm text-green-600">
            Mesmo preço em {item.installments_quantity}x de ${' '}
            {item.installments_amount.toLocaleString()}
          </p>
        )}

        {item.free_shipping && (
          <p className="text-sm text-green-600 font-medium mt-4">
            Envío gratis
          </p>
        )}
      </div>
    </div>
  )
}

export default ItemCard
