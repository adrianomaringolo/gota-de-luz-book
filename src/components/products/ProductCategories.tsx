import ScrollSlider from 'components/layout/ScrollSlider'
import Link from 'next/link'
import React from 'react'
import { cn } from 'utils/styling'
import { productTypes } from '../../data/products'
import { ProductType } from '../../interfaces/products'

type ProductCategoriesProps = {
  size?: 'small' | 'large'
}

const sizes = {
  small: { image: 'w-12 h-12 md:w-24 md:h-24', label: 'text-sm', seal: 'w-10' },
  large: { image: 'w-20 h-20 md:w-48 md:h-48', label: 'text-md', seal: 'w-16' },
}

export const ProductCategories = (props: ProductCategoriesProps) => {
  const { size = 'large' } = props

  return (
    <ScrollSlider className="gap-6">
      {productTypes.map((type: ProductType) => (
        <Link href={`/${type.id}`} key={type.id}>
          <div className="flex flex-col gap-2 items-center cursor-pointer relative">
            <div
              className={cn(
                sizes[size].image,
                'border rounded-full',
                'bg-no-repeat bg-cover bg-center',
                'hover:shadow-[#444] hover:shadow-lg hover:border-white hover:border-4',
                'transition-all duration-300 ease-in-out',
              )}
              style={{
                backgroundImage: `url('/images/categories/${type.image}')`,
              }}
            ></div>
            <h3
              dangerouslySetInnerHTML={{
                __html: type.typeLabel || type.type,
              }}
              className={cn(
                sizes[size].label,
                'hover:underline text-center leading-5 whitespace-pre-wrap',
              )}
            />
            <img
              src={type.seal}
              className={cn(sizes[size].seal, 'absolute top-0 right-0')}
            />
          </div>
        </Link>
      ))}
    </ScrollSlider>
  )
}
