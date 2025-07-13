export interface ProductType {
  id: string
  type: string
  typeLabel?: string
  description: string
  image: string
  mode: 'type' | 'category'
  items?: Array<ProductItem>
  seal?: string
  customClassName?: string
}

export interface OptionsSetItem {
  name: string
  values: string[] | string
}

export interface ProductItem {
  id: string
  name: string
  price: number
  priceDiscount?: string
  oldPrice?: number
  description: string
  image: string
  detailedDescription?: string
  available?: boolean
  seal?: string
  optionsSet?: OptionsSetItem[]
  hidden?: boolean
}
