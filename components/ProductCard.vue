<template>
  <div class="group relative">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
      <img
        :src="product.featuredAsset.preview"
        :alt="product.name"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700 dark:text-gray-200">
          <NuxtLink :to="'/products/' + product.slug">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.name }}
          </NuxtLink>
        </h3>
      </div>
      <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
        {{ formatPrice(product.price) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'

const props = defineProps<{
  product: Product
}>()

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price / 100)
}
</script>