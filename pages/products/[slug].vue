<template>
  <div v-if="product" class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
      <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
        <img
          :src="product.featuredAsset.preview"
          :alt="product.name"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ product.name }}
        </h1>
        <div class="mt-4">
          <p class="text-3xl tracking-tight text-gray-900 dark:text-white">
            {{ formatPrice(product.price) }}
          </p>
        </div>
        <div class="mt-4">
          <p class="text-base text-gray-700 dark:text-gray-300">
            {{ product.description }}
          </p>
        </div>
        <div class="mt-8">
          <label for="variant" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Size
          </label>
          <select
            id="variant"
            v-model="selectedVariant"
            class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
          >
            <option v-for="variant in product.variants" :key="variant.id" :value="variant">
              {{ variant.options[0].value }}
            </option>
          </select>
        </div>
        <div class="mt-8">
          <button
            type="button"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            :disabled="!selectedVariant"
            @click="addToCart"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product, ProductVariant } from '~/types'

const route = useRoute()
const { slug } = route.params
const cartStore = useCartStore()

const { getProduct } = useProducts()
const product = await getProduct(slug as string)
const selectedVariant = ref<ProductVariant & { product: Product } | null>(null)

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price / 100)
}

const addToCart = () => {
  if (selectedVariant.value) {
    cartStore.addToCart({
      ...selectedVariant.value,
      product: product
    })
    cartStore.toggleCart()
  }
}

// Set first variant as default
if (product?.variants?.length) {
  selectedVariant.value = {
    ...product.variants[0],
    product: product
  }
}
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
</style>