<template>
  <div class="flex-shrink-0">
    <img
      :src="item.productVariant.product.featuredAsset.preview"
      :alt="item.productVariant.name"
      class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
    />
  </div>
  <div class="ml-4 flex flex-1 flex-col sm:ml-6">
    <div>
      <div class="flex justify-between">
        <h4 class="text-sm">
          <NuxtLink
            :to="`/products/${item.productVariant.product.slug}`"
            class="font-medium text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            {{ item.productVariant.product.name }}
          </NuxtLink>
        </h4>
        <p class="ml-4 text-sm font-medium text-gray-900 dark:text-white">
          {{ formatPrice(item.productVariant.price * item.quantity) }}
        </p>
      </div>
      <p class="mt-1 text-sm text-gray-500">{{ item.productVariant.options[0].value }}</p>
    </div>
    <div class="mt-4 flex flex-1 items-end justify-between">
      <div class="flex items-center space-x-2">
        <button
          @click="updateQuantity(item.quantity - 1)"
          class="rounded-md bg-gray-100 p-1 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
          :disabled="item.quantity <= 1"
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        </button>
        <span class="text-gray-600 dark:text-gray-400">{{ item.quantity }}</span>
        <button
          @click="updateQuantity(item.quantity + 1)"
          class="rounded-md bg-gray-100 p-1 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      <button
        type="button"
        class="text-sm font-medium text-primary-600 hover:text-primary-500"
        @click="cartStore.removeFromCart(item.id)"
      >
        <span>Remove</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/types'

const props = defineProps<{
  item: CartItem
}>()

const cartStore = useCartStore()

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price / 100)
}

const updateQuantity = (newQuantity: number) => {
  if (newQuantity > 0) {
    cartStore.updateLineQuantity(props.item.id, newQuantity)
  }
}
</script>