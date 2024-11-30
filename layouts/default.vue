<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <TheHeader />
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
    <TheFooter />
    <CartSidebar v-if="cartStore.isCartOpen" />
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
</script> 