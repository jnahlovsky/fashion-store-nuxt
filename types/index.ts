export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  categories: Category[]
  variants: ProductVariant[]
  featuredAsset: Asset
  assets: Asset[]
  collections?: Collection[]
}

export interface ProductVariant {
  id: string
  name: string
  sku: string
  price: number
  stockLevel: number
  options: ProductOption[]
}

export interface ProductOption {
  name: string
  value: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  featuredAsset?: Asset
  parent?: Category
  children?: Category[]
}

export interface Collection {
  id: string
  name: string
  slug: string
  description?: string
  featuredAsset?: Asset
}

export interface Asset {
  id: string
  preview: string
  source: string
  alt?: string
}

export interface Cart {
  id: string
  lines: CartItem[]
  total: number
  totalQuantity: number
  shippingMethod?: ShippingMethod
  paymentMethod?: PaymentMethod
}

export interface CartItem {
  id: string
  quantity: number
  productVariant: ProductVariant & {
    product: Product
  }
}

export interface ShippingMethod {
  id: string
  name: string
  description?: string
  price: number
  estimatedDays: number
}

export interface PaymentMethod {
  id: string
  name: string
  code: string
  description?: string
  enabled: boolean
}