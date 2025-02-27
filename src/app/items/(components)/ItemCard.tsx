import { IItem } from '@/models/IItem'
import { formatCurrency } from '@/utils/stringUtils'
import { CURRENCY_ARS } from '@/constants/currencies'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type CardProps = {
  item: IItem
}

const ItemCard = ({ item }: CardProps) => {
  const router = useRouter()
  const goToDetail = () => {
    router.push('/items/' + item.id)
  }
  return (
    <div
      className="flex border shadow-sm px-8 py-4 bg-white w-full cursor-pointer"
      onClick={() => goToDetail()}
    >
      <div className="w-[100] md:w-[180] h-[240] flex-shrink-0 relative">
        <Image
          src={item.picture}
          blurDataURL={item.picture}
          placeholder="blur"
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 100px) 100px, 180px"
          className="object-contain rounded-md"
        />
      </div>

      <div className="ml-4 flex flex-col justify-center py-6">
        <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
        {item?.seller && (
          <p className="text-sm text-gray-500">Por {item.seller}</p>
        )}

        <p className="text-2xl font-bold text-gray-900 mt-5">
          ${formatCurrency(item.price.amount, CURRENCY_ARS)}
        </p>

        {item.installments_quantity > 0 && (
          <p className="text-sm text-meliGreen">
            Mesmo preço em {item.installments_quantity}x de ${' '}
            {formatCurrency(item.installments_amount, CURRENCY_ARS)}
          </p>
        )}

        {item.free_shipping && (
          <p className="text-sm text-meliGreen font-medium mt-6">
            Envío gratis
          </p>
        )}
      </div>
    </div>
  )
}

export default ItemCard
