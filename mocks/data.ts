import type { Product, Category, Collection, ShippingMethod, PaymentMethod } from '~/types'
import { womenProducts } from './products/women'
import { menProducts } from './products/men'
import { accessoryProducts } from './products/accessories'

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Women',
    slug: 'women',
    description: 'Women\'s fashion collection',
    featuredAsset: {
      id: 'asset-cat-1',
      preview: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
      source: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
      alt: 'Women\'s fashion'
    },
    children: [
      {
        id: 'cat-1-1',
        name: 'Dresses',
        slug: 'women-dresses',
        description: 'Women\'s dresses'
      },
      {
        id: 'cat-1-2',
        name: 'Tops',
        slug: 'women-tops',
        description: 'Women\'s tops'
      }
    ]
  },
  {
    id: 'cat-2',
    name: 'Men',
    slug: 'men',
    description: 'Men\'s fashion collection',
    featuredAsset: {
      id: 'asset-cat-2',
      preview: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891',
      source: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891',
      alt: 'Men\'s fashion'
    },
    children: [
      {
        id: 'cat-2-1',
        name: 'Shirts',
        slug: 'men-shirts',
        description: 'Men\'s shirts'
      },
      {
        id: 'cat-2-2',
        name: 'Pants',
        slug: 'men-pants',
        description: 'Men\'s pants'
      }
    ]
  },
  {
    id: 'cat-3',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Fashion accessories',
    featuredAsset: {
      id: 'asset-cat-3',
      preview: 'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b',
      source: 'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b',
      alt: 'Accessories'
    }
  }
]

export const collections: Collection[] = [
  {
    id: 'col-1',
    name: 'Summer Collection',
    slug: 'summer-collection',
    description: 'Latest summer styles',
    featuredAsset: {
      id: 'asset-col-1',
      preview: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5',
      source: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5',
      alt: 'Summer collection'
    }
  },
  {
    id: 'col-2',
    name: 'New Arrivals',
    slug: 'new-arrivals',
    description: 'Fresh styles just in',
    featuredAsset: {
      id: 'asset-col-2',
      preview: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
      source: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
      alt: 'New arrivals'
    }
  }
]

export const products: Product[] = [
  ...womenProducts,
  ...menProducts,
  ...accessoryProducts
]

export const shippingMethods: ShippingMethod[] = [
  {
    id: 'shipping-1',
    name: 'Standard Shipping',
    description: 'Delivery within 3-5 business days',
    price: 499,
    estimatedDays: 5
  },
  {
    id: 'shipping-2',
    name: 'Express Shipping',
    description: 'Next day delivery',
    price: 1499,
    estimatedDays: 1
  }
]

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'payment-1',
    name: 'Credit Card',
    code: 'credit-card',
    description: 'Pay securely with your credit card',
    enabled: true
  },
  {
    id: 'payment-2',
    name: 'PayPal',
    code: 'paypal',
    description: 'Pay safely via PayPal',
    enabled: true
  }
]

export const featuredProducts = products.filter(product => 
  product.collections?.some(collection => collection.slug === 'new-arrivals')
)

export const banners = [
  {
    id: 'banner-1',
    title: 'Summer Sale',
    subtitle: 'Up to 50% off',
    image: {
      id: 'banner-1-img',
      preview: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
      source: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
      alt: 'Summer sale banner'
    },
    link: '/collections/summer-collection'
  },
  {
    id: 'banner-2',
    title: 'New Collection',
    subtitle: 'Discover the latest trends',
    image: {
      id: 'banner-2-img',
      preview: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5',
      source: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5',
      alt: 'New collection banner'
    },
    link: '/collections/new-arrivals'
  }
]