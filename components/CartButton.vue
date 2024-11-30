<template>
  <button
    @click="cartStore.toggleCart"
    class="relative rounded-full bg-gray-100 p-2 text-gray-600 hover:text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white"
  >
    <span class="sr-only">Shopping cart</span>
    <svg
      class="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    <span
      v-if="cartStore.cart?.totalQuantity"
      class="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white"
    >
      {{ cartStore.cart.totalQuantity }}
    </span>
  </button>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
</script>