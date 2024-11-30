import type { Product } from '~/types'

export const menProducts: Product[] = [
  {
    id: 'men-1',
    name: 'Classic White Shirt',
    slug: 'classic-white-shirt',
    description: 'Timeless white shirt for any occasion',
    price: 4999,
    categories: [{ id: 'cat-2', name: 'Men', slug: 'men' }],
    featuredAsset: {
      id: 'asset-m1',
      preview: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      source: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      alt: 'Classic White Shirt'
    },
    assets: [
      {
        id: 'asset-m1-1',
        preview: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        source: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        alt: 'Classic White Shirt Front'
      }
    ],
    variants: [
      {
        id: 'var-m1-1',
        name: 'Classic White Shirt - Medium',
        sku: 'CWS-M',
        price: 4999,
        stockLevel: 20,
        options: [{ name: 'Size', value: 'M' }]
      },
      {
        id: 'var-m1-2',
        name: 'Classic White Shirt - Large',
        sku: 'CWS-L',
        price: 4999,
        stockLevel: 15,
        options: [{ name: 'Size', value: 'L' }]
      }
    ]
  },
  {
    id: 'men-2',
    name: 'Navy Blazer',
    slug: 'navy-blazer',
    description: 'Classic navy blazer for a sophisticated look',
    price: 14999,
    categories: [{ id: 'cat-2', name: 'Men', slug: 'men' }],
    featuredAsset: {
      id: 'asset-m2',
      preview: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
      source: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
      alt: 'Navy Blazer'
    },
    assets: [
      {
        id: 'asset-m2-1',
        preview: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
        source: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
        alt: 'Navy Blazer Front'
      }
    ],
    variants: [
      {
        id: 'var-m2-1',
        name: 'Navy Blazer - Medium',
        sku: 'NB-M',
        price: 14999,
        stockLevel: 10,
        options: [{ name: 'Size', value: 'M' }]
      },
      {
        id: 'var-m2-2',
        name: 'Navy Blazer - Large',
        sku: 'NB-L',
        price: 14999,
        stockLevel: 8,
        options: [{ name: 'Size', value: 'L' }]
      }
    ]
  }
  // Add 18 more men's products here with similar structure
]