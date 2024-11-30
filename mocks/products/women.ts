import type { Product } from '~/types';
// import { collections } from '../data';

// console.log(collections);

// const summerCollection = collections.find((c) => c.slug === 'summer-collection');
// const newArrivals = collections.find((c) => c.slug === 'new-arrivals');

export const womenProducts: Product[] = [
  {
    id: 'women-1',
    name: 'Floral Summer Dress',
    slug: 'floral-summer-dress',
    description: 'Light and breezy floral dress perfect for summer days',
    price: 7999,
    categories: [{ id: 'cat-1', name: 'Women', slug: 'women' }],
    collections: [],
    featuredAsset: {
      id: 'asset-w1',
      preview: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
      source: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
      alt: 'Floral Summer Dress',
    },
    assets: [
      {
        id: 'asset-w1-1',
        preview: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
        source: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
        alt: 'Floral Summer Dress Front',
      },
    ],
    variants: [
      {
        id: 'var-w1-1',
        name: 'Floral Summer Dress - Small',
        sku: 'FSD-S',
        price: 7999,
        stockLevel: 10,
        options: [{ name: 'Size', value: 'S' }],
      },
      {
        id: 'var-w1-2',
        name: 'Floral Summer Dress - Medium',
        sku: 'FSD-M',
        price: 7999,
        stockLevel: 15,
        options: [{ name: 'Size', value: 'M' }],
      },
    ],
  },
  {
    id: 'women-2',
    name: 'Elegant Evening Gown',
    slug: 'elegant-evening-gown',
    description: 'Sophisticated evening gown for special occasions',
    price: 19999,
    categories: [{ id: 'cat-1', name: 'Women', slug: 'women' }],
    collections: [],
    featuredAsset: {
      id: 'asset-w2',
      preview: 'https://images.unsplash.com/photo-1518985622631-a176db5e6d7c',
      source: 'https://images.unsplash.com/photo-1518985622631-a176db5e6d7c',
      alt: 'Elegant Evening Gown',
    },
    assets: [
      {
        id: 'asset-w2-1',
        preview: 'https://images.unsplash.com/photo-1518985622631-a176db5e6d7c',
        source: 'https://images.unsplash.com/photo-1518985622631-a176db5e6d7c',
        alt: 'Elegant Evening Gown Front',
      },
    ],
    variants: [
      {
        id: 'var-w2-1',
        name: 'Elegant Evening Gown - Small',
        sku: 'EEG-S',
        price: 19999,
        stockLevel: 5,
        options: [{ name: 'Size', value: 'S' }],
      },
      {
        id: 'var-w2-2',
        name: 'Elegant Evening Gown - Medium',
        sku: 'EEG-M',
        price: 19999,
        stockLevel: 8,
        options: [{ name: 'Size', value: 'M' }],
      },
    ],
  },
  // Add more women's products...
];
