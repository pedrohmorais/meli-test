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
  const maxItems = 7
  return (
    <div className="flex flex-col gap-2">
      {thumbnails.slice(0, maxItems).map((thumb, index) => (
        <figure
          key={index}
          onClick={() => onSelect(index)}
          className={`
            border-2 rounded cursor-pointer hover:border-meliBlue w-[54] h-[54] flex items-center justify-center
            overflow-hidden
            ${selected === index ? 'border-meliBlue' : ''}
          `}
        >
          <Image
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            width={44}
            height={44}
            className="rounded object-cover"
          />
        </figure>
      ))}
    </div>
  )
}

export default ItemDetailThumbs
