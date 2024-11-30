import { ref, computed } from 'vue'
import type { Product, Category } from '~/types'
import { products, categories, featuredProducts } from '~/mocks/data'

export function useProducts() {
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const getProduct = async (slug: string): Promise<Product | undefined> => {
    // Mock API call - will be replaced with actual Vendure query
    return products.find(p => p.slug === slug)
  }

  const getProductsByCategory = async (categorySlug: string): Promise<Product[]> => {
    // Mock API call - will be replaced with actual Vendure query
    const category = categories.find(c => c.slug === categorySlug)
    if (!category) return []
    return products.filter(p => p.categories.some(c => c.id === category.id))
  }

  const getFeaturedProducts = async (): Promise<Product[]> => {
    // Mock API call - will be replaced with actual Vendure query
    return featuredProducts
  }

  const getCategories = async (): Promise<Category[]> => {
    // Mock API call - will be replaced with actual Vendure query
    return categories
  }

  return {
    loading,
    error,
    getProduct,
    getProductsByCategory,
    getFeaturedProducts,
    getCategories
  }
}