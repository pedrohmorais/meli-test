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
    <div className="flex md:flex-col gap-2">
      {thumbnails.slice(0, maxItems).map((thumb, index) => (
        <figure
          key={index}
          onClick={() => onSelect(index)}
          className={`
            border-2 rounded cursor-pointer hover:border-meliBlue w-[54] h-[54] flex items-center justify-center
            overflow-hidden  !relative
            ${selected === index ? 'border-meliBlue' : ''}
          `}
        >
          <Image
            src={thumb}
            blurDataURL={thumb}
            placeholder="blur"
            alt={`Thumbnail ${index + 1}`}
            fill
            sizes="52px, 52px, 52px"
            className="!h-[52px] !w-auto !left-1/2 -translate-x-1/2"
          />
        </figure>
      ))}
    </div>
  )
}

export default ItemDetailThumbs
