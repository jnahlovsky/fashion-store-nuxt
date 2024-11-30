import type { Product } from '~/types'

export const accessoryProducts: Product[] = [
  {
    id: 'acc-1',
    name: 'Leather Belt',
    slug: 'leather-belt',
    description: 'Premium leather belt with classic buckle',
    price: 3999,
    categories: [{ id: 'cat-3', name: 'Accessories', slug: 'accessories' }],
    featuredAsset: {
      id: 'asset-a1',
      preview: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      source: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      alt: 'Leather Belt'
    },
    assets: [
      {
        id: 'asset-a1-1',
        preview: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
        source: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
        alt: 'Leather Belt Front'
      }
    ],
    variants: [
      {
        id: 'var-a1-1',
        name: 'Leather Belt - Medium',
        sku: 'LB-M',
        price: 3999,
        stockLevel: 25,
        options: [{ name: 'Size', value: 'M' }]
      },
      {
        id: 'var-a1-2',
        name: 'Leather Belt - Large',
        sku: 'LB-L',
        price: 3999,
        stockLevel: 20,
        options: [{ name: 'Size', value: 'L' }]
      }
    ]
  },
  {
    id: 'acc-2',
    name: 'Silk Scarf',
    slug: 'silk-scarf',
    description: 'Elegant silk scarf with floral pattern',
    price: 2999,
    categories: [{ id: 'cat-3', name: 'Accessories', slug: 'accessories' }],
    featuredAsset: {
      id: 'asset-a2',
      preview: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e',
      source: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e',
      alt: 'Silk Scarf'
    },
    assets: [
      {
        id: 'asset-a2-1',
        preview: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e',
        source: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e',
        alt: 'Silk Scarf Detail'
      }
    ],
    variants: [
      {
        id: 'var-a2-1',
        name: 'Silk Scarf - One Size',
        sku: 'SS-OS',
        price: 2999,
        stockLevel: 30,
        options: [{ name: 'Size', value: 'One Size' }]
      }
    ]
  }
  // Add 18 more accessory products here with similar structure
]