'use client'
import Image from 'next/image'

type ItemDetailThumbsProps = {
  thumbnails: string[]
  onSelect: (index: number) => void
  selected: number
}

const ItemDetailThumbs = ({
  thumbnails = [],
  onSelect,
  selected,
}: ItemDetailThumbsProps) => {
  return (
    <div className="flex flex-col gap-2">
      {thumbnails.map((thumb, index) => (
        <figure
          key={index}
          onClick={() => onSelect(index)}
          className={`
            border rounded cursor-pointer hover:border-blue-500 w-20 h-20 flex items-center justify-center
            ${selected === index ? 'border-blue-500' : ''}
          `}
        >
          <Image
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            width={80}
            height={80}
            className="rounded object-cover"
          />
        </figure>
      ))}
    </div>
  )
}

export default ItemDetailThumbs
