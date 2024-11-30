<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="mb-8 text-3xl font-bold">Featured Products</h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getFeaturedProducts } = useProducts()
const products = await getFeaturedProducts()
</script>