<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
      {{ categoryName }}
    </h1>
    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { slug } = route.params

// Mock data - will be replaced with Vendure query
const categoryName = computed(() => {
  return slug.toString().charAt(0).toUpperCase() + slug.toString().slice(1)
})

const products = ref<Product[]>([])
</script>