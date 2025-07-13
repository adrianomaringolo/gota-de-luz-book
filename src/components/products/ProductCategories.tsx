import ScrollSlider from 'components/layout/ScrollSlider'
import Link from 'next/link'
import React from 'react'
import { cn } from 'utils/styling'
import { productTypes } from '../../data/products'
import { ProductType } from '../../interfaces/products'

type ProductCategoriesProps = {
  size?: 'small' | 'large'
  mode?: 'scroll' | 'grid'
}

const sizes = {
  small: {
    image: 'w-full h-12 md:w-24 md:h-24',
    label: 'text-sm',
    seal: 'w-7 md:w-10',
  },
  large: {
    image: 'w-full h-40 md:min-w-48 md:h-48',
    label: 'text-md',
    seal: 'w-8 md:w-16',
  },
}

export const ProductCategories = (props: ProductCategoriesProps) => {
  const { size = 'large', mode = 'scroll' } = props

  const elements = productTypes.map((type: ProductType) => (
    <Link href={`/${type.id}`} key={type.id}>
      <div
        className={cn(
          'flex flex-col gap-2 items-center cursor-pointer relative',
          'transition-all duration-300 ease-in-out overflow-hidden',
          mode === 'grid' && 'group rounded-lg hover:shadow-[#444] hover:shadow-lg',
          type.customClassName,
        )}
      >
        <div
          className={cn(
            sizes[size].image,
            'group-hover:scale-125 transition-all',
            'bg-no-repeat bg-cover bg-center',
            mode === 'scroll' && 'rounded-full',
          )}
          style={{
            backgroundImage: `url('/images/categories/${type.image}')`,
          }}
        />
        <h3
          dangerouslySetInnerHTML={{
            __html: type.typeLabel || type.type,
          }}
          className={cn(
            sizes[size].label,
            'hover:underline text-center leading-5 whitespace-pre-wrap ',
            mode === 'grid' &&
              'absolute bottom-0 top-1/2 bg-gradient-to-t from-black/70 to-transparent w-full',
            mode === 'grid' && 'text-white flex flex-col justify-end pb-1 rounded-b-lg',
          )}
        />
        <img src={type.seal} className={cn(sizes[size].seal, 'absolute top-0 right-0')} />
      </div>
    </Link>
  ))

  if (mode === 'grid') {
    return <div className="grid grid-cols-2 md:grid-cols-6 gap-4">{elements}</div>
  }

  return <ScrollSlider className="gap-6">{elements}</ScrollSlider>
}
