<template>
  <div class="fixed inset-0 z-50 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="cartStore.toggleCart" />
      <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div class="w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-800 shadow-xl">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900 dark:text-white">Shopping cart</h2>
                <button
                  type="button"
                  class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                  @click="cartStore.toggleCart"
                >
                  <span class="sr-only">Close panel</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="mt-8">
                <div v-if="cartStore.cart?.lines?.length" class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
                    <li v-for="item in cartStore.cart.lines" :key="item.id" class="flex py-6">
                      <CartItem :item="item" />
                    </li>
                  </ul>
                </div>
                <div v-else class="text-center py-12">
                  <p class="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                </div>
              </div>
            </div>
            <div v-if="cartStore.cart?.lines?.length" class="border-t border-gray-200 dark:border-gray-700 px-4 py-6 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                <p>Subtotal</p>
                <p>{{ formatPrice(cartStore.cart.total) }}</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Shipping and taxes calculated at checkout.</p>
              <div class="mt-6">
                <NuxtLink
                  to="/checkout"
                  class="flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700"
                  @click="cartStore.toggleCart"
                >
                  Checkout
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore()

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price / 100)
}
</script>